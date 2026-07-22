import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        {
          message: "Usuário não autenticado.",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const { url, name, type, size } = body;

    if (!url || !name || !type) {
      return NextResponse.json(
        {
          message: "Dados inválidos.",
        },
        {
          status: 400,
        }
      );
    }

    const media = await prisma.media.create({
      data: {
        name,
        type,
        url,
        size: size ?? 0,
        folder: "Biblioteca",
        userId: session.value,
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
        success: false,
        message: "Erro ao salvar mídia.",
      },
      {
        status: 500,
      }
    );
  }
}
