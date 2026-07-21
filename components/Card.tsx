interface CardProps {
  title: string;
  value: string | number;
  description: string;
  icon?: string;
  color?: string;
}

export default function Card({
  title,
  value,
  description,
  icon = "📊",
  color = "#22c55e",
}: CardProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #334155",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color,
            fontSize: "18px",
          }}
        >
          {title}
        </h2>

        <span
          style={{
            fontSize: "28px",
          }}
        >
          {icon}
        </span>
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: "42px",
          color: "#ffffff",
        }}
      >
        {value}
      </h1>

      <p
        style={{
          marginTop: "12px",
          color: "#94a3b8",
          fontSize: "14px",
          lineHeight: "22px",
        }}
      >
        {description}
      </p>
    </div>
  );
}
