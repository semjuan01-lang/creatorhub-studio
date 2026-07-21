export default function Header() {
  return (
    <header
      style={{
        height: "70px",
        background: "#1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
        borderBottom: "1px solid #334155",
      }}
    >
      <div>
        <h2
          style={{
            color: "#22c55e",
            margin: 0,
            fontSize: "24px",
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
        <input
          type="text"
          placeholder="Pesquisar..."
          style={{
            width: "250px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "#ffffff",
          }}
        />

        <span style={{ fontSize: "24px" }}>🔔</span>

        <span style={{ fontSize: "24px" }}>👤</span>
      </div>
    </header>
  );
}
