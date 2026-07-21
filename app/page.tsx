export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-[#00C8FF]">
          CreatorHub Studio
        </h1>

        <p className="text-xl mt-4">
          Create. Stream. Grow.
        </p>


        <p className="text-gray-400 mt-6 max-w-md">
          Plataforma profissional para criação e transmissão de lives,
          com controle de layouts, áudio, overlays e conteúdo em um único lugar.
        </p>


        <div className="flex gap-4 justify-center mt-8">

          <button className="
            bg-[#00C8FF]
            text-black
            px-6
            py-3
            rounded-xl
            font-bold
          ">
            Entrar
          </button>


          <button className="
            border
            border-[#00C8FF]
            px-6
            py-3
            rounded-xl
          ">
            Criar conta
          </button>

        </div>

      </div>

    </main>
  );
}
