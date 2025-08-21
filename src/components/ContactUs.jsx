import { motion } from "motion/react";
import React from "react";
import toast from "react-hot-toast";
import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "0fa9f4ca-5a4a-4032-ad17-af3979d4beab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-gray-700 dark:text-white"
    >
      {/* Title Section */}
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we create digital solutions that move your business forward."
      />

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-5 max-w-2xl w-full"
      >
        {/* Name Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="person" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="email" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-center">
          <button
            type="submit"
            className="flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Submit
            <img src={assets.arrow_icon} alt="arrow" className="w-4" />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
