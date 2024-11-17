"use client";

import React from "react";
import Link from "next/link"; // Import Next.js Link
import { useForm, ValidationError } from "@formspree/react";
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

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzzbvpol"); // Using your Form ID

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
          {/* Form Section */}
          <div className="w-full xl:w-1/2 order-2 xl:order-none">
            {state.succeeded ? (
              <div className="p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-2xl text-[#4ADE80]">
                  Thanks for your message! We'll be in touch soon.
                </h3>
                <Link href="/" className="mt-4 inline-block text-2xl text-blue-600 underline">
                  Go Back to Main Section
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let's Work Together</h3>
                <p className="text-white/60">
                  Feel free to reach out for collaborations or questions!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                {/* Message */}
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-4 px-6 py-2 bg-[#4ADE80] text-white rounded-lg hover:bg-[#83c067] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
                <Link href="/" className="mt-4 inline-block text-[#4ADE80] underline">
                  Go Back to Main Section
                </Link>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-self-start order-1 xl:order-none xl:mb-0 bg-[#27272c] p-10 rounded-xl h-[40vh]">
            <div className="flex flex-col gap-4">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
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

export default ContactForm;
