import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Biblioteca() {
  return (
    <Layout>
      <div>
        <h1
          style={{
            fontSize: "36px",
            color: "#ffffff",
            marginBottom: "10px",
          }}
        >
          📁 Biblioteca
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Organize imagens, vídeos, áudios e overlays do CreatorHub Studio.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "25px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Pesquisar arquivos..."
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #334155",
              background: "#0f172a",
              color: "#ffffff",
            }}
          />

          <Button>📤 Upload</Button>

          <Button>📁 Nova Pasta</Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              emoji: "🖼️",
              nome: "Overlay Gamer",
              tipo: "Imagem PNG",
            },
            {
              emoji: "🎥",
              nome: "Intro Stream",
              tipo: "Vídeo MP4",
            },
            {
              emoji: "🎵",
              nome: "Música Background",
              tipo: "Áudio MP3",
            },
            {
              emoji: "📄",
              nome: "Tela Inicial",
              tipo: "Layout",
            },
          ].map((arquivo, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "14px",
                border: "1px solid #334155",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "15px",
                }}
              >
                {arquivo.emoji}
              </div>

              <h3
                style={{
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                {arquivo.nome}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "18px",
                }}
              >
                {arquivo.tipo}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button>⭐</Button>

                <Button>🗑️</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
