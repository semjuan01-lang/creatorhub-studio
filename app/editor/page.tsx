import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Editor() {
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
          🎨 Editor de Layout
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Crie cenas personalizadas para suas transmissões.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "250px 1fr 300px",
            gap: "20px",
          }}
        >
          {/* Barra de ferramentas */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h2>Ferramentas</h2>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <Button>📝 Texto</Button>
              <Button>🖼️ Imagem</Button>
              <Button>🎥 Vídeo</Button>
              <Button>🎤 Webcam</Button>
              <Button>🎵 Áudio</Button>
              <Button>📺 Navegador</Button>
            </div>
          </div>

          {/* Área de edição */}
          <div
            style={{
              background: "#111827",
              borderRadius: "16px",
              border: "2px dashed #334155",
              minHeight: "650px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h2>🎬 Área de Edição</h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "15px",
                }}
              >
                Arraste elementos para montar sua cena.
              </p>
            </div>
          </div>

          {/* Propriedades */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h2>Propriedades</h2>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "15px",
              }}
            >
              Quando um elemento for selecionado,
              suas configurações aparecerão aqui.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
