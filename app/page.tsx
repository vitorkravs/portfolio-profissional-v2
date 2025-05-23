"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Carregue os componentes dinamicamente com SSR desabilitado
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Ou um componente de loading
  }

  return (
    <>
      <div className="lg:mx-16">
        <Navbar />
      </div>
      <div className="container">
        <Header />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
    </>
  );
}