"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import {
  CLOUDINARY_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from "@/lib/cloudinary";

export default function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  async function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "upload_preset",
        CLOUDINARY_UPLOAD_PRESET
      );

      const response = await fetch(
        CLOUDINARY_URL,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Erro no upload");
      }

      await fetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: file.name,
          type: file.type,
          url: data.secure_url,
          size: file.size,
          folder: "Biblioteca",
        }),
      });

      alert("Upload realizado com sucesso!");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Erro ao enviar arquivo.");
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
        onChange={handleUpload}
      />

      <Button
        onClick={() => inputRef.current?.click()}
      >
        {loading ? "Enviando..." : "📤 Upload"}
      </Button>
    </>
  );
}
