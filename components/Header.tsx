export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        background: "#111827",
        borderBottom: "1px solid #1e293b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h2
          style={{
            color: "#ffffff",
            margin: 0,
          }}
        >
          CreatorHub Studio
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          🚀 Nova Live
        </button>

        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#334155",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          J
        </div>
      </div>
    </header>
  );
}
