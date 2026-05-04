import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET: Busca a configuração de IA de uma instância
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const instance = await prisma.whatsAppInstance.findUnique({
      where: { id: id },
      select: { aiEnabled: true, aiPrompt: true, aiModel: true, knowledgeBase: true }
    });
    return NextResponse.json(instance || {});
  } catch (error) {
    console.error("[GET AI Config Error]:", error);
    return NextResponse.json({ error: "Falha ao buscar config" }, { status: 500 });
  }
}

// PATCH: Atualiza a configuração de IA
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const updated = await prisma.whatsAppInstance.update({
      where: { id: id },
      data: {
        aiEnabled: body.aiEnabled,
        aiPrompt: body.aiPrompt,
        aiModel: body.aiModel,
        knowledgeBase: body.knowledgeBase
      }
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao salvar config" }, { status: 500 });
  }
}
