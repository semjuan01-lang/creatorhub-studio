"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";

export default function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  function openFilePicker() {
    inputRef.current?.click();
  }

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      alert(
        `Arquivo selecionado:\n\n${file.name}\n\nNas próximas etapas ele será enviado automaticamente para o Cloudinary.`
      );
    } catch (error) {
      console.error(error);
      alert("Erro ao selecionar arquivo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={handleFile}
        accept="image/*,video/*,audio/*"
      />

      <Button onClick={openFilePicker}>
        {loading ? "Enviando..." : "📤 Upload"}
      </Button>
    </>
  );
}
