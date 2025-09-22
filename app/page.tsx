"use client";

import dynamic from 'next/dynamic';

import { useEffect, useState } from "react";

import AnimationScroll from '@/components/AnimationScroll';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Loading from './loading';

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HardSkills = dynamic(() => import("@/components/HardSkills"), { ssr: false });
const AboutMe = dynamic(() => import("@/components/AboutMe"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [showLoadingOnce, setShowLoadingOnce] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      try { history.scrollRestoration = 'manual'; } catch { }
      window.scrollTo({ top: 0, left: 0 });
    }

    try {
      const seen = sessionStorage.getItem('home_seen');
      if (!seen) {
        sessionStorage.setItem('home_seen', 'true');
        setShowLoadingOnce(true);
      } else {
        setShowLoadingOnce(false);
      }
    } catch (e) {
      setShowLoadingOnce(false);
    }

    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return showLoadingOnce ? <Loading /> : null;
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