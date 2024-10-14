"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 3302855702",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "samigabol12@gmail.com",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here, e.g., send data to an API.
    console.log("Form submitted");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="w-full xl:w-1/2 order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corporis nihil cumque.
              </p>
              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
                <Input type="email" placeholder="Email Address" required />
                <Input type="tel" placeholder="Phone Number" required />
              </div>
              <Textarea placeholder="Your Message" rows={4} required />

              {/* Submit button */}
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-[#4ADE80] text-white rounded-lg hover:bg-[#83c067] transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-self-start order-1 xl:order-none xl:mb-0 bg-[#27272c] p-10 rounded-xl h-[40vh]">
            <div className="flex flex-col gap-4">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4 " >
                 <div className="text-[#83c067]">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
