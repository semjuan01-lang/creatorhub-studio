type MediaCardProps = {
  icon: string;
  title: string;
  type: string;
};

export default function MediaCard({
  icon,
  title,
  type,
}: MediaCardProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "20px",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#fff",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "18px",
        }}
      >
        {type}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Abrir
        </button>

        <button
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#f59e0b",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ⭐
        </button>

        <button
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#ef4444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
