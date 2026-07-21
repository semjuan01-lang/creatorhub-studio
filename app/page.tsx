export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-bold text-[#00C8FF]">
        CreatorHub Studio
      </h1>

      <p className="text-xl mt-4">
        Create. Stream. Grow.
      </p>

      <p className="text-gray-400 mt-6 text-center max-w-md">
        Plataforma profissional para criação e transmissão de lives.
      </p>

      <div className="flex gap-4 mt-8">

        <button className="bg-[#00C8FF] text-black px-6 py-3 rounded-xl font-bold">
          Entrar
        </button>

        <button className="border border-[#00C8FF] px-6 py-3 rounded-xl">
          Criar conta
        </button>

      </div>

    </main>
  );
}
