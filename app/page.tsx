"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

import AnimationScroll from '@/components/AnimationScroll';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HardSkills = dynamic(() => import("@/components/HardSkills"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="lg:mx-16">
        <Navbar />
      </div>
      <div className="relative w-full flex justify-center items-center">
        <Header />
        <AnimationScroll />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <AboutMe />
        <HardSkills />
        <Experience />
      </main>

      <ScrollToTopButton />
    </>
  );
}