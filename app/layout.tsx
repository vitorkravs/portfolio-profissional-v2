import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import { cookies } from 'next/headers';

import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const darkCookie = cookieStore.get('theme_dark');
  const colorCookie = cookieStore.get('theme_color');

  const darkMode = darkCookie ? darkCookie.value === 'true' : true;
  const color = colorCookie ? colorCookie.value : 'cyan';

  const htmlClass = `${darkMode ? 'dark' : ''} ${color}`.trim();

  const removeCzShortcut = `
    (function(){
      try{ var b = document.body; if(b && b.hasAttribute && b.hasAttribute('cz-shortcut-listen')) { b.removeAttribute('cz-shortcut-listen'); } }catch(e){}
    })();
  `;

  return (
    <html lang="pt-br" className={htmlClass} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: removeCzShortcut }} />
      </head>
      <body
        className={`${roboto.variable} antialiased bg-white dark:bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
