import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/Illustration(1).png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState("sayHi");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    toast.dismiss();

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    await new Promise((res) => setTimeout(res, 1500));
    toast.success(
      `Message sent successfully! (${
        mode === "sayHi" ? "Say Hi" : "Get a Quote"
      })`
    );

    setFormData({ name: "", email: "", message: "", budget: "", timeline: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative px-8 py-24">
      <div className="container ">
        {/* LEFT SIDE - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 text-center md:text-left md:flex md:items-center md:gap-6">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-2 px-4 py-2 bg-green rounded-md inline-block text-black">
              Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-2xl mx-auto text-base sm:text-lg">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>
        </motion.div>

        <div className=" relative z-10  mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-200 rounded-3xl p-12">
          {/* LEFT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Mode Selection */}
            <div className="flex items-center gap-6 mb-8">
              {/* Say Hi */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="sayHi"
                  checked={mode === "sayHi"}
                  onChange={() => setMode("sayHi")}
                  className="hidden"
                />
                {/* Outer circle */}
                <span
                  className="w-5 h-5 flex items-center justify-center rounded-full border-1 transition-all duration-200 border-black"
                >
                  {/* Inner circle */}
                  <span
                    className="w-3 h-3 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor:
                        mode === "sayHi" ? "var(--green)" : "transparent",
                    }}
                  ></span>
                </span>
                <span className="text-sm dark:text-white">Say Hi</span>
              </label>

              {/* Get a Quote */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="getQuote"
                  checked={mode === "getQuote"}
                  onChange={() => setMode("getQuote")}
                  className="hidden"
                />
                {/* Outer circle */}
                <span
                  className="w-5 h-5 flex items-center justify-center rounded-full border-1 border-black transition-all duration-200"
                >
                  {/* Inner circle */}
                  <span
                    className="w-3 h-3 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor:
                        mode === "getQuote" ? "var(--green)" : "transparent",
                    }}
                  ></span>
                </span>
                <span className="text-sm dark:text-white">Get a Quote</span>
              </label>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-gray-100"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-md dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-100"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="mail@mail.com"
                  className="w-full px-4 py-3 border rounded-md dark:text-white"
                />
              </div>

              {/* Extra fields with animation */}
              <AnimatePresence>
                {mode === "getQuote" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div>
                      <label
                        htmlFor="budget"
                        className="block mb-2 text-sm font-medium dark:text-gray-100"
                      >
                        Project Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g. $1000 - $5000"
                        className="w-full px-4 py-3 border rounded-md dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block mb-2 text-sm font-medium dark:text-gray-100"
                      >
                        Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g. 2-3 weeks"
                        className="w-full px-4 py-3 border rounded-md dark:text-white"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium dark:text-gray-100"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={
                    mode === "sayHi"
                      ? "Hello! I just wanted to say hi..."
                      : "Describe your project requirements..."
                  }
                  className="w-full px-4 py-3 border rounded-md resize-none dark:text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-md bg-primary text-white transition-all duration-300 bg-black ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-primary/80 hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-end"
          >
            <img
              src={img}
              alt="Contact Illustration"
              className="max-w-xs md:max-w-sm lg:max-w-md w-full rounded-lg justify-end"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
