"use client";
import { useEffect, useState } from "react";

import SelectModeTheme from "./components/SelectModeTheme";

import { Button } from "../ui/button";
import { SelectTheme } from "./components/SelectTheme";

import { changeTheme } from "@/utils/changeTheme";

import rocketAnimation from "../../public/animations/rocket-animation.json"
import Lottie from "lottie-react"

export function Navbar() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        changeTheme("cyan");
    }, []);

    if (!isMounted) return null;

    return (
        <nav className="fixed left-1/2 -translate-x-1/2 top-6 p-3 w-full max-w-[1000px] justify-between items-center flex gap-4 bg-slate-200 dark:bg-gray-950 rounded-full shadow-lg/30 shadow-main-400 transition-colors duration-300 z-50">
            {/* Home Navigation */}
            <div className="flex items-center gap-4 pl-18">
                <Lottie
                    animationData={rocketAnimation}
                    className="w-24 left-0 rotate-45 z-10 absolute"
                />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 font-bold text-xl tracking-wide">
                    VK{" "}
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                            Soluções
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500"></span>
                    </span>
                </p>
            </div>


            {/* Navegação */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-sm sm:text-base cursor-pointer">
                    Sobre Mim
                </Button>
                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-sm sm:text-base cursor-pointer">
                    Habilidades
                </Button>
                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-sm sm:text-base cursor-pointer">
                    Experiência
                </Button>
                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-sm sm:text-base cursor-pointer">
                    Projetos
                </Button>
                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-sm sm:text-base cursor-pointer">
                    Contato
                </Button>
            </div>

            {/* Temas */}
            <div className="flex justify-center items-center gap-2 border-[1.7px] rounded-full py-[4px] px-3 border-main-400/30 bg-main-400/5 shadow-sm">
                <SelectModeTheme />
                <SelectTheme />
            </div>
        </nav>
    );
}
