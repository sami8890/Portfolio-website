
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Picture = (): JSX.Element => {
  return (
    <div className="w-full h-full relative flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="relative"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] mix-blend-lighten z-40"
        >
          <Image
            src="/my.png"
            priority
            quality={100}
            fill
            alt="sami-gabol"
            className="object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]" // Increased size
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="240" // Increased radius
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 95 72 ", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};





// // orignal
// "use client";
// // change the size of this picture 
// import { motion } from "framer-motion";
// import Image from "next/image";

// export const Picture = () => {
//   return (
//     <div className="w-full h-full relative">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: 1,
//           transition: {
//             delay: 2,
//             duration: 0.4,
//             ease: "easeIn",
//           },
//         }}
//         className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
//       >
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: {
//               delay: 2.4,
//               duration: 0.4,
//               ease: "easeInOut",
//             },
//           }}
//           className="absolute inset-0 z-10 h-[80%] mt-8"
//         >
//           <Image
//             src="/my.png"
//             priority
//             quality={100}
//            height={280}
//            width={280}
//             alt="sami"
//             className="object-contain"
//           />
//         </motion.div>

//         {/* Circle inside the image */}
//         <motion.svg
//           className="absolute top-4 left-0 w-[250px] xl:w-[500px] h-[300px] xl:h-[586px] z-0"
//           fill="transparent"
//           viewBox="0 0 506 506"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.circle
//             cx="253"
//             cy="253"
//             r="250"
//             stroke="#00ff99"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ strokeDasharray: "24 10 0 0" }}
//             animate={{
//               strokeDasharray: ["15 120 25 25", "16 25 95 72", "4 250 22 22"],
//               rotate: [120, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// };


