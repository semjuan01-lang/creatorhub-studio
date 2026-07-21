import Layout from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div>
        <h1
          style={{
            fontSize: "36px",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          📊 Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Bem-vindo ao CreatorHub Studio.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {[
            {
              emoji: "🎥",
              titulo: "Lives",
              valor: "12",
            },
            {
              emoji: "📁",
              titulo: "Arquivos",
              valor: "48",
            },
            {
              emoji: "✂️",
              titulo: "Clipes",
              valor: "31",
            },
            {
              emoji: "👥",
              titulo: "Seguidores",
              valor: "2.530",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid #334155",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                }}
              >
                {item.emoji}
              </div>

              <h2
                style={{
                  color: "#fff",
                  marginTop: "15px",
                }}
              >
                {item.valor}
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                {item.titulo}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h2
            style={{
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            🚀 Próximas Funcionalidades
          </h2>

          <ul
            style={{
              color: "#cbd5e1",
              lineHeight: "2",
            }}
          >
            <li>📤 Upload de arquivos</li>
            <li>🎨 Editor Drag & Drop</li>
            <li>🎥 Live Studio</li>
            <li>📺 Streaming</li>
            <li>🤖 Inteligência Artificial</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
