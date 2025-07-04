"use client"; // Necessário para os hooks useEffect e useState

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Dados das experiências
const experiences = [
    {
        date: "Abr 2025 - Atual",
        title: "Desenvolvedor Front-End Júnior",
        company: "EvolutionSoft",
        description: "Atuação em times ágeis com foco em desenvolvimento de novas funcionalidades, correção de bugs e participação ativa em reuniões de alinhamento e planejamento.",
        color: "violet"
    },
    {
        date: "Abr 2024 - Abr 2025",
        title: "Estagiário em Front-End",
        company: "EvolutionSoft",
        description: "Desenvolvimento de interfaces modernas e responsivas com Next.js, React, Tailwind CSS e Styled-Components, além de suporte à equipe e aprendizado contínuo de boas práticas.",
        color: "pink"
    },
    {
        date: "Out 2023 - Jan 2024",
        title: "Assistente de Produção",
        company: "Universal Chemical",
        description: "Atuação em processos produtivos com foco em comunicação, organização e trabalho em equipe para garantir a eficiência operacional.",
        color: "purple",
        isLast: true
    }
];


const performanceData = [
    { name: 'Jan', performance: 65 }, { name: 'Fev', performance: 72 },
    { name: 'Mar', performance: 80 }, { name: 'Abr', performance: 78 },
    { name: 'Mai', performance: 85 }, { name: 'Jun', performance: 90 },
    { name: 'Jul', performance: 88 }, { name: 'Ago', performance: 92 },
    { name: 'Set', performance: 95 }, { name: 'Out', performance: 93 },
    { name: 'Nov', performance: 96 }, { name: 'Dez', performance: 98 },
];

const colorClasses: any = {
    main: {
        bg: 'bg-main-500', text: 'text-main-500', from: 'from-main-500', to: 'to-main-300', ring: 'ring-main-300'
    },
    purple: {
        bg: 'bg-purple-500', text: 'text-purple-500', from: 'from-purple-500', to: 'to-purple-300', ring: 'ring-purple-300'
    },
    fuchsia: {
        bg: 'bg-fuchsia-500', text: 'text-fuchsia-500', from: 'from-fuchsia-500', to: 'to-fuchsia-300', ring: 'ring-fuchsia-300'
    },
    violet: {
        bg: 'bg-violet-500', text: 'text-violet-500', from: 'from-violet-500', to: 'to-violet-300', ring: 'ring-violet-300'
    },
    pink: {
        bg: 'bg-pink-500', text: 'text-pink-500', from: 'from-pink-500', to: 'to-pink-300', ring: 'ring-pink-300'
    }
}

const TimelineItem = ({ date, title, company, description, isLast, color }
    : { date: string, title: string, company: string, description: string, isLast: boolean, color: string }
) => {
    const theme = colorClasses[color] || colorClasses.main;
    return (
        <motion.div className="flex relative pb-10" variants={itemVariants}>
            {!isLast && (
                <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            )}
            <div className={`relative flex-shrink-0 w-4 h-4 rounded-full mt-1.5 -ml-1.5 ${theme.bg} ring-4 ${theme.ring} ring-opacity-30`}></div>
            <div className="flex-grow pl-8">
                <div className={`text-xs font-semibold tracking-wide uppercase ${theme.text}`}>{date}</div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
                <h4 className="text-gray-600 dark:text-gray-400 mb-2">{company}</h4>
                <p className="text-gray-500 dark:text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    const [mainColor, setMainColor] = useState('#06B6D4');
    const [textColor, setTextColor] = useState('#a1a1aa');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const computedStyle = getComputedStyle(document.documentElement);
            const color = computedStyle.getPropertyValue('--main-color-500').trim();
            const text = computedStyle.getPropertyValue('--color-muted-foreground').trim();
            if (color) setMainColor(color);
            if (text) setTextColor(text);
        }
    }, []);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="container relative py-16 md:py-24"
            id="experiencia"
        >
            <motion.h1
                className="w-full text-3xl sm:text-4xl md:text-[3rem] text-center font-extrabold bg-gradient-to-r from-main-500 to-main-400 text-transparent bg-clip-text tracking-tight mb-12 md:mb-20"
                variants={itemVariants}
            >
                # Experiência Profissional
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
                {/* Linha do tempo */}
                <motion.div
                    className="w-full"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-bold mb-8 text-main-500 dark:text-main-400">Minha Jornada</h2>
                    <div className="relative pl-6">
                        {experiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                {...exp}
                                isLast={exp.isLast || index === experiences.length - 1}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Gráfico de performance */}
                <motion.div
                    className="w-full bg-slate-50/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/80 dark:border-gray-800/80 p-6 rounded-2xl shadow-lg"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-bold mb-8 text-main-500 dark:text-main-400">Meu Aproveitamento</h2>
                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={performanceData}
                                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke={textColor} opacity={0.2} />
                                <XAxis dataKey="name" stroke={textColor} />
                                <YAxis stroke={textColor} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                                        borderColor: mainColor,
                                        borderRadius: '0.75rem',
                                        color: '#fff',
                                        backdropFilter: 'blur(4px)'
                                    }}
                                    cursor={{ stroke: mainColor, strokeWidth: 1, strokeDasharray: "3 3" }}
                                />
                                <Legend wrapperStyle={{ color: textColor }} />
                                <Line
                                    type="monotone"
                                    dataKey="performance"
                                    stroke={mainColor}
                                    strokeWidth={3}
                                    activeDot={{ r: 8, fill: mainColor, stroke: 'white', strokeWidth: 2 }}
                                    dot={{ r: 4, fill: mainColor }}
                                    name="Aproveitamento (%)"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 text-gray-600 dark:text-main-200/80 space-y-2">
                        <p>📈 <span className="font-semibold text-gray-700 dark:text-white">+33%</span> de crescimento anual</p>
                        <p>🏆 <span className="font-semibold text-gray-700 dark:text-white">Top performer</span> por 3 trimestres consecutivos</p>
                        <p>🚀 <span className="font-semibold text-gray-700 dark:text-white">98%</span> de aproveitamento no último trimestre</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}