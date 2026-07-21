export default function Dashboard() {
  const menu = [
    "🎥 Iniciar Live",
    "🖼️ Meus Layouts",
    "✂️ Meus Clipes",
    "📁 Biblioteca",
    "⭐ Patrocinadores",
    "📱 Redes Sociais",
    "⚙️ Configurações",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#00C8FF]">
          CreatorHub Studio
        </h1>

        <p className="text-gray-400 mt-2">
          Dashboard do seu estúdio de transmissão
        </p>
      </header>


      <section className="grid gap-5 md:grid-cols-3">

        {menu.map((item) => (
          <div
            key={item}
            className="
              border border-[#00C8FF]
              rounded-2xl
              p-6
              bg-zinc-950
              hover:scale-105
              transition
            "
          >
            <h2 className="text-xl font-semibold">
              {item}
            </h2>

            <p className="text-gray-400 mt-3">
              Recurso em desenvolvimento
            </p>

          </div>
        ))}

      </section>

    </main>
  );
}
