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
      name: "🎥 Live Studio",
      link: "/live"
    },
    {
      name: "⚙️ Configurações",
      link: "/configuracoes"
    }
  ];


  return (
    <aside
      className="
      w-full
      md:w-72
      bg-zinc-950
      border
      border-[#00C8FF]
      rounded-2xl
      p-5
      h-fit
      "
    >

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-[#00C8FF]">
          CreatorHub
        </h2>

        <p className="text-gray-400 text-sm">
          Studio Dashboard
        </p>

      </div>


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


      <div className="mt-8 border-t border-gray-700 pt-4">

        <p className="text-gray-500 text-sm">
          Create. Stream. Grow.
        </p>

      </div>


    </aside>
  );
}
