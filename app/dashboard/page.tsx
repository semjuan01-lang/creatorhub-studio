import Card from "@/components/Card";

export default function Dashboard() {

  const cards = [
    {
      icon: "🎥",
      title: "Iniciar Live",
      description: "Controle sua transmissão ao vivo."
    },
    {
      icon: "🖼️",
      title: "Meus Layouts",
      description: "Crie e gerencie suas telas."
    },
    {
      icon: "✂️",
      title: "Meus Clipes",
      description: "Organize seus melhores momentos."
    },
    {
      icon: "📁",
      title: "Biblioteca",
      description: "Guarde imagens, vídeos e sons."
    },
    {
      icon: "⭐",
      title: "Patrocinadores",
      description: "Gerencie logos e banners."
    },
    {
      icon: "📱",
      title: "Redes Sociais",
      description: "Mostre suas redes na live."
    }
  ];


  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Bem-vindo ao seu estúdio de transmissão.
      </p>


      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {cards.map((card) => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}

      </div>

    </main>
  );
}
