import type { Metadata } from "next";
import "./globals.css";

import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import TopBar from "@/components/TopBar";


export const metadata: Metadata = {
  title: "CreatorHub Studio",
  description: "Create. Stream. Grow.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">

      <body className="bg-black">

        <div className="min-h-screen p-6">


          <header className="mb-6">
            <Logo />
          </header>


          <TopBar />


          <div className="flex flex-col md:flex-row gap-6 mt-6">


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
