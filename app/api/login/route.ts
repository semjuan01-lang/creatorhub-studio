import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";


export async function POST(request: Request) {

  try {

    const { email, password } = await request.json();


    if (!email || !password) {

      return NextResponse.json(
        {
          message: "Preencha todos os campos"
        },
        {
          status: 400
        }
      );

    }



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



    await createSession(user.id);



    return NextResponse.json({

      message: "Login realizado com sucesso",

      user: {

        id: user.id,

        name: user.name,

        email: user.email,

        plan: user.plan

      }

    });



  } catch (error) {


    return NextResponse.json(

      {
        message: "Erro interno no servidor"
      },

      {
        status: 500
      }

    );


  }

}
