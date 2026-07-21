"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";

export default function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  function abrirSeletor() {
    inputRef.current?.click();
  }

  async function selecionarArquivo(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro no upload");
      }

      alert("✅ Upload realizado com sucesso!");

      console.log(data);

    } catch (error) {
      console.error(error);
      alert("Erro ao enviar arquivo.");
    } finally {
      setLoading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*,video/*,audio/*"
        onChange={selecionarArquivo}
      />

      <Button onClick={abrirSeletor}>
        {loading ? "Enviando..." : "📤 Upload"}
      </Button>
    </>
  );
}
