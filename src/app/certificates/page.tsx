"use client"
// Import necessary modules
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Certification type definition
interface Certification {
  title: string;
  description: string;
  imageUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Certified HTML & CSS Developer",
    description: "Completed advanced HTML and CSS development course on Udemy.",
    imageUrl: "/certifications/udemy .png",
  },
  {
    title: "Certified in Digital Marketing",
    description: "Successfully completed a three-month Digital Marketing course from DigiSkills.",
    imageUrl: "/certifications/digital-marketing.png",
  },
  {
    title: "Certified in Freelancing",
    description: "Completed a three-month Freelancing course from DigiSkills, specializing in client management.",
    imageUrl: "/certifications/freelancing.png",
  },
];

const CertificationsSection = () => {
  const [inView, setInView] = useState(false);

  // Handle scroll event to detect when certifications appear
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("certifications");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="certifications" className="py-12 text-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                layout="responsive"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-white/80">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
