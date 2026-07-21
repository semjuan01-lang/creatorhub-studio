import Layout from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div>
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            color: "#ffffff",
          }}
        >
          Dashboard
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
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h2>🎥 Lives</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Transmissões realizadas</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h2>✂️ Clipes</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Clipes criados</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h2>📁 Biblioteca</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Arquivos enviados</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h2>💎 Plano</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              Free
            </h1>

            <p>Plano atual</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "#1e293b",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            🚀 Bem-vindo ao CreatorHub Studio
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
            }}
          >
            O CreatorHub Studio será uma plataforma completa para criação,
            edição e transmissão de conteúdo ao vivo.
          </p>

          <br />

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
            }}
          >
            Você poderá criar layouts personalizados, organizar sua
            biblioteca de mídia, transmitir para múltiplas plataformas,
            criar clipes automaticamente e utilizar Inteligência Artificial
            para acelerar seu trabalho.
          </p>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>🎨 Editor de Layout</h3>
            <p>Crie cenas e overlays personalizados.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>📺 Streaming</h3>
            <p>Transmita para YouTube, Twitch e Kick.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>🤖 Inteligência Artificial</h3>
            <p>Legendas, thumbnails e cortes automáticos.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
