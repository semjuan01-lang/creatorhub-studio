import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";


export const metadata: Metadata = {
  title: "CreatorHub Studio",
  description: "Create. Stream. Grow.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">

      <body className="bg-black">

        <div className="min-h-screen flex flex-col">

          <header className="p-6 border-b border-[#00C8FF]">
            <Logo />
          </header>


          <div className="flex flex-1 p-6 gap-6">

            <Menu />


            <main className="flex-1">
              {children}
            </main>

          </div>

        </div>

      </body>

    </html>
  );
}
