"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

export const StairTransition = () => {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    {/* Background for transition */}
                    <div className="h-screen w-screen fixed top-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                    <motion.div
                        className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
                        initial={{ opacity: 1 }} // Correct placement
                        animate={{
                            opacity: 0,
                            transition: {
                                delay: 1,
                                duration: 0.4,
                                ease: "easeInOut"
                            },
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    );
};

export default StairTransition;
