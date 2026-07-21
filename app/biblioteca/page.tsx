import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Biblioteca() {
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
          📁 Biblioteca
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Organize todas as imagens, vídeos, áudios e arquivos do CreatorHub
          Studio.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Button>+ Novo Upload</Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2>📷 Imagens</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Nenhuma imagem enviada.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2>🎥 Vídeos</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Nenhum vídeo enviado.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2>🎵 Áudios</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Nenhum áudio enviado.</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2>📄 Arquivos</h2>

            <h1
              style={{
                fontSize: "40px",
                margin: "15px 0",
              }}
            >
              0
            </h1>

            <p>Nenhum arquivo enviado.</p>
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
          <h2>🚀 Em breve</h2>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "15px",
              lineHeight: "30px",
            }}
          >
            Nesta página você poderá enviar e organizar todos os seus arquivos
            para utilizar no Editor de Layout, Live Studio, Streaming e criação
            de Clipes.
          </p>

          <br />

          <ul
            style={{
              color: "#94a3b8",
              lineHeight: "32px",
              paddingLeft: "20px",
            }}
          >
            <li>✅ Upload de imagens</li>
            <li>✅ Upload de vídeos</li>
            <li>✅ Upload de músicas</li>
            <li>✅ Organização por pastas</li>
            <li>✅ Busca rápida</li>
            <li>✅ Favoritos</li>
            <li>✅ Lixeira</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
