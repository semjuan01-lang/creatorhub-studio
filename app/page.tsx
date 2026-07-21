export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#22c55e",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        CreatorHub Studio
      </h1>

      <h2
        style={{
          fontSize: "24px",
          color: "#cbd5e1",
          marginBottom: "30px",
          fontWeight: "normal",
        }}
      >
        Create. Stream. Grow.
      </h2>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "18px",
          lineHeight: "30px",
          marginBottom: "50px",
        }}
      >
        Plataforma profissional para criação de conteúdo, transmissões ao vivo,
        edição de layouts, biblioteca de mídia, gerenciamento de clipes e
        ferramentas de Inteligência Artificial para criadores de conteúdo,
        gamers, igrejas, empresas e podcasts.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "70px",
        }}
      >
        <a
          href="/login"
          style={{
            background: "#22c55e",
            color: "#fff",
            padding: "15px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Entrar
        </a>

        <a
          href="/cadastro"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "15px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Criar Conta
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🎥 Live Studio</h3>
          <p>Controle câmera, microfone, cenas e transmissões ao vivo.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🎨 Editor de Layout</h3>
          <p>Crie overlays e layouts personalizados com facilidade.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>📚 Biblioteca</h3>
          <p>Organize imagens, vídeos, músicas e arquivos do projeto.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>📺 Streaming</h3>
          <p>Transmita para YouTube, Twitch, Kick e outras plataformas.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>✂️ Clipes</h3>
          <p>Crie cortes automáticos para Shorts, Reels e TikTok.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🤖 Inteligência Artificial</h3>
          <p>Legendas automáticas, thumbnails, overlays e cortes inteligentes.</p>
        </div>
      </div>

      <footer
        style={{
          marginTop: "70px",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        © 2026 CreatorHub Studio — Create. Stream. Grow.
      </footer>
    </main>
  );
}
