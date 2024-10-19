"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message || "Message sent successfully!");
      } else {
        setResponseMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMessage("Failed to send the message.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              <h3 className="text-4xl text-accent">Let’s Work Together</h3>
              <p className="text-white/60">
              I have not added back
              </p>
              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleInputChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleInputChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                onChange={handleInputChange}
              />
              {/* Submit button */}
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-[#4ADE80] text-white rounded-lg hover:bg-[#83c067] transition-all"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {responseMessage && (
                <p className="text-white mt-4">{responseMessage}</p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-self-start order-1 xl:order-none xl:mb-0 bg-[#27272c] p-10 rounded-xl h-[40vh]">
            <div className="flex flex-col gap-4">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4 ">
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
