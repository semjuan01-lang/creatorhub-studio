import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { email, password } = body;


    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });


    if (!user) {

      return NextResponse.json(
        {
          message: "Usuário não encontrado"
        },
        {
          status: 404
        }
      );

    }


    if (user.password !== password) {

      return NextResponse.json(
        {
          message: "Senha incorreta"
        },
        {
          status: 401
        }
      );

    }


    return NextResponse.json(
      {
        message: "Login realizado",
        user
      }
    );


  } catch {

    return NextResponse.json(
      {
        message: "Erro no login"
      },
      {
        status:500
      }
    );

  }

}
