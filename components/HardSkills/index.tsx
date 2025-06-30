"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import animationLaptop from "../../public/animations/animation-laptop.json"
import Lottie from "lottie-react"
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
    SiDocker, SiRust, SiFigma, SiMaterialdesign, SiGit,
    SiReactquery, SiGooglemaps, SiMercadopago, SiPrisma,
    SiJest, SiVite, SiSass,
    SiGoogle,
    SiBitbucket,
    SiTauri,
    SiJavascript
} from "react-icons/si"
import { FaAws, FaCreditCard, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJava, FaServer, FaSwatchbook, FaWhatsapp } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

type DescriptionPart = {
    type: 'highlight' | 'project' | 'text' | string;
    content: string;
};

interface HighlightedDescriptionProps {
    description: DescriptionPart[];
}

function HighlightedDescription({ description }: HighlightedDescriptionProps) {
    return (
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description.map((part, index) => {
                switch (part.type) {
                    case 'highlight':
                        return <strong key={index} className="font-semibold text-main-500">{part.content}</strong>;
                    case 'project':
                        return <span key={index} className="bg-gray-200 dark:bg-gray-700 rounded-md px-1.5 py-0.5 mx-1 font-mono text-xs">{part.content}</span>;
                    default:
                        return <span key={index}>{part.content}</span>;
                }
            })}
        </p>
    );
}


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        }
    }
}

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
}

const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
}

