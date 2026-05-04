import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import * as pdfParse from "pdf-parse";

// Fallback para lidar com a falta de default export no ESM do pdf-parse
const pdf = (pdfParse as any).default || pdfParse;

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    let extractedText = "";

    if (file.type === "application/pdf") {
      const buffer = Buffer.from(await file.arrayBuffer());
      const data = await pdf(buffer);
      extractedText = data.text;
    } else {
      extractedText = await file.text();
    }

    // Salvar o texto extraído no conhecimento da instância
    const updated = await prisma.whatsAppInstance.update({
      where: { id: id },
      data: {
        knowledgeBase: extractedText
      }
    });

    return NextResponse.json({ 
      message: "Conhecimento atualizado com sucesso",
      preview: extractedText.substring(0, 200) + "..."
    });
  } catch (error) {
    console.error("Erro no processamento de arquivo:", error);
    return NextResponse.json({ error: "Falha ao processar arquivo" }, { status: 500 });
  }
}
