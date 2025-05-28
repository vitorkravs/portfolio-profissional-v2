import { motion } from "framer-motion";

export default function AnimationScroll() {
    return (
        <motion.div
            className="hidden lg:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
        >
            <motion.div
                className="max-w-max mx-auto"
                animate={{
                    y: [0, 10, 0],
                    transition: {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground mx-auto mb-2 flex justify-center">
                    <motion.div
                        animate={{
                            y: [0, 3, 0],
                            transition: {
                                repeat: Infinity,
                                duration: 1.55,
                                ease: "easeInOut",
                                delay: 0.2
                            }
                        }}
                        className="w-1 h-2 bg-muted-foreground rounded-full mt-1"
                    />
                </div>
                <motion.p
                    className="text-muted-foreground text-sm"
                    animate={{
                        opacity: [0.7, 1, 0.7],
                        transition: {
                            repeat: Infinity,
                            duration: 2
                        }
                    }}
                >
                    Scroll
                </motion.p>
            </motion.div>
        </motion.div>
    )
}