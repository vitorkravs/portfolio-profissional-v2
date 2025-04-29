"use client"
import { useEffect, useState } from "react";

import { useThemeStore } from "@/store/useThemeStore";

import { BsMoon, BsSun } from "react-icons/bs";

import { motion } from 'framer-motion'

export default function SelectModeTheme() {
    const darkModeContext = useThemeStore(state => state.darkMode);
    const setDarkModeContext = useThemeStore(state => state.setDarkMode)

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = async () => {
        setDarkModeContext(!darkModeContext)
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== "undefined") {
            if (darkModeContext) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            setDarkMode(darkModeContext)
        }
    }, [darkModeContext])

    return (
        <div
            className="flex cursor-pointer gap-2 items-center px-2 py-[.5px]"
            onClick={toggleDarkMode}
        >
            <motion.button className="flex items-center justify-center rounded-md p-1 hover:bg-white-50 dark:hover:bg-main-700 text-main-500 dark:hover:text-white-300 transition-colors duration-300 cursor-pointer">
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: darkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {darkMode ? <BsSun size={18} className="text-main-500 hover:text-white/70 transition-colors" strokeWidth={.4} /> : <BsMoon size={18} className="text-main-500 transition-colors duration-300" strokeWidth={.4} />}
                </motion.div>
            </motion.button>
        </div>
    )
}