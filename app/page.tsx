"use client"
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
    </>
  );
}
