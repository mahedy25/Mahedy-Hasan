"use client"

import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import NewsHeadline from "./NewsHeadline";


const Contact = () => {
  const [formData, setFormData] = useState({
   name: "",
   email: "",
   message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xorsdlb", // Replace with your Service ID
        "template_qk097z5", // Replace with your Template ID
        formData, // Email data
        "xiHQdKQ1aO-RLkDSQ" // Replace with your Public Key
      )
      .then(
        () => {
          setSuccessMessage("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSuccessMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="px-4 md:px-0">
      <div>
        {/* Animated Header */}
        <div>
          <AnimatedText
            text="Let's Connect"
            className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl py-8 xl:py-14"
          />
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-6 rounded-lg shadow-[7px_7px_0px_#333] border-2 border-black max-w-lg  mx-auto"
        >
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section htmlFor="name" className="block font-medium">
             Name
            </section>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Your Name"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <section htmlFor="email" className="block font-medium">
             Email
            </section>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Your Email"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <section htmlFor="message" className="block font-medium">
             Message
            </section>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
              placeholder="Your Message"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
            whileHover={{scale:1.05}}
              type="submit"
              className=" bg-white border-2 border-black text-black hover:text-white shadow-[4px_4px_0px_#333] py-2 px-4 md:px-6 rounded-lg font-bold text-lg hover:bg-gradient-to-r from-red-500 to-fuchsia-500 "
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Success Message */}
          {successMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-500 font-bold font-mono text-xl text-center mt-4"
            >
              {successMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
      <div>
        <NewsHeadline/>
      </div>
    </section>
  );
};

export default Contact;
