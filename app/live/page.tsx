export default function LiveStudio() {
  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Live Studio
      </h1>

      <p className="text-gray-400 mt-2">
        Controle sua transmissão em um único lugar.
      </p>


      <div className="grid lg:grid-cols-3 gap-6 mt-8">


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

            <div className="text-6xl">
              🎥
            </div>

            <p className="text-gray-400 mt-4">
              Preview da transmissão
            </p>

          </div>

        </section>



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

            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              🎙️ Microfone
            </button>


            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              📷 Câmera
            </button>


            <button className="w-full bg-black border border-[#00C8FF] p-3 rounded-xl">
              💬 Chat
            </button>


            <button className="w-full bg-red-600 p-3 rounded-xl font-bold">
              🔴 Iniciar Live
            </button>

          </div>

        </section>


      </div>


    </main>
  );
}
