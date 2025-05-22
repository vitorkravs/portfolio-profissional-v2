"use client";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import { changeTheme } from "@/utils/changeTheme";
import { SelectTheme } from "./components/SelectTheme";
import SelectModeTheme from "./components/SelectModeTheme";

import { AnimatePresence, motion } from "framer-motion";

import Lottie from "lottie-react";
import rocketAnimation from "../../public/animations/rocket-animation.json";

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setIsMounted(true);
            changeTheme("cyan");
        }
    }, []);

    if (!isMounted) return null;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                className="lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:top-6 p-5 w-full max-w-[1000px] justify-end items-center flex md:gap-4 bg-slate-200 dark:bg-gray-950 lg:rounded-full md:shadow-lg/30 shadow-main-400 transition-colors duration-300 z-50">
                {/* Home Navigation */}
                <div className="hidden md:flex items-center gap-4 w-full text-center lg:text-justify md:pl-18">
                    <Lottie
                        animationData={rocketAnimation}
                        className="w-20 md:w-24 left-2 rotate-35 sm:rotate-90 sm:left-12 lg:rotate-45 lg:left-0 z-10 absolute"
                    />
                    <p className="w-full bg-white text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 font-bold text-xl tracking-wide">
                        VK{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                                Soluções
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500"></span>
                        </span>
                    </p>
                </div>

                {/* Navegação para desktop */}
                <div className="hidden lg:flex items-center gap-4">
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

                {/* Temas e Menu Hamburguer */}
                <div className="flex justify-center items-center gap-4">
                    <div className="hidden lg:flex justify-center items-center gap-2 border-[1.7px] rounded-full py-[4px] px-3 border-main-400/30 bg-main-400/5 shadow-sm">
                        <SelectModeTheme />
                        <SelectTheme />
                    </div>

                    <AnimatePresence>
                        <motion.button
                            className="lg:hidden p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors bg-main-500/40"
                            onClick={toggleMenu}
                            aria-label="Menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {isMenuOpen ? (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </motion.button>
                    </AnimatePresence>
                </div>
            </motion.nav>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-24 left-1/2 md:left-full -translate-x-1/2 md:-translate-x-[107%] w-[90%] max-w-[400px] bg-slate-200 dark:bg-gray-950 rounded-2xl shadow-lg z-40 p-4 lg:hidden"
                    >
                        <motion.div
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.05 }}
                            >
                                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-base cursor-pointer py-4 w-full">
                                    Sobre Mim
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-base cursor-pointer py-4 w-full">
                                    Habilidades
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                            >
                                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-base cursor-pointer py-4 w-full">
                                    Experiência
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-base cursor-pointer py-4 w-full">
                                    Projetos
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                            >
                                <Button variant="ghost" className="text-main-900 dark:text-main-50 hover:text-main-600 hover:dark:text-main-400 hover:underline rounded-full text-base cursor-pointer py-4 w-full">
                                    Contato
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center items-center gap-2 border-[1.7px] rounded-full py-[6px] px-4 border-main-400/30 bg-main-400/5 shadow-sm mt-2"
                            >
                                <SelectModeTheme />
                                <SelectTheme />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}