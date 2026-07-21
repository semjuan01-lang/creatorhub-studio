export default function LiveStudio() {

  return (
    <main className="text-white">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-[#00C8FF]">
            Live Studio
          </h1>

          <p className="text-gray-400 mt-2">
            Controle sua transmissão em um único lugar.
          </p>
        </div>


        <div className="
          bg-red-600
          px-4
          py-2
          rounded-xl
          font-bold
        ">
          🔴 AO VIVO
        </div>

      </div>



      <div className="grid lg:grid-cols-3 gap-6 mt-8">


        {/* Preview */}

        <section
          className="
          lg:col-span-2
          bg-zinc-950
          border
          border-[#00C8FF]
          rounded-2xl
          min-h-[400px]
          flex
          items-center
          justify-center
          "
        >

          <div className="text-center">

            <div className="text-7xl">
              🎥
            </div>

            <p className="text-gray-400 mt-4">
              Preview da transmissão
            </p>


            <div className="mt-5 text-[#00C8FF]">
              ⏱️ 00:00:00
            </div>

          </div>

        </section>




        {/* Controles */}

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
            Controles
          </h2>


          <div className="space-y-3 mt-5">


            <button className="
              w-full
              bg-black
              border
              border-[#00C8FF]
              p-3
              rounded-xl
            ">
              🎙️ Microfone
            </button>


            <button className="
              w-full
              bg-black
              border
              border-[#00C8FF]
              p-3
              rounded-xl
            ">
              🔊 Áudio
            </button>


            <button className="
              w-full
              bg-black
              border
              border-[#00C8FF]
              p-3
              rounded-xl
            ">
              📷 Câmera
            </button>


            <button className="
              w-full
              bg-black
              border
              border-[#00C8FF]
              p-3
              rounded-xl
            ">
              ✂️ Criar Clip
            </button>


            <button className="
              w-full
              bg-black
              border
              border-[#00C8FF]
              p-3
              rounded-xl
            ">
              ⏺️ Gravar
            </button>


            <button className="
              w-full
              bg-red-600
              p-3
              rounded-xl
              font-bold
            ">
              🔴 Iniciar Live
            </button>


          </div>


        </section>


      </div>




      {/* Área inferior */}

      <section className="
        mt-6
        bg-zinc-950
        border
        border-[#00C8FF]
        rounded-2xl
        p-5
      ">

        <h2 className="text-xl font-bold">
          Recursos da Live
        </h2>


        <div className="grid md:grid-cols-4 gap-4 mt-5">


          <div className="bg-black p-4 rounded-xl">
            💬 Chat
          </div>


          <div className="bg-black p-4 rounded-xl">
            🔔 Alertas
          </div>


          <div className="bg-black p-4 rounded-xl">
            📱 Redes Sociais
          </div>


          <div className="bg-black p-4 rounded-xl">
            📌 QR Code
          </div>


        </div>


      </section>


    </main>
  );
}
