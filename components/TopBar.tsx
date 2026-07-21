export default function TopBar() {
  return (
    <div
      className="
      w-full
      bg-zinc-950
      border
      border-[#00C8FF]
      rounded-2xl
      p-4
      flex
      items-center
      justify-between
      "
    >

      <div>
        <h1 className="text-white font-bold text-xl">
          CreatorHub Studio
        </h1>

        <p className="text-gray-400 text-sm">
          Create. Stream. Grow.
        </p>
      </div>


      <div className="flex items-center gap-4">

        <div className="text-gray-300">
          👤 Usuário
        </div>


        <button
          className="
          bg-[#00C8FF]
          text-black
          px-4
          py-2
          rounded-xl
          font-bold
          "
        >
          🎥 Iniciar Live
        </button>

      </div>


    </div>
  );
}
