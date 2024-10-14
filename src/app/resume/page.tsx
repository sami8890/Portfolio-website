"use client";

// Importing icons from react-icons for skills representation
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion"; // Importing motion for animations

// About data
const about = {
  title: "About Me",
  description:
    "I am a dedicated front-end web developer with a passion for building user-friendly applications. With a strong foundation in modern web technologies, I strive to create responsive and visually appealing designs that enhance the user experience. I enjoy tackling challenges and continuously improving my skills to stay updated with the latest industry trends.",
  info: [
    { fieldName: "Name", fieldValue: "Sami Gabol" },
    { fieldName: "Phone Number", fieldValue: "92+3302855702" },
    { fieldName: "Experience", fieldValue: "1+ year" },
    { fieldName: "Email", fieldValue: "samigabol12@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Hindi, Arabic, Balochi",
    },
  ],
};

// Experience data
const experiences = {
  title: "My Experience",
  description:
    "I have worked on various projects as a front-end web developer, delivering quality solutions. My experience includes collaborating with clients to define their needs and implementing effective strategies to meet project requirements, ensuring timely delivery without compromising quality.",
  items: [
    {
      company: "Freelancing",
      position: "Front-End Web Developer",
      duration: "2023 - Present",
    },
  ],
};

// Skills data
const skills = {
  title: "My Skills",
  description:
    "As a passionate front-end web developer, I specialize in creating seamless user experiences using modern web technologies. My skill set includes HTML5, CSS3, JavaScript, React, and Next.js. I have a keen eye for design and usability, which helps me to build applications that are not only functional but also visually appealing. I'm currently expanding my knowledge in TypeScript and exploring cloud computing technologies to enhance my development capabilities.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

// Education data
const education = {
  title: "My Education",
  description: "",
  items: [
    {
      institution:
        "Governor's Initiative on Artificial Intelligence and Cloud Computing",
      degree: "Certified Cloud Applied Generative AI Engineer",
      duration: "2023 - present",
    },
    {
      institution: "Online Course",
      degree: "Front-end Development",
      duration: "6 Months",
    },
    {
      institution: "DigiSkills.pk",
      degree: "Freelancing, English-language, Soft Skills",
      duration: "2024",
    },
    {
      institution: "Jawed Public school",
      degree: "Science ",
      duration: "2015- 2021",
    },
  ],
};

// Function to determine the color of the skill icons
const getSkillColor = (skillName: string): string => {
  switch (skillName) {
    case "HTML 5":
      return "text-orange-500"; // HTML Color
    case "CSS 3":
      return "text-blue-400"; // CSS Color
    case "JavaScript":
      return "text-yellow-500"; // JavaScript Color
    case "Figma":
      return "text-pink-500"; // Figma Color
    case "TypeScript":
      return "text-blue-600"; // TypeScript Color
    case "Next.js":
      return "text-gray-800"; // Next.js Color
    case "Tailwind CSS":
      return "text-cyan-500"; // Tailwind CSS Color
    default:
      return "text-gray-500"; // Default Color
  }
};

// Importing components for UI elements
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

export default function Resume() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity for the animation
      animate={{ opacity: 1 }} // Final opacity for the animation
      transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }} // Animation timing
      className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0 font-['Roboto'] "
    >
      <div className="container mx-auto rounded-lg shadow-lg p-6">
        <Tabs
          defaultValue="about" // Set "About Me" as the default tab
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tab navigation list */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="about"
              className="hover:bg-slate-700 transition duration-300"
            >
              About Me
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="hover:bg-slate-700 transition duration-300"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="hover:bg-slate-700 transition duration-300"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="hover:bg-slate-700 transition duration-300"
            >
              Experience
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about">
              <h2 className="text-4xl mb-4 text-green-600">{about.title}</h2>
              <p className="px-3 sm:px-0 text-lg text-gray-400 leading-relaxed">
                {about.description}
              </p>
              <ul className="mt-4 space-y-4 text-white">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <strong className="text-green-500 mr-1">
                      {item.fieldName}:
                    </strong>
                    <span className="text-gray-300">
                      {item.fieldValue}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="education">
              <h2 className="text-4xl mb-4 text-green-600">{education.title}</h2>
              <p className="px-3 sm:px-0 text-lg text-gray-400 leading-relaxed ">
                {education.description}
              </p>
              <ul>
                {education.items.map((item, index) => (
                  <li key={index} className="mb-4 py-2">
                    <h3 className="text-2xl text-blue-600">
                      {item.institution}
                    </h3>
                    <p className="text-lg text-gray-500">{item.degree}</p>
                    <p className="text-gray-400">{item.duration}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="skills">
              <h2 className="text-4xl mb-4 text-red-600">{skills.title}</h2>
              <p className="px-3 sm:px-0 text-lg text-gray-400 leading-relaxed mb-4">{skills.description}</p>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-4">
                {skills.skillList.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Final animation state
                    transition={{ duration: 0.4, delay: index * 0.1 }} // Animation timing
                    className="flex items-center space-x-2 w-full sm:w-auto p-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300"
                  >
                    <motion.div
                      className={`text-3xl transition duration-300 ${getSkillColor(skill.name)}`}
                      whileHover={{ scale: 1.2, rotate: 15 }} // Hover animation for icon
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span
                      className="text-lg text-gray-500 transition duration-300"
                      whileHover={{ color: "#4a90e2", scale: 1.05 }} // Change color on hover
                    >
                      {skill.name}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="experience">
              <h2 className="text-4xl mb-4 text-red-600">
                {experiences.title}
              </h2>
              <p className="px-3 sm:px-0 text-lg text-gray-400 leading-relaxed">
                {experiences.description}
              </p>
              <ul>
                {experiences.items.map((item, index) => (
                  <li key={index} className="mb-4">
                    <h3 className="text-2xl text-[#48ff48ad]">{item.position}</h3>
                    <p className="text-lg text-gray-500">{item.company}</p>
                    <p className="text-gray-400">{item.duration}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
