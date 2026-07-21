import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { name, email, password } = body;


    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    });


    if (userExists) {
      return NextResponse.json(
        {
          message: "Usuário já cadastrado"
        },
        {
          status: 400
        }
      );
    }


    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });


    return NextResponse.json(
      {
        message: "Usuário criado com sucesso",
        user
      },
      {
        status: 201
      }
    );


  } catch (error) {

    return NextResponse.json(
      {
        message: "Erro ao criar usuário"
      },
      {
        status: 500
      }
    );

  }

}
