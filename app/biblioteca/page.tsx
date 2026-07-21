export default function Biblioteca() {

  const itens = [
    {
      icon: "🖼️",
      title: "Imagens",
      description: "Logos, PNG e JPG"
    },
    {
      icon: "🎬",
      title: "Vídeos",
      description: "Clipes e arquivos de vídeo"
    },
    {
      icon: "🎵",
      title: "Sons",
      description: "Alertas e efeitos sonoros"
    },
    {
      icon: "✨",
      title: "Overlays",
      description: "Elementos para suas lives"
    }
  ];


  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Biblioteca
      </h1>

      <p className="text-gray-400 mt-2">
        Organize todos os arquivos da sua transmissão.
      </p>


      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {itens.map((item) => (

          <div
            key={item.title}
            className="
            bg-zinc-950
            border
            border-[#00C8FF]
            rounded-2xl
            p-6
            "
          >

            <div className="text-5xl">
              {item.icon}
            </div>

            <h2 className="text-2xl font-bold mt-4">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {item.description}
            </p>


            <button
              className="
              mt-5
              bg-[#00C8FF]
              text-black
              px-5
              py-2
              rounded-xl
              font-bold
              "
            >
              Adicionar arquivo
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}
