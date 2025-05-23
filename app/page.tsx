"use client"
import Header from "@/components/Header";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true })

export default function Home() {
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
