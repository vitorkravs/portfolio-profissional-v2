"use client";

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import rocketAnimation from "../public/animations/rocket-animation.json";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                <Lottie
                    animationData={rocketAnimation}
                    loop={true}
                    className="w-48 h-48 md:w-64 md:h-64"
                />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5
                }}
                className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
                Carregando...
            </motion.p>
        </div>
    );
}