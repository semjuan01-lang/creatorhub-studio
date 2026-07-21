import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function LiveStudio() {
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
          🎥 Live Studio
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Gerencie suas transmissões ao vivo.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "30px",
              minHeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px dashed #334155",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h2>📹 Pré-visualização</h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "15px",
                }}
              >
                A câmera e as cenas aparecerão aqui.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h2>Cenas</h2>

            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "10px",
              }}
            >
              <Button>➕ Nova Cena</Button>

              <Button color="#3b82f6">
                🎬 Cena Inicial
              </Button>

              <Button color="#6366f1">
                💬 Chat
              </Button>

              <Button color="#f59e0b">
                🎮 Gameplay
              </Button>

              <Button color="#ef4444">
                🎥 Encerramento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
