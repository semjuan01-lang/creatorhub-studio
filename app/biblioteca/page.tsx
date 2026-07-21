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
          Organize todos os arquivos do CreatorHub Studio.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h2>📷 Imagens</h2>
            <h1>0</h1>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h2>🎥 Vídeos</h2>
            <h1>0</h1>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h2>🎵 Áudios</h2>
            <h1>0</h1>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <h2>📄 Arquivos</h2>
            <h1>0</h1>
          </div>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            📤 Novo Upload
          </h2>

          <input
            type="file"
            style={{
              width: "100%",
              padding: "12px",
              background: "#0f172a",
              color: "#ffffff",
              border: "1px solid #334155",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <Button>
            Enviar Arquivo
          </Button>
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
              marginBottom: "20px",
            }}
          >
            📂 Meus Arquivos
          </h2>

          <div
            style={{
              textAlign: "center",
              padding: "40px",
              border: "2px dashed #334155",
              borderRadius: "12px",
            }}
          >
            <h3>📭 Nenhum arquivo encontrado</h3>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "10px",
              }}
            >
              Faça upload de imagens, vídeos, músicas ou documentos para começar.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h2>🚀 Recursos que serão adicionados</h2>

          <ul
            style={{
              color: "#cbd5e1",
              lineHeight: "32px",
              marginTop: "20px",
            }}
          >
            <li>✅ Upload de imagens</li>
            <li>✅ Upload de vídeos</li>
            <li>✅ Upload de áudio</li>
            <li>✅ Upload de documentos</li>
            <li>✅ Visualização em grade</li>
            <li>✅ Visualização em lista</li>
            <li>✅ Pesquisa de arquivos</li>
            <li>✅ Pastas</li>
            <li>✅ Favoritos</li>
            <li>✅ Excluir arquivos</li>
            <li>✅ Compartilhamento</li>
            <li>✅ Integração com o Live Studio</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
