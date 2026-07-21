import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Preencha todos os campos.",
        },
        {
          status: 400,
        }
      );
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          message: "Usuário já cadastrado.",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await createSession(user.id);

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          plan: user.plan,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erro ao criar usuário.",
      },
      {
        status: 500,
      }
    );
  }
}
