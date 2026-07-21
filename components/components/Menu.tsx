export default function Menu() {

  const items = [
    "🎥 Iniciar Live",
    "🖼️ Meus Layouts",
    "✂️ Meus Clipes",
    "📁 Biblioteca",
    "⭐ Patrocinadores",
    "📱 Redes Sociais",
    "⚙️ Configurações",
  ];


  return (
    <aside className="w-full md:w-64 bg-zinc-950 border border-[#00C8FF] rounded-2xl p-5">

      <h2 className="text-[#00C8FF] text-xl font-bold mb-5">
        CreatorHub
      </h2>


      <nav className="space-y-3">

        {items.map((item) => (
          <button
            key={item}
            className="
            w-full
            text-left
            p-3
            rounded-xl
            bg-black
            text-white
            hover:bg-[#00C8FF]
            hover:text-black
            transition
            "
          >
            {item}
          </button>
        ))}

      </nav>

    </aside>
  );
}
