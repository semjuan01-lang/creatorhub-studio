import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Configuracoes() {
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
          ⚙️ Configurações
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Personalize sua experiência no CreatorHub Studio.
        </p>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
            maxWidth: "700px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
              }}
            >
              Tema
            </label>

            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#ffffff",
              }}
            >
              <option>Escuro</option>
              <option>Claro</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
              }}
            >
              Idioma
            </label>

            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#ffffff",
              }}
            >
              <option>Português (Brasil)</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <label>
              <input
                type="checkbox"
                defaultChecked
                style={{ marginRight: "10px" }}
              />
              Receber notificações
            </label>
          </div>

          <Button>
            Salvar Configurações
          </Button>
        </div>
      </div>
    </Layout>
  );
}
