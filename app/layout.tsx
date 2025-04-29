import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitor Kravszenko: Desenvolvedor Front-End | Soluções Inovadoras",
  description: "Bem-vindo ao meu portfólio! Aqui você conhecerá um pouco mais sobre mim, minha trajetória, projetos dos quais participei e minhas habilidades como desenvolvedor. Espero que você tenha uma ótima experiência aqui.",
  authors: [
    { name: "Vitor Cesar Kravszenko", url: "https://www.linkedin.com/in/vitorkravszenko/" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased h-full min-h-screen bg-slate-100 dark:bg-slate-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
