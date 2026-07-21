export default function Configuracoes() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-[#00C8FF]">
        Configurações
      </h1>

      <p className="text-gray-400 mt-2">
        Personalize sua experiência no CreatorHub Studio.
      </p>


      <div className="grid gap-5 mt-8 md:grid-cols-2">


        <div className="bg-zinc-950 border border-[#00C8FF] rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            🌎 Idioma
          </h2>

          <p className="text-gray-400 mt-2">
            Português • English • Español
          </p>
        </div>


        <div className="bg-zinc-950 border border-[#00C8FF] rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            🎨 Tema
          </h2>

          <p className="text-gray-400 mt-2">
            Claro / Escuro
          </p>
        </div>


        <div className="bg-zinc-950 border border-[#00C8FF] rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            🎥 Qualidade da Live
          </h2>

          <p className="text-gray-400 mt-2">
            Resolução e FPS
          </p>
        </div>


        <div className="bg-zinc-950 border border-[#00C8FF] rounded-2xl p-6">
          <h2 className="text-xl font-bold">
            🎙️ Áudio
          </h2>

          <p className="text-gray-400 mt-2">
            Microfone e controles de som
          </p>
        </div>


      </div>

    </main>
  );
}
