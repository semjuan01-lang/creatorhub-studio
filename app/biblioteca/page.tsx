"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import UploadButton from "@/components/library/UploadButton";

interface Media {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
  folder: string;
  favorite: boolean;
}

export default function Biblioteca() {
  const [arquivos, setArquivos] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarArquivos() {
    try {
      const response = await fetch("/api/media");

      const data = await response.json();

      setArquivos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarArquivos();
  }, []);

  return (
    <Layout>
      <div>
        <h1
          style={{
            fontSize: 36,
            color: "#fff",
            marginBottom: 10,
          }}
        >
          📁 Biblioteca
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: 30,
          }}
        >
          Organize imagens, vídeos e áudios.
        </p>

        <div
          style={{
            display: "flex",
            gap: 15,
            marginBottom: 30,
            flexWrap: "wrap",
          }}
        >
          <input
            placeholder="Pesquisar..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 10,
              border: "1px solid #334155",
              background: "#0f172a",
              color: "#fff",
            }}
          />

          <UploadButton />

          <Button>📁 Nova Pasta</Button>
        </div>

        {loading ? (
          <p style={{ color: "#94a3b8" }}>
            Carregando biblioteca...
          </p>
        ) : arquivos.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>
            Nenhum arquivo encontrado.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {arquivos.map((arquivo) => (
              <div
                key={arquivo.id}
                style={{
                  background: "#1e293b",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid #334155",
                }}
              >
                {arquivo.type.startsWith("image") && (
                  <img
                    src={arquivo.url}
                    alt={arquivo.name}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                    }}
                  />
                )}

                {arquivo.type.startsWith("video") && (
                  <video
                    src={arquivo.url}
                    controls
                    style={{
                      width: "100%",
                      height: 180,
                    }}
                  />
                )}

                {arquivo.type.startsWith("audio") && (
                  <div
                    style={{
                      padding: 20,
                    }}
                  >
                    🎵 Áudio
                    <audio
                      controls
                      src={arquivo.url}
                      style={{
                        width: "100%",
                        marginTop: 15,
                      }}
                    />
                  </div>
                )}

                <div
                  style={{
                    padding: 15,
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {arquivo.name}
                  </h3>

                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                    }}
                  >
                    {arquivo.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
