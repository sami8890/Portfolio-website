"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface PictureProps {
  imageSrc?: string;
  imageAlt?: string;
  circleColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Picture: React.FC<PictureProps> = ({
  imageSrc = "/sami-gabol.png",
  imageAlt = "Profile Picture",
  circleColor = "#00ff99",
  size = 'medium'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Size configurations
  const sizes = {
    small: {
      image: "w-[200px] h-[200px]",
      container: "w-[250px] h-[250px]",
      circle: "w-[300px] h-[300px]"
    },
    medium: {
      image: "w-[250px] h-[250px] xl:w-[350px] xl:h-[350px]",
      container: "w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]",
      circle: "w-[350px] h-[350px] xl:w-[500px] xl:h-[500px]"
    },
    large: {
      image: "w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]",
      container: "w-[350px] h-[350px] xl:w-[500px] xl:h-[500px]",
      circle: "w-[400px] h-[400px] xl:w-[600px] xl:h-[600px]"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key="picture-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
            role="img"
            aria-label={imageAlt}
          >
            {/* Loading Spinner */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                >
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: imageError ? 0 : 1,
                transition: {
                  delay: 1.8,
                  duration: 0.9,
                  ease: "easeInOut",
                },
              }}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizes[size].image} mix-blend-lighten z-40`}
            >
              <Image
                src={imageSrc}
                priority
                quality={100}
                fill
                alt={imageAlt}
                className="object-contain rounded-full"
                onLoadingComplete={() => setIsLoading(false)}
                onError={() => {
                  setImageError(true);
                  setIsLoading(false);
                }}
              />
            </motion.div>

            {/* Animated Circle */}
            <div className="relative">
              <motion.svg
                className={`${sizes[size].circle} overflow-visible`}
                viewBox="-3 -3 512 512"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ margin: 'auto' }}
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="240"
                  stroke={circleColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="transparent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    strokeDasharray: ["15 120 25 25", "16 25 95 72", "4 250 22 22"]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.svg>
            </div>

            {/* Fallback for Image Error */}
            {imageError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizes[size].image} bg-gray-200 rounded-full flex items-center justify-center`}
              >
                <span className="text-gray-400 text-lg">Image not available</span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Picture;