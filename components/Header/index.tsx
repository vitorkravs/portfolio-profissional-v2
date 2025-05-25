"use client";

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import animationProgrammer from "../../public/animations/animation-programmer-header.json";

const ROLES = [
    'Front-End',
    'UI/UX',
    'Next.js',
    'React.js',
    'Angular.js',
    'Vue.js',
    'Back-End',
];

const TYPING_SPEED = 200;
const DELETING_SPEED = 80;
const DELAY_BETWEEN_ROLES = 1500;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const bubbleVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            duration: 0.8
        }
    }
};

export default function Header() {
    const [typedText, setTypedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = ROLES[currentRoleIndex];

            if (isDeleting) {
                if (typedText.length > 0) {
                    setTypedText(currentRole.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
                }
            } else {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_ROLES);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
        return () => clearTimeout(timer);
    }, [typedText, currentRoleIndex, isDeleting]);

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container relative grid grid-cols-1 lg:grid-cols-2 md:gap-16 justify-center items-center min-h-[600px] md:min-h-screen"
        >
            {/* Conteúdo de Texto */}
            <motion.div
                className="w-full lg:h-[35rem] xl:h-[40rem] z-10 flex flex-col justify-start items-start order-1 lg:pt-28 lg:order-2"
                variants={itemVariants}
            >
                <motion.h1
                    className="w-full text-4xl sm:text-5xl md:text-[4rem] lg:text-[4rem] xl:text-[5rem] text-center lg:text-left font-extrabold bg-gradient-to-r from-main-500 to-main-400 text-transparent bg-clip-text tracking-tight md:pt-12 lg:pt-0 mb-14"
                    variants={itemVariants}
                >
                    Desenvolvedor{' '} <br />
                    <span className="text-main-500 dark:text-main-400 font-bold border-r-2 border-main-500 dark:border-main-400">
                        {typedText}
                    </span>
                </motion.h1>

                <motion.div
                    className="max-w-2xl text-lg sm:text-xl md:text-xl text-center md:text-left text-gray-800 dark:text-gray-200 leading-relaxed"
                    variants={itemVariants}
                    transition={{ delay: 0.4 }}
                >
                    <p className="mb-6 px-4 py-3 bg-gradient-to-r from-main-100/20 to-main-200/20 dark:from-main-900/30 dark:to-main-800/30 rounded-xl backdrop-blur-sm border border-main-300/30 dark:border-main-600/30">
                        <span className="text-main-500 dark:text-main-400 font-semibold">Fala pessoal!</span> Meu nome é <span className="font-bold bg-gradient-to-r from-main-500 to-main-400 bg-clip-text text-transparent">Vitor</span>
                    </p>
                    <p className="px-4 py-3 bg-white/10 dark:bg-gray-900/10 rounded-xl backdrop-blur-sm border border-main-300/30 dark:border-main-600/30">
                        Estudante de <span className="font-medium text-main-500 dark:text-main-400">Desenvolvimento Web</span> e <span className="font-medium text-main-500 dark:text-main-400">Tecnologia</span>, com 21 anos, atualmente focado em aprimorar minhas habilidades enquanto curso <span className="font-medium">Engenharia de Software</span>.
                    </p>
                </motion.div>
            </motion.div>

            {/* Animação Lottie */}
            <AnimatePresence>
                <motion.div
                    className="relative w-full h-[29rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] order-2 lg:order-1"
                    variants={bubbleVariants}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        variants={bubbleVariants}
                        transition={{ delay: 0.2 }}
                        className="absolute inset-0 rounded-full dark:bg-main-900/20 bg-main-100/70 blur-3xl"
                    />
                    <motion.div
                        className="container relative h-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 12,
                            delay: 0.4
                        }}
                    >
                        <Lottie
                            animationData={animationProgrammer}
                            loop={true}
                            className="w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.header>
    );
}