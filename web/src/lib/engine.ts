import { prisma } from './prisma';
import nodemailer from 'nodemailer';

interface FlowNode {
  id: string;
  type: string;
  config: any;
}

interface FlowConnection {
  fromId: string;
  toId: string;
  branch?: 'true' | 'false';
}

export class NexusEngine {
  private static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  static async triggerWorkflow(workflowId: string, leadId: string) {
    console.log(`[NexusEngine] Iniciando Workflow ${workflowId} para o Lead ${leadId}`);
    
    const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } });
    if (!workflow) return;

    const nodes: FlowNode[] = JSON.parse(workflow.nodes);
    const triggerNode = nodes.find(n => ['TRIGGER', 'AUDIENCE', 'TAG'].includes(n.type));
    if (!triggerNode) return;

    await prisma.workflowExecution.upsert({
      where: { workflowId_leadId: { workflowId, leadId } },
      update: { status: 'RUNNING', currentNode: triggerNode.id, updatedAt: new Date() },
      create: { workflowId, leadId, status: 'RUNNING', currentNode: triggerNode.id }
    });

    await this.stepForward(workflowId, leadId);
  }

  static async stepForward(workflowId: string, leadId: string) {
    const execution = await prisma.workflowExecution.findUnique({
      where: { workflowId_leadId: { workflowId, leadId } },
      include: { workflow: true, lead: true }
    });

    if (!execution || execution.status !== 'RUNNING') return;

    const nodes: FlowNode[] = JSON.parse(execution.workflow.nodes);
    const connections: FlowConnection[] = JSON.parse(execution.workflow.connections);

    const currentNode = nodes.find(n => n.id === execution.currentNode);
    if (!currentNode) return;

    const nextConns = connections.filter(c => c.fromId === currentNode.id);
    
    if (nextConns.length === 0) {
      await prisma.workflowExecution.update({
        where: { id: execution.id },
        data: { status: 'COMPLETED', updatedAt: new Date() }
      });
      return;
    }

    const nextConn = nextConns[0];
    const nextNode = nodes.find(n => n.id === nextConn.toId);

    if (nextNode) {
      await this.executeNode(nextNode, execution);
    }
  }

  private static async executeNode(node: FlowNode, execution: any) {
    console.log(`[NexusEngine] Executando nó ${node.type} (${node.id})`);

    try {
      switch (node.type) {
        case 'WHATSAPP':
          console.log(`[SIMULAÇÃO] Enviando WhatsApp para ${execution.lead.phone}`);
          break;

        case 'EMAIL':
          if (execution.lead.email && node.config?.smtpId) {
            const smtp = await prisma.smtpAccount.findUnique({ where: { id: node.config.smtpId } });
            
            // Se tiver uma campanha vinculada, usa o layout dela
            let subject = node.config?.subject || "Notificação Hubia";
            let htmlContent = `<div style="font-family:sans-serif;">${node.config?.content || ""}</div>`;

            if (node.config?.campaignId) {
              const campaign = await prisma.campaign.findUnique({ where: { id: node.config.campaignId } });
              if (campaign) {
                subject = campaign.subject;
                htmlContent = campaign.content;
              }
            }

            if (smtp) {
              const dynamicTransporter = nodemailer.createTransport({
                host: smtp.host,
                port: smtp.port,
                secure: smtp.secure,
                auth: { user: smtp.user, pass: smtp.pass },
              });

              await dynamicTransporter.sendMail({
                from: `"${smtp.name}" <${smtp.user}>`,
                to: execution.lead.email,
                subject: subject,
                html: htmlContent,
              });
              console.log(`[NexusEngine] E-mail enviado via conta: ${smtp.name}`);
            }
          }
          break;

        case 'ROUTING':
          if (node.config?.queueId) {
            console.log(`[NexusEngine] Roteando lead ${execution.leadId} para fila ${node.config.queueId}`);
            // Lógica de roteamento: atualiza o status do lead ou cria ticket
            await prisma.lead.update({
              where: { id: execution.leadId },
              data: { status: 'IN_QUEUE', obs: `Encaminhado para fila: ${node.config.queueId}` }
            });
          }
          break;

        case 'DELAY':
          const value = parseInt(node.config?.delayValue || '30');
          const unit = node.config?.delayUnit || 's';
          const ms = unit === 'h' ? value * 3600000 : unit === 'm' ? value * 60000 : value * 1000;
          
          await prisma.workflowExecution.update({
            where: { id: execution.id },
            data: { status: 'DELAYED', currentNode: node.id, nextStepAt: new Date(Date.now() + ms), updatedAt: new Date() }
          });
          return;

        case 'ADD_TAG':
          if (node.config?.tag) {
            const tag = await prisma.tag.findFirst({ where: { name: node.config.tag, tenantId: execution.workflow.tenantId } });
            if (tag) await prisma.lead.update({ where: { id: execution.leadId }, data: { tags: { connect: { id: tag.id } } } });
          }
          break;
      }

      await prisma.workflowExecution.update({
        where: { id: execution.id },
        data: { currentNode: node.id, updatedAt: new Date() }
      });

      await this.stepForward(execution.workflowId, execution.leadId);
    } catch (err) {
      console.error(`[NexusEngine Error] Nó ${node.id}:`, err);
      await prisma.workflowExecution.update({
        where: { id: execution.id },
        data: { status: 'FAILED', updatedAt: new Date() }
      });
    }
  }
}
