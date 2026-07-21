export default function Editor() {

  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Editor de Layout
      </h1>

      <p className="text-gray-400 mt-2">
        Crie sua tela personalizada de transmissão.
      </p>


      <div className="grid md:grid-cols-3 gap-6 mt-8">


        <section
          className="
          bg-zinc-950
          border
          border-[#00C8FF]
          rounded-2xl
          p-5
          "
        >

          <h2 className="text-xl font-bold">
            Elementos
          </h2>


          <div className="space-y-3 mt-5">

            <button className="w-full border border-[#00C8FF] p-3 rounded-xl">
              🖼️ Imagem
            </button>

            <button className="w-full border border-[#00C8FF] p-3 rounded-xl">
              🔤 Texto
            </button>

            <button className="w-full border border-[#00C8FF] p-3 rounded-xl">
              🎥 Vídeo
            </button>

            <button className="w-full border border-[#00C8FF] p-3 rounded-xl">
              ✨ Overlay
            </button>

          </div>

        </section>



        <section
          className="
          md:col-span-2
          min-h-[400px]
          bg-zinc-900
          border
          border-[#00C8FF]
          rounded-2xl
          flex
          items-center
          justify-center
          "
        >

          <p className="text-gray-500">
            Área de criação da live
          </p>

        </section>


      </div>


    </main>
  );
}
