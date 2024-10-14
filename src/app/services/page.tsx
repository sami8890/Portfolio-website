"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { FaCode, FaSearch, FaVideo, FaPaintBrush } from "react-icons/fa"; // Importing service icons
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating responsive and dynamic websites tailored to individual needs. I work closely with you to understand your business goals and I handle it all.",
    href: "/web-development", // Example link
    icon: <FaCode className="text-2xl" />, // Service icon
  },
  {
    num: "02",
    title: "SEO Optimization",
    description:
      "I offer SEO services to boost your website's visibility and improve your search engine rankings through effective content strategies.",
    href: "/seo-optimization", // Example link
    icon: <FaSearch className="text-2xl" />, // Service icon
  },
  {
    num: "03",
    title: "Video Editing",
    description:
      "I have a little bit of experience in editing and optimizing videos for YouTube, TikTok, and other social media platforms. I offer a range of video editing services.",
    href: "/video-editing", 
    icon: <FaVideo className="text-2xl" />, // Service icon
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "I focus on designing intuitive user interfaces that enhance user experience, ensuring your product is engaging and effective.",
    href: "/ui-ux-design", // Example link
    icon: <FaPaintBrush className="text-2xl" />, // Service icon
  },
];

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col justify-center p-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="text-4xl text-red-700  mb-6 font-bold">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.2,
                duration: 0.5,
                ease: "easeIn",
              }}
              className="bg-gray-700 p-6 rounded-lg text-white transition-transform transform hover:scale-105 hover:shadow-lg border-b border-white/20 w-[90%] md:w-[80%] lg:w-[90%] mx-auto group" // Added shadow on hover
            >
              {/* First line: Number and Arrow */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl">{service.num}</span>
                <motion.div
                  className="text-2xl p-2 rounded-full transition-all bg-white group-hover:bg-green-600 group-hover:text-white hover:text-3xl"
                  whileHover={{ rotate: 90, scale: 1.1 }} // Rotate and zoom in effect
                  transition={{ duration: 0.1 }} // Transition duration for arrow
                >
                  <BsArrowDownRight className="text-black group-hover:text-white text-2xl font-semibold group-hover:font-normal" />
                </motion.div>
              </div>

              {/* Second line: Title -*/}
              <h2 className="mt-2 text-xl font-semibold group-hover:text-white/60 flex items-center">
                {service.icon} {/* Display the icon */}
                <span className="ml-2">{service.title}</span> {/* Title text */}
              </h2>

              {/* Third line: Description */}
              <p className="mt-2 text-sm text-gray-50 group-hover:text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

