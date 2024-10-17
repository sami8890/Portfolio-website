"use client"

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Socials } from "@/components/social";
import { Picture } from "@/components/picture";
import { Stats } from "@/components/Stats";
import React from 'react';
import Contact from "./contact/page";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./Projects/page";
import CertificationsSection from "./certificates/page";

const HomePage = () => {
  const [isDownloadComplete, setIsDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloadComplete(true);
    setTimeout(() => {
      setIsDownloadComplete(false);
    }, 3000); // Hide the notification after 3 seconds
  };

  return (
    <section className="h-full text-white py-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-end Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-[#00ff99]">Sami Gabol</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant and efficient user experiences and I am proficient in various programming languages and tools. I am passionate about writing clean, efficient, maintainable code.
            </p>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
              <a
                href="/samigabol CV.pdf"
                download="Sami_Gabol_CV.pdf"
                className="uppercase flex items-center justify-center gap-2 border border-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0 mt-0 pt-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-base hover:bg-[#00ff99] hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Picture Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Picture />
          </div>
        </div>
      </div>

      <Stats />
      <br />
      {/* for sepration line */}
      <hr className="bg-gradient-to-r from-blue-500 to-purple-600 w-[80vw] mx-auto  border-dashed " />
      <Work />
      <br />
      <hr className="bg-gradient-to-r from-blue-500 to-purple-600 w-[80vw] mx-auto  border-dashed " />

      <Services />
      <br />
      <hr className="bg-gradient-to-r from-blue-500 to-purple-600 w-[80vw] mx-auto  border-dashed " />

      <Resume />
      <br />
      <hr className="bg-gradient-to-r from-blue-500 to-purple-600 w-[80vw] mx-auto  border-dashed " />
      <CertificationsSection />
      <hr className="bg-gradient-to-r from-blue-500 to-purple-600 w-[80vw] mx-auto  border-dashed " />

      <br />
      <Contact />
      <br />



      {/* Notification after download */}
      {isDownloadComplete && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
          CV has been downloaded!
        </div>
      )}
    </section>
  );
};

export default HomePage;
