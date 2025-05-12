"use client"; // If using Next.js

import { useEffect, useState } from 'react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'front-end',
        'back-end',
        'full-stack',
        'React.js',
        'Next.js'
    ];

    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayBetweenRoles = 1000;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                // Deleting text
                setTypedText(currentRole.substring(0, typedText.length - 1));
                if (typedText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            } else {
                // Typing text
                setTypedText(currentRole.substring(0, typedText.length + 1));
                if (typedText === currentRole) {
                    setTimeout(() => setIsDeleting(true), delayBetweenRoles);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, currentRoleIndex, isDeleting]);

    return (
        <header className={`container md:!mt-16 md:!pt-16 w-full relative grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center min-h-screen md:min-h-[80vh] transition-colors duration-300`}>
            <div className="z-10">
                <h1 className="text-7xl bg-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 tracking-wide">
                    Fala Pessoal,<br />meu nome é Vitor
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
                    Desenvolvedor{' '}
                    <span className="text-blue-500 dark:text-blue-400 font-bold border-r-2 border-blue-500 dark:border-blue-400">
                        {typedText}
                    </span>
                </h2>
            </div>

            <div className="relative w-full h-64 md:h-full">
                <div className={`absolute inset-0 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} blur-3xl`}></div>
                <div className="relative h-full flex items-center justify-center">
                    <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center shadow-2xl`}>
                        <span className="text-4xl md:text-6xl">👨‍💻</span>
                    </div>
                </div>
            </div>
        </header>
    );
}