export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div
        className="
        w-full
        max-w-md
        bg-zinc-950
        border
        border-[#00C8FF]
        rounded-2xl
        p-8
        "
      >

        <h1 className="text-3xl font-bold text-[#00C8FF] text-center">
          CreatorHub Studio
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Create. Stream. Grow.
        </p>


        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="E-mail"
            className="
            w-full
            bg-black
            border
            border-gray-700
            rounded-xl
            p-3
            "
          />


          <input
            type="password"
            placeholder="Senha"
            className="
            w-full
            bg-black
            border
            border-gray-700
            rounded-xl
            p-3
            "
          />


          <button
            className="
            w-full
            bg-[#00C8FF]
            text-black
            font-bold
            p-3
            rounded-xl
            "
          >
            Entrar
          </button>


          <button
            className="
            w-full
            border
            border-[#00C8FF]
            p-3
            rounded-xl
            "
          >
            Criar conta
          </button>

        </div>

      </div>

    </main>
  );
}
