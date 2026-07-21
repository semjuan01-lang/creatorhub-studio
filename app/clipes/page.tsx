export default function Clipes() {

  const clipes = [
    {
      icon: "🔥",
      title: "Melhores momentos",
      description: "Seus cortes mais importantes."
    },
    {
      icon: "🎮",
      title: "Gameplay",
      description: "Clipes de jogos e partidas."
    },
    {
      icon: "🎤",
      title: "Entrevistas",
      description: "Momentos de podcasts e conversas."
    },
    {
      icon: "📱",
      title: "Redes Sociais",
      description: "Conteúdo pronto para compartilhar."
    }
  ];


  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Meus Clipes
      </h1>

      <p className="text-gray-400 mt-2">
        Organize e gerencie seus melhores momentos.
      </p>


      <button
        className="
        mt-6
        bg-[#00C8FF]
        text-black
        px-6
        py-3
        rounded-xl
        font-bold
        "
      >
        ✂️ Criar novo Clip
      </button>


      <div className="grid md:grid-cols-2 gap-6 mt-8">


        {clipes.map((clip) => (

          <div
            key={clip.title}
            className="
            bg-zinc-950
            border
            border-[#00C8FF]
            rounded-2xl
            p-6
            "
          >

            <div className="text-5xl">
              {clip.icon}
            </div>


            <h2 className="text-2xl font-bold mt-4">
              {clip.title}
            </h2>


            <p className="text-gray-400 mt-2">
              {clip.description}
            </p>


            <button
              className="
              mt-5
              border
              border-[#00C8FF]
              px-4
              py-2
              rounded-xl
              "
            >
              Ver clipes
            </button>


          </div>

        ))}


      </div>


    </main>
  );
}