const technologies = [
    {
        name: "Next.js",
        description: [
            { type: "text", content: "Framework poderoso baseado em React, usado por gigantes como " },
            { type: "highlight", content: "Netflix, Twitch e TikTok" },
            { type: "text", content: ". No dia a dia, foi a base de sistemas como" },
            { type: "project", content: "Fisk" },
            { type: "project", content: "UniAreia" },
            { type: "project", content: "Pentrago RTO" },
            { type: "text", content: "e" },
            { type: "project", content: "Agora Distribuidora" },
            { type: "text", content: ", onde desenvolvi CRUDs, autenticação e integrações complexas." }
        ],
        IconComponent: SiNextdotjs,
        hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
        name: "React",
        description: [
            { type: "text", content: "A biblioteca mais usada para criar interfaces, criada pelo Facebook e adotada por " },
            { type: "highlight", content: "Instagram, Airbnb e Uber" },
            { type: "text", content: ". Em todos os meus projetos, foi a base para construir componentes reutilizáveis e gerenciar o estado da aplicação." }
        ],
        IconComponent: SiReact,
        hoverColor: "hover:text-blue-400 dark:hover:text-blue-400"
    },
    {
        name: "Vite.js",
        description: [
            { type: "text", content: "Ferramenta de build moderna e super rápida. Usei em projetos como" },
            { type: "project", content: "DutFácil" },
            { type: "text", content: "e" },
            { type: "project", content: "Correio Itapetininga" },
            { type: "text", content: ", onde a velocidade no desenvolvimento foi um grande diferencial." }
        ],
        IconComponent: SiVite,
        hoverColor: "hover:text-purple-500 dark:hover:text-purple-500"
    },
    {
        name: "Typescript",
        description: [
            { type: "text", content: "Adiciona tipagem e segurança ao JavaScript. Empresas como " },
            { type: "highlight", content: "Microsoft, Slack e Google" },
            { type: "text", content: " confiam nele. Usei em projetos como" },
            { type: "project", content: "Fisk" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: "e" },
            { type: "project", content: "DutFácil" },
            { type: "text", content: " para garantir código escalável e organizado." }
        ],
        IconComponent: SiTypescript,
        hoverColor: "hover:text-blue-600 dark:hover:text-blue-600"
    },
    {
        name: "JavaScript",
        description: [
            { type: "text", content: "Linguagem fundamental para desenvolvimento web, usada por " },
            { type: "highlight", content: "Google, Facebook e Netflix" },
            { type: "text", content: ". Base para todos meus projetos front-end, permitindo criar funcionalidades dinâmicas e interativas." }
        ],
        IconComponent: SiJavascript,
        hoverColor: "hover:text-yellow-400 dark:hover:text-yellow-400"
    },
    {
        name: "HTML",
        description: [
            { type: "text", content: "Estrutura base de todas as aplicações web. Domínio avançado com foco em semântica e acessibilidade, seguindo padrões " },
            { type: "highlight", content: "W3C" },
            { type: "text", content: " em todos os projetos desenvolvidos." }
        ],
        IconComponent: FaHtml5,
        hoverColor: "hover:text-orange-500 dark:hover:text-orange-500"
    },
    {
        name: "CSS",
        description: [
            { type: "text", content: "Estilização de aplicações com técnicas modernas como " },
            { type: "highlight", content: "Grid, Flexbox e animações CSS" },
            { type: "text", content: ". Implementação em todos os projetos com foco em responsividade e performance." }
        ],
        IconComponent: FaCss3,
        hoverColor: "hover:text-blue-500 dark:hover:text-blue-500"
    },
    {
        name: "Tailwind CSS",
        description: [
            { type: "text", content: "Framework CSS utilitário que agiliza a estilização. Usado por " },
            { type: "highlight", content: "GitHub, Shopify e Vercel" },
            { type: "text", content: ". No" },
            { type: "project", content: "Sistema Fisk" },
            { type: "text", content: ", foi a escolha para criar interfaces consistentes rapidamente." }
        ],
        IconComponent: SiTailwindcss,
        hoverColor: "hover:text-cyan-400 dark:hover:text-cyan-400"
    },
    {
        name: "Sass",
        description: [
            { type: "text", content: "Pré-processador CSS que permite uso de variáveis e mixins. No projeto" },
            { type: "project", content: "DutFácil" },
            { type: "text", content: ", utilizei para manter a estrutura de estilos modular e com fácil manutenção." }
        ],
        IconComponent: SiSass,
        hoverColor: "hover:text-pink-500 dark:hover:text-pink-500"
    },
    {
        name: "Material UI",
        description: [
            { type: "text", content: "Biblioteca de componentes visuais baseada no Material Design do Google. No" },
            { type: "project", content: "Sistema Fisk" },
            { type: "text", content: ", utilizei para compor a interface com rapidez e consistência visual." }
        ],
        IconComponent: SiMaterialdesign,
        hoverColor: "hover:text-blue-600 dark:hover:text-blue-600"
    },
    {
        name: "APIs REST",
        description: [
            { type: "text", content: "Essencial no desenvolvimento moderno. Tenho ampla experiência consumindo e integrando APIs para autenticação, pagamentos e CRUDs em projetos como" },
            { type: "project", content: "Fisk" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: "e" },
            { type: "project", content: "Pentrago RTO" },
            { type: "text", content: "." }
        ],
        IconComponent: TbApi,
        hoverColor: "hover:text-gray-500 dark:hover:text-gray-500"
    },
    {
        name: "Rust",
        description: [
            { type: "text", content: "Linguagem focada em performance e segurança, adotada por " },
            { type: "highlight", content: "Dropbox e AWS" },
            { type: "text", content: ". Usei no" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: " para desenvolver uma aplicação desktop offline com Tauri, garantindo rapidez e estabilidade." }
        ],
        IconComponent: SiRust,
        hoverColor: "hover:text-orange-600 dark:hover:text-orange-600"
    },
    {
        name: "Tauri",
        description: [
            { type: "text", content: "Framework para criar aplicações desktop com tecnologias web. Combinado com " },
            { type: "highlight", content: "Rust" },
            { type: "text", content: " no projeto" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: " para criar uma versão offline do sistema com excelente performance." }
        ],
        IconComponent: SiTauri,
        hoverColor: "hover:text-purple-500 dark:hover:text-purple-500"
    },
    {
        name: "Prisma",
        description: [
            { type: "text", content: "ORM moderno que facilita a comunicação com o banco de dados. No" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: ", usei com Rust e Tauri para manipular dados em uma aplicação desktop com persistência offline." }
        ],
        IconComponent: SiPrisma,
        hoverColor: "hover:text-blue-800 dark:hover:text-blue-800"
    },
    {
        name: "Docker",
        description: [
            { type: "text", content: "Garante que aplicações rodem de forma previsível em qualquer lugar. Usado por " },
            { type: "highlight", content: "Spotify e PayPal" },
            { type: "text", content: ". No" },
            { type: "project", content: "Sistema Fisk" },
            { type: "text", content: ", garantiu um ambiente local confiável e simplificou o deploy." }
        ],
        IconComponent: SiDocker,
        hoverColor: "hover:text-blue-500 dark:hover:text-blue-500"
    },
    {
        name: "Git",
        description: [
            { type: "text", content: "Sistema de controle de versão essencial no desenvolvimento moderno. Usado em todos os projetos em conjunto com " },
            { type: "highlight", content: "GitHub e Bitbucket" },
            { type: "text", content: " para versionamento e trabalho em equipe." }
        ],
        IconComponent: FaGit,
        hoverColor: "hover:text-orange-600 dark:hover:text-orange-600"
    },
    {
        name: "GitHub",
        description: [
            { type: "text", content: "Plataforma essencial para hospedagem de código e colaboração, usada por " },
            { type: "highlight", content: "milhões de desenvolvedores" },
            { type: "text", content: ". Ambiente principal para versionamento dos meus projetos." }
        ],
        IconComponent: FaGithub,
        hoverColor: "hover:text-gray-700 dark:hover:text-gray-300"
    },
    {
        name: "BitBucket",
        description: [
            { type: "text", content: "Plataforma profissional para versionamento de código. Utilizada em projetos corporativos com " },
            { type: "highlight", content: "fluxos Git complexos" },
            { type: "text", content: " e integração contínua." }
        ],
        IconComponent: SiBitbucket,
        hoverColor: "hover:text-blue-500 dark:hover:text-blue-500"
    },
    {
        name: "Figma",
        description: [
            { type: "text", content: "Ferramenta de design colaborativa usada por " },
            { type: "highlight", content: "Google e Uber" },
            { type: "text", content: ". Em projetos como" },
            { type: "project", content: "Sistema Fisk" },
            { type: "text", content: "e" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: ", utilizei para planejar interfaces e entregar um design bem estruturado." }
        ],
        IconComponent: SiFigma,
        hoverColor: "hover:text-purple-500 dark:hover:text-purple-500"
    },
    {
        name: "Jest",
        description: [
            { type: "text", content: "Framework de testes criado pelo Facebook. Implementei testes unitários e de integração em diversos projetos para garantir " },
            { type: "highlight", content: "código confiável e sem regressões" },
            { type: "text", content: "." }
        ],
        IconComponent: SiJest,
        hoverColor: "hover:text-red-600 dark:hover:text-red-600"
    },
    {
        name: "React Query",
        description: [
            { type: "text", content: "Biblioteca para gerenciamento de estado assíncrono. Usei em diversos projetos para " },
            { type: "highlight", content: "otimizar o fetching de dados" },
            { type: "text", content: ", reduzindo chamadas desnecessárias à API." }
        ],
        IconComponent: SiReactquery,
        hoverColor: "hover:text-red-500 dark:hover:text-red-500"
    },
    {
        name: "React Flow",
        description: [
            { type: "text", content: "Biblioteca para criar interfaces com fluxogramas e diagramas. No" },
            { type: "project", content: "Pentrago RTO" },
            { type: "text", content: ", foi essencial para implementar a criação de plantas industriais de forma visual e interativa." }
        ],
        IconComponent: SiReact,
        hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
        name: "Google APIs",
        description: [
            { type: "text", content: "Conjunto de APIs poderosas para integração com serviços Google. No projeto" },
            { type: "project", content: "Agora Distribuidora" },
            { type: "text", content: ", implementei rastreamento de produtos com visualização de rotas usando " },
            { type: "highlight", content: "Google Maps API" }
        ],
        IconComponent: SiGoogle,
        hoverColor: "hover:text-green-500 dark:hover:text-green-500"
    },
    {
        name: "Mercado Pago",
        description: [
            { type: "text", content: "Principal plataforma de pagamentos da América Latina. Usei no" },
            { type: "project", content: "Correio Itapetininga - Apoie" },
            { type: "text", content: " para implementar uma solução completa de doações com Pix, cartão e assinaturas." }
        ],
        IconComponent: SiMercadopago,
        hoverColor: "hover:text-blue-400 dark:hover:text-blue-400"
    },
    {
        name: "Pagar.me",
        description: [
            { type: "text", content: "Solução brasileira de pagamentos online. Experiência em integração para " },
            { type: "highlight", content: "processamento seguro de transações" },
            { type: "text", content: " em e-commerces." }
        ],
        IconComponent: FaCreditCard,
        hoverColor: "hover:text-blue-600 dark:hover:text-blue-600"
    },
    {
        name: "WhatsApp API",
        description: [
            { type: "text", content: "Permite criar automações com o app de mensagens mais usado no Brasil. No" },
            { type: "project", content: "Cardápio Digital RT166" },
            { type: "text", content: ", implementei pedidos automatizados, facilitando a comunicação com o cliente." }
        ],
        IconComponent: FaWhatsapp,
        hoverColor: "hover:text-green-500 dark:hover:text-green-500"
    },
    {
        name: "Design System",
        description: [
            { type: "text", content: "Criação e implementação de sistemas de design consistentes. No projeto" },
            { type: "project", content: "Correio Itapetininga" },
            { type: "text", content: ", desenvolvi um design system que acelerou o desenvolvimento e garantiu " },
            { type: "highlight", content: "consistência visual" }
        ],
        IconComponent: FaSwatchbook,
        hoverColor: "hover:text-blue-500 dark:hover:text-blue-500"
    },
    {
        name: "UI/UX",
        description: [
            { type: "text", content: "Foco na experiência do usuário e interfaces intuitivas. Em todos os projetos, apliquei " },
            { type: "highlight", content: "princípios de usabilidade" },
            { type: "text", content: " e acessibilidade para criar produtos eficientes." }
        ],
        IconComponent: FaFigma,
        hoverColor: "hover:text-purple-400 dark:hover:text-purple-400"
    },
    {
        name: "Microsserviços",
        description: [
            { type: "text", content: "Arquitetura distribuída para sistemas escaláveis. No" },
            { type: "project", content: "UniAreia" },
            { type: "text", content: ", integrei microsserviços para " },
            { type: "highlight", content: "pesagem de caminhões" },
            { type: "text", content: " e geração de notas fiscais." }
        ],
        IconComponent: FaServer,
        hoverColor: "hover:text-gray-500 dark:hover:text-gray-500"
    },
    {
        name: "AWS",
        description: [
            { type: "text", content: "Plataforma de cloud computing líder de mercado. No" },
            { type: "project", content: "Sistema Fisk" },
            { type: "text", content: ", utilizei diversos serviços AWS para " },
            { type: "highlight", content: "deploy e infraestrutura" }
        ],
        IconComponent: FaAws,
        hoverColor: "hover:text-orange-500 dark:hover:text-orange-500"
    },
    {
        name: "Java",
        description: [
            { type: "text", content: "Linguagem sólida usada por " },
            { type: "highlight", content: "Amazon e Spotify" },
            { type: "text", content: ". Atualmente me especializando em Java com foco em APIs REST, e planejo atuar profissionalmente com ela para expandir meu domínio no backend." }
        ],
        IconComponent: FaJava,
        hoverColor: "hover:text-red-600 dark:hover:text-red-600"
    }
];

