"use client"
import Header from "@/components/Header";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;

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
