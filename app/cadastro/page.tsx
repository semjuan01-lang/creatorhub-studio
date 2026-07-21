"use client";

import { useState } from "react";


export default function Cadastro() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function criarConta() {

    await fetch("/api/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        password
      })

    });


    alert("Conta criada!");

  }



  return (

    <main className="min-h-screen flex items-center justify-center text-white">


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
          Criar conta
        </h1>


        <input
          placeholder="Nome"
          className="w-full mt-5 p-3 bg-black rounded-xl"
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          placeholder="Email"
          className="w-full mt-3 p-3 bg-black rounded-xl"
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          placeholder="Senha"
          type="password"
          className="w-full mt-3 p-3 bg-black rounded-xl"
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          onClick={criarConta}
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
          Criar conta
        </button>


      </div>


    </main>

  );
}
