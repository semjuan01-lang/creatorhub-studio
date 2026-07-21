interface CardProps {
  title: string;
  description: string;
  icon: string;
}


export default function Card({
  title,
  description,
  icon,
}: CardProps) {

  return (
    <div
      className="
      bg-zinc-950
      border
      border-[#00C8FF]
      rounded-2xl
      p-6
      hover:scale-105
      transition
      "
    >

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="text-gray-400 mt-2">
        {description}
      </p>

    </div>
  );
}
