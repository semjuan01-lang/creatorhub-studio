export default function Configuracoes() {

  const opcoes = [
    {
      icon: "🌎",
      title: "Idioma",
      description: "Português • English • Español"
    },
    {
      icon: "🎨",
      title: "Tema",
      description: "Modo claro e escuro"
    },
    {
      icon: "🎥",
      title: "Qualidade da Live",
      description: "Resolução e FPS"
    },
    {
      icon: "🎙️",
      title: "Áudio",
      description: "Microfone e controles de som"
    }
  ];


  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Configurações
      </h1>

      <p className="text-gray-400 mt-2">
        Personalize sua experiência no CreatorHub Studio.
      </p>


      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {opcoes.map((item) => (

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

            <div className="text-4xl">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold mt-4">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}
