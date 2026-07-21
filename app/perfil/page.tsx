export default function Perfil() {

  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Perfil
      </h1>

      <p className="text-gray-400 mt-2">
        Gerencie sua conta CreatorHub Studio.
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

          <div className="
            w-24
            h-24
            rounded-full
            bg-[#00C8FF]
            flex
            items-center
            justify-center
            text-black
            text-4xl
            font-bold
          ">
            C
          </div>


          <h2 className="text-2xl font-bold mt-5">
            Criador
          </h2>


          <p className="text-gray-400">
            criador@email.com
          </p>


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
            Plano
          </h2>


          <div className="
            mt-5
            bg-black
            rounded-xl
            p-5
          ">

            ⭐ Free

            <p className="text-gray-400 mt-2">
              Recursos básicos do CreatorHub.
            </p>

          </div>


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
            Fazer Upgrade Pro
          </button>


        </section>


      </div>


    </main>
  );
}
