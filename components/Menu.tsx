import Link from "next/link";

export default function Menu() {

  const items = [
    {
      name: "🏠 Início",
      link: "/"
    },
    {
      name: "📊 Dashboard",
      link: "/dashboard"
    },
    {
      name: "📁 Biblioteca",
      link: "/biblioteca"
    },
    {
      name: "🎨 Editor de Layout",
      link: "/editor"
    },
    {
      name: "⚙️ Configurações",
      link: "/configuracoes"
    }
  ];


  return (
    <aside className="w-full md:w-64 bg-zinc-950 border border-[#00C8FF] rounded-2xl p-5">

      <h2 className="text-[#00C8FF] text-xl font-bold mb-5">
        CreatorHub
      </h2>


      <nav className="space-y-3">

        {items.map((item) => (

          <Link
            key={item.link}
            href={item.link}
            className="
            block
            p-3
            rounded-xl
            bg-black
            text-white
            hover:bg-[#00C8FF]
            hover:text-black
            transition
            "
          >
            {item.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}
