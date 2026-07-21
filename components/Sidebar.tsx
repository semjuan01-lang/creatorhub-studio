export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        height: "100vh",
        background: "#1e293b",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          color: "#22c55e",
          marginBottom: "30px",
          fontSize: "28px",
        }}
      >
        CreatorHub
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <a href="/">🏠 Início</a>

        <a href="/dashboard">📊 Dashboard</a>

        <a href="/biblioteca">📁 Biblioteca</a>

        <a href="/editor">🎨 Editor de Layout</a>

        <a href="/live">🎥 Live Studio</a>

        <a href="/streaming">📺 Streaming</a>

        <a href="/clipes">✂️ Meus Clipes</a>

        <a href="/perfil">👤 Perfil</a>

        <a href="/planos">💎 Planos</a>

        <a href="/configuracoes">⚙️ Configurações</a>
      </nav>
    </aside>
  );
}
