"use client";

import { useState } from "react";
import Link from "next/link";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function entrar() {

    const response = await fetch("/api/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email,
        password
      })

    });


    const data = await response.json();


    if (response.ok) {

      alert("Login realizado com sucesso!");

      window.location.href = "/dashboard";

    } else {

      alert(data.message);

    }

  }



  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      text-white
    ">


      <div className="
        bg-zinc-950
        border
        border-[#00C8FF]
        rounded-2xl
        p-8
        w-full
        max-w-md
      ">


        <h1 className="
          text-3xl
          font-bold
          text-[#00C8FF]
        ">
          CreatorHub Studio
        </h1>


        <p className="text-gray-400 mt-2">
          Entre na sua conta
        </p>



        <input
          placeholder="Email"
          className="
            w-full
            mt-6
            p-3
            bg-black
            border
            border-gray-700
            rounded-xl
          "
          onChange={(e)=>setEmail(e.target.value)}
        />



        <input
          placeholder="Senha"
          type="password"
          className="
            w-full
            mt-3
            p-3
            bg-black
            border
            border-gray-700
            rounded-xl
          "
          onChange={(e)=>setPassword(e.target.value)}
        />



        <button
          onClick={entrar}
          className="
            w-full
            mt-5
            bg-[#00C8FF]
            text-black
            font-bold
            p-3
            rounded-xl
          "
        >
          Entrar
        </button>



        <p className="text-gray-400 mt-5 text-center">

          Ainda não tem conta?

          <Link
            href="/cadastro"
            className="text-[#00C8FF] ml-2"
          >
            Criar conta
          </Link>

        </p>


      </div>


    </main>

  );
}
