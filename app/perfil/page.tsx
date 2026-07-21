import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Perfil() {
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
          👤 Meu Perfil
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Gerencie as informações da sua conta.
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
            <label style={{ display: "block", marginBottom: "8px" }}>
              Nome
            </label>

            <input
              type="text"
              placeholder="Seu nome"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#ffffff",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>

            <input
              type="email"
              placeholder="seu@email.com"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#ffffff",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Nova senha
            </label>

            <input
              type="password"
              placeholder="********"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#ffffff",
              }}
            />
          </div>

          <Button>
            Salvar Alterações
          </Button>
        </div>
      </div>
    </Layout>
  );
}
