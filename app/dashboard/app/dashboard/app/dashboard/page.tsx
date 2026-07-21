import Menu from "@/components/Menu";
import Card from "@/components/Card";
import Logo from "@/components/Logo";

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
      description: "Crie e gerencie seus layouts."
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
      description: "Controle logos e banners."
    },
    {
      icon: "📱",
      title: "Redes Sociais",
      description: "Mostre suas redes durante a live."
    }
  ];


  return (
    <main className="min-h-screen bg-black p-6">

      <Logo />

      <div className="flex flex-col md:flex-row gap-6 mt-8">

        <Menu />


        <section className="flex-1">

          <h1 className="text-3xl font-bold text-white mb-6">
            Dashboard
          </h1>


          <div className="grid md:grid-cols-2 gap-5">

            {cards.map((card) => (
              <Card
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