export default function HardSkills() {
    const [selectedTech, setSelectedTech] = useState<(typeof technologies[0]) | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 9;
    const totalPages = Math.ceil(technologies.length / itemsPerPage);
    const paginatedTechs = technologies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };


    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="container relative py-16 md:py-24 md:mt-32 overflow-hidden"
            id="habilidades"
        >

            <motion.div
                className="absolute top-1/2 left-64 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-main-500 rounded-full opacity-20 blur-3xl -z-10"
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            />



            <motion.h1
                className="w-full text-3xl sm:text-4xl md:text-[3rem] lg:text-[3rem] xl:text-[4rem] text-center font-extrabold bg-gradient-to-r from-main-500 to-main-400 text-transparent bg-clip-text tracking-tight md:pt-12 lg:pt-0 mb-6 md:mb-14"
                variants={itemVariants}
            >
                # Habilidades Técnicas
            </motion.h1>

            <motion.div variants={itemVariants} className="container grid grid-cols-1 md:grid-cols-2 grid-direc gap-8">
                <div className="relative flex items-center justify-center min-h-[300px] order-2 md:order-1">
                    <AnimatePresence mode="wait">
                        {selectedTech ? (
                            <motion.div
                                key="description"
                                variants={fadeVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="p-6 rounded-xl bg-white/80 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-lg h-full w-full flex flex-col justify-center"
                            >
                                <button
                                    onClick={() => setSelectedTech(null)}
                                    className="mb-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors self-start"
                                >
                                    ← Voltar
                                </button>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`text-5xl ${selectedTech.hoverColor.replace('hover:', 'dark:')}`}>
                                        <selectedTech.IconComponent />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-main-500 to-main-400 text-transparent bg-clip-text">
                                        {selectedTech.name}
                                    </h3>
                                </div>
                                <HighlightedDescription description={selectedTech.description} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="animation"
                                variants={fadeVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="relative w-full max-w-[1200px] h-full"
                            >
                                <Lottie animationData={animationLaptop} className="h-full w-full" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-2 order-1 md:order-2 py-6">
                    <button
                        onClick={handlePrevPage}
                        className="cursor-pointer p-2 h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Tecnologias anteriores"
                    >
                        <FaArrowLeft />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-3 gap-4 w-full"
                        >
                            {paginatedTechs.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    className="relative aspect-square"
                                    whileHover="hover"
                                    initial="rest"
                                    animate="rest"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        className="absolute inset-0 top-0 md:-top-2 left-0 md:-left-2 bg-main-200 dark:bg-main-700 rounded-lg -z-10"
                                        variants={{
                                            rest: { rotate: 0, opacity: 0, scale: 0.95 },
                                            hover: { rotate: 4, opacity: 1, scale: 1.02 }
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />

                                    <motion.button
                                        onClick={() => setSelectedTech(tech)}
                                        className="cursor-pointer relative w-full max-w-[200px] h-full max-h-[200px] flex flex-col items-center justify-center p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:border-main-400 transition-all group shadow-xl shadow-main-600/30"
                                    >
                                        <motion.div
                                            variants={{ rest: { scale: 1 }, hover: { scale: 1.2 } }}
                                            className={`text-4xl text-gray-700 dark:text-gray-300 transition-colors duration-300 ${tech.hoverColor}`}
                                        >
                                            <tech.IconComponent className="md:text-[3rem]" />
                                        </motion.div>
                                        <span className="mt-2 text-xs font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-main-500 transition-colors">
                                            {tech.name}
                                        </span>
                                    </motion.button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handleNextPage}
                        className="cursor-pointer p-2 h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Próximas tecnologias"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </motion.div>
        </motion.section>
    )
}