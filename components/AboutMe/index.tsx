"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import imagemPerfil from "../../public/imagem-perfil.jpg";

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

const timelineCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "backOut"
        }
    },
    hover: {
        y: -5,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 0.98
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

export default function AboutMe() {
    const aboutMeSections = [
        {
            title: "Um Pouco Sobre Minha Jornada",
            description:
                "Bora falar um pouco sobre minha jornada dos estudos de forma objetiva",
            icon: "🚀",
            color: "bg-gradient-to-br from-purple-500 to-indigo-600",
        },
        {
            title: "Tenho Experiência como Desenvolvedor Front-End?",
            description:
                "Uma introdução apenas, teremos uma sessão só para isso",
            icon: "💻",
            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
        },
        {
            title: "E Back-End? Tenho alguma Experiência?",
            description:
                "Já sou um FullStack? De uma olhada nesse resumo aqui",
            icon: "🔧",
            color: "bg-gradient-to-br from-green-500 to-emerald-600",
        }
    ];

    const aboutMeSectionsCompleted = [
        {
            title: "Minha Jornada como Desenvolvedor",
            description:
                "Minha paixão por tecnologia começou cedo, então iniciei com cursos online por conta própria. Depois, fiz um curso de Python na FATEC, que despertou ainda mais meu interesse pela área. Isso me motivou a mergulhar de vez no desenvolvimento e iniciar minha graduação em Engenharia de Software pela Uninter.",
            icon: "🚀",
            color: "bg-gradient-to-br from-purple-500 to-indigo-600",
        },
        {
            title: "Expertise em Front-end",
            description:
                "Como desenvolvedor front-end, já participei de vários projetos profissionais (vou citar alguns em outra seção). No dia a dia, trabalho com Next.js, Vite.js, Tailwind, Figma e foco bastante em UI/UX. Também mantenho meus estudos em tecnologias como Angular e Vue. Gosto de construir interfaces dinâmicas, responsivas e sempre busco aplicar as melhores práticas para entregar uma experiência de usuário de qualidade.",
            icon: "💻",
            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
        },
        {
            title: "Conhecimentos em Back-end",
            description:
                "Tenho alguns projetos de estudo desenvolvidos com Node.js e MongoDB, o que me ajudou a entender bem a base de aplicações full-stack. Atualmente, estou me dedicando com mais foco aos estudos em Java, buscando me especializar também em bancos de dados relacionais e não relacionais, além do ecossistema Spring Boot.",
            icon: "🔧",
            color: "bg-gradient-to-br from-green-500 to-emerald-600",
        }
    ];


    const [activeSection, setActiveSection] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const scrollIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const iconY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, timelineRef.current?.clientHeight || 0]
    );

    useEffect(() => {
        const updateActiveSection = () => {
            if (!timelineRef.current) return;

            const sections = timelineRef.current.querySelectorAll<HTMLElement>('.timeline-section');
            const scrollPosition = window.scrollY - (isMobile ? 200 : 600);

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', updateActiveSection);
        updateActiveSection();
        return () => window.removeEventListener('scroll', updateActiveSection);
    }, [isMobile]);

    const handleCardClick = (index: number) => {
        const sectionElement = document.querySelector(`#section-${index}`);
        if (sectionElement) {
            sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container relative py-16 md:py-24 overflow-hidden"
            id="sobre-mim"
        >
            <motion.h1
                className="w-full text-3xl sm:text-4xl md:text-[3rem] lg:text-[3rem] xl:text-[4rem] text-center font-extrabold bg-gradient-to-r from-main-500 to-main-400 text-transparent bg-clip-text tracking-tight md:pt-12 lg:pt-0 mb-6 md:mb-14"
                variants={itemVariants}
            >
                # Um Pouco Sobre Mim
            </motion.h1>
            <div className="container mx-4 md:mx-12">
                {isMobile ? (
                    <div className="flex flex-col">
                        <motion.div
                            className="flex justify-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-main-400 shadow-lg">
                                <Image
                                    alt="foto de perfil"
                                    src={imagemPerfil}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <div className="relative" ref={timelineRef}>
                            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full"></div>

                            <motion.div
                                ref={scrollIconRef}
                                className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-main-600 to-main-400 rounded-full flex items-center justify-center z-10 shadow-lg"
                                style={{ top: iconY }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
                            >
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        alt="foto de perfil"
                                        src={imagemPerfil}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {aboutMeSections.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        id={`section-${index}`}
                                        className="relative mb-8 ml-9 p-6 rounded-xl bg-white bg-opacity-70 backdrop-blur-sm shadow-md timeline-section"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={sectionVariants}
                                        transition={{ delay: index * 0.15 }}
                                    >
                                        <motion.div
                                            className={`absolute -left-6 top-6 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${section.color}`}
                                            variants={timelineCircleVariants}
                                        >
                                            <span className="text-white text-sm">{index + 1}</span>
                                        </motion.div>

                                        <motion.div variants={contentVariants}>
                                            <div className="flex items-center mb-4">
                                                <div className={`w-10 h-10 rounded-lg ${section.color} flex items-center justify-center text-xl text-white mr-3`}>
                                                    {section.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {section.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {section.description}
                                            </p>
                                        </motion.div>

                                        {activeSection === index && (
                                            <motion.div
                                                className="absolute inset-0 border-2 border-purple-400 rounded-xl pointer-events-none"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-13 gap-8 lg:gap-8">
                        <div className="col-span-6 space-y-6 sticky top-0 h-fit pt-8">
                            {aboutMeSections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative mb-14 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeSection === index ? 'scale-105 ring-2 ring-purple-400' : 'scale-100 opacity-70 hover:opacity-90'}`}
                                    variants={cardVariants}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleCardClick(index)}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <motion.div
                                        className={`absolute inset-0 ${section.color} opacity-90`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.9 }}
                                        transition={{ duration: 0.6 }}
                                    ></motion.div>
                                    <div className="relative p-6 text-white">
                                        <motion.div
                                            className="text-4xl mb-3"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {section.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                                        <motion.div
                                            className="h-1 w-8 bg-white mb-3 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: 32 }}
                                            transition={{ delay: 0.4 }}
                                        ></motion.div>
                                        <motion.p
                                            className="text-sm opacity-90"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.9 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            {section.description.substring(0, 80)}...
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="col-span-1 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full"></div>

                            <motion.div
                                ref={scrollIconRef}
                                className="absolute -left-5 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-main-600 to-main-400 rounded-full flex items-center justify-center z-10 shadow-lg"
                                style={{ top: iconY }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="relative w-14 h-14 rounded-full overflow-hidden"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Image
                                        alt="foto de perfil"
                                        src={imagemPerfil}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="col-span-6 relative mt-16 mr-4 md:mr-12" ref={timelineRef}>
                            <AnimatePresence>
                                {aboutMeSectionsCompleted.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        id={`section-${index}`}
                                        className="relative mb-16 last:mb-0 p-6 rounded-xl bg-white bg-opacity-70 backdrop-blur-sm shadow-md timeline-section"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={sectionVariants}
                                        transition={{ delay: index * 0.15 }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                        }}
                                    >
                                        <motion.div
                                            className={`absolute -left-5 md:-left-8 top-6 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${section.color}`}
                                            variants={timelineCircleVariants}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <span className="text-white text-sm">{index + 1}</span>
                                        </motion.div>

                                        <motion.div variants={contentVariants}>
                                            <div className="flex items-center mb-4">
                                                <motion.div
                                                    className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center text-2xl text-white mr-4`}
                                                    whileHover={{ rotate: 15 }}
                                                >
                                                    {section.icon}
                                                </motion.div>
                                                <h3 className="text-2xl font-bold text-gray-800">
                                                    {section.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed pl-16">
                                                {section.description}
                                            </p>
                                        </motion.div>

                                        {activeSection === index && (
                                            <motion.div
                                                className="absolute inset-0 border-2 border-purple-400 rounded-xl pointer-events-none"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    );
}