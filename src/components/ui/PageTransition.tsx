"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

interface PageTransitionProps {
    children: ReactNode; // Type of  children because we are using typescript you have to define the type in typescript
}
 
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathname = usePathname();
    return (
    <AnimatePresence>

        <div key={pathname}>
            <motion.div  initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: {
                        delay: 0.2, duration: 0.4, ease: "easeInOut"
                    },
                }}
                className="h-screen w-screen  fixed bg-gradient-to-b from-primary to-primary top-0 pointer-events-none" 
                /* {ypu want you can change the background transition color its temporery }*/
                />  
                 {children}
                </div>
                </AnimatePresence>
    );                   
};

export default PageTransition;

