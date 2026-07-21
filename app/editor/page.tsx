export default function Editor() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Editor de Layout
      </h1>

      <p className="text-gray-400 mt-2">
        Crie sua tela de transmissão.
      </p>


      <section className="mt-8 grid md:grid-cols-3 gap-6">


        <div className="bg-zinc-950 border border-[#00C8FF] rounded-2xl p-5">

          <h2 className="text-xl font-bold">
            Elementos
          </h2>

          <div className="mt-4 space-y-3">

            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              🖼️ Imagem
            </button>

            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              🔤 Texto
            </button>

            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              🎥 Vídeo
            </button>

            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              ✨ Overlay
            </button>

          </div>

        </div>


        <div className="md:col-span-2 bg-zinc-900 border border-[#00C8FF] rounded-2xl min-h-[400px] flex items-center justify-center">

          <p className="text-gray-500">
            Área de edição da live
          </p>

        </div>


      </section>

    </main>
  );
}
