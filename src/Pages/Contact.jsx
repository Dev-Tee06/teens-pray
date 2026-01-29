import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🙏");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="overflow-hidden font-sans relative">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

      {/* HERO */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <p className="text-gray-700 text-base md:text-xl max-w-3xl mx-auto px-4">
          We’d love to hear from you! Whether you have questions or want to get
          involved, reach out and we’ll connect with you.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-2">
          {/* CONTACT INFO */}
          <motion.div
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl 
                       p-6 sm:p-8 md:p-10 shadow-lg flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
              Reach Out
            </h2>

            <div className="flex items-start gap-4">
              <FaPhone className="text-red-500 text-xl mt-1 shrink-0" />
              <p className="text-gray-700 text-base sm:text-lg">09036857626</p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1 shrink-0" />
              <p className="text-gray-700 text-base sm:text-lg">
                teenspray01@gmail.com
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1 shrink-0" />
              <p className="text-gray-700 text-base sm:text-lg">
                Teens-Pray, Akure, Ondo State
              </p>
            </div>

            <div className="flex gap-6 mt-4">
              <FaFacebook className="text-2xl text-red-500 hover:scale-110 transition cursor-pointer" />
              <FaInstagram className="text-2xl text-orange-500 hover:scale-110 transition cursor-pointer" />
              <FaTwitter className="text-2xl text-red-500 hover:scale-110 transition cursor-pointer" />
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl 
                       p-6 sm:p-8 md:p-10 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 mt-2 rounded-full bg-gradient-to-r 
                           from-red-600 to-orange-500 text-white font-semibold 
                           shadow-lg hover:scale-105 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-green-600 font-medium mt-2">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
