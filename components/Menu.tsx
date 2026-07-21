"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  async function logout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "#ffffff",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #1e293b",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "35px",
            color: "#38bdf8",
          }}
        >
          🚀 CreatorHub Studio
        </h1>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <Link href="/">🏠 Início</Link>

          <Link href="/dashboard">
            📊 Dashboard
          </Link>

          <Link href="/biblioteca">
            📁 Biblioteca
          </Link>

          <Link href="/editor">
            🎨 Editor de Layout
          </Link>

          <Link href="/live">
            🎥 Live Studio
          </Link>

          <Link href="/streaming">
            📺 Streaming
          </Link>

          <Link href="/clipes">
            ✂️ Meus Clipes
          </Link>

          <Link href="/perfil">
            👤 Perfil
          </Link>

          <Link href="/planos">
            💎 Planos
          </Link>

          <Link href="/configuracoes">
            ⚙️ Configurações
          </Link>
        </nav>
      </div>

      <div
        style={{
          marginTop: "30px",
          borderTop: "1px solid #1e293b",
          paddingTop: "20px",
        }}
      >
        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#ef4444",
            color: "#ffffff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          🚪 Sair
        </button>
      </div>
    </aside>
  );
}
