import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1.1,
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    exit={{ opacity: 1, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 md:bottom-12 right-6 md:right-8 z-50 p-3 md:p-4 rounded-full shadow-lg bg-main-600 text-white hover:bg-main-700 transition-colors focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 dark:bg-main-500 dark:hover:bg-main-600 cursor-pointer"
                    aria-label="Voltar ao topo"
                >
                    <FiArrowUp className="w-5 md:w-7 h-5 md:h-7" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;