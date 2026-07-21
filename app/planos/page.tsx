export default function Planos() {

  const planos = [
    {
      nome: "Free",
      preco: "R$ 0",
      recursos: [
        "Dashboard",
        "Biblioteca básica",
        "Layouts simples",
        "Clipes básicos"
      ]
    },
    {
      nome: "Pro",
      preco: "R$ 29,90/mês",
      recursos: [
        "Layouts avançados",
        "Live Studio completo",
        "Mais armazenamento",
        "Ferramentas de IA",
        "Clipes em alta qualidade"
      ]
    }
  ];


  return (
    <main className="text-white">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Planos
      </h1>

      <p className="text-gray-400 mt-2">
        Escolha o plano ideal para criar suas transmissões.
      </p>


      <div className="grid md:grid-cols-2 gap-6 mt-8">


        {planos.map((plano) => (

          <div
            key={plano.nome}
            className="
            bg-zinc-950
            border
            border-[#00C8FF]
            rounded-2xl
            p-6
            "
          >

            <h2 className="text-3xl font-bold">
              {plano.nome}
            </h2>


            <p className="text-[#00C8FF] text-2xl mt-3">
              {plano.preco}
            </p>


            <ul className="mt-5 space-y-3">

              {plano.recursos.map((item) => (

                <li key={item} className="text-gray-300">
                  ✅ {item}
                </li>

              ))}

            </ul>


            <button
              className="
              mt-6
              w-full
              bg-[#00C8FF]
              text-black
              font-bold
              p-3
              rounded-xl
              "
            >
              Escolher plano
            </button>


          </div>

        ))}


      </div>


    </main>
  );
}
