export default function Streaming() {

  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Streaming
      </h1>

      <p className="text-gray-400 mt-2">
        Configure sua transmissão para plataformas externas.
      </p>


      <div className="mt-8 grid md:grid-cols-2 gap-6">


        <section
          className="
          bg-zinc-950
          border
          border-[#00C8FF]
          rounded-2xl
          p-6
          "
        >

          <h2 className="text-2xl font-bold">
            Plataforma
          </h2>


          <button
            className="
            mt-5
            w-full
            bg-black
            border
            border-[#00C8FF]
            p-3
            rounded-xl
            "
          >
            ▶️ YouTube
          </button>


          <input
            placeholder="Cole sua Stream Key"
            className="
            mt-5
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
            mt-5
            w-full
            bg-[#00C8FF]
            text-black
            font-bold
            p-3
            rounded-xl
            "
          >
            Conectar
          </button>


        </section>



        <section
          className="
          bg-zinc-950
          border
          border-[#00C8FF]
          rounded-2xl
          p-6
          "
        >

          <h2 className="text-2xl font-bold">
            Controle
          </h2>


          <div className="mt-5 space-y-4">


            <div className="bg-black p-4 rounded-xl">
              🟡 Status: Desconectado
            </div>


            <button
              className="
              w-full
              bg-red-600
              p-3
              rounded-xl
              font-bold
              "
            >
              🔴 Iniciar Transmissão
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
              ⏹ Parar Transmissão
            </button>


          </div>

        </section>


      </div>


    </main>
  );
}
