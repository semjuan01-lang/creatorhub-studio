import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const media = await prisma.media.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(media);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erro ao buscar arquivos.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, type, url, size, folder } = body;

    if (!name || !type || !url) {
      return NextResponse.json(
        {
          message: "Dados inválidos.",
        },
        {
          status: 400,
        }
      );
    }

    // ⚠️ TEMPORÁRIO
    // Substitua pelo ID do usuário autenticado quando finalizar o sistema de sessão.
    const user = await prisma.user.findFirst();

    if (!user) {
      return NextResponse.json(
        {
          message: "Nenhum usuário encontrado.",
        },
        {
          status: 404,
        }
      );
    }

    const media = await prisma.media.create({
      data: {
        name,
        type,
        url,
        size,
        folder: folder ?? "Biblioteca",
        userId: user.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        media,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erro ao salvar arquivo.",
      },
      {
        status: 500,
      }
    );
  }
}
