import { motion } from "framer-motion";
import { useState } from "react";
// import emailjs from "@emailjs/browser";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setIsSuccess(false);

    setTimeout(() => {
      setStatus("Message sent successfully! We'll be in touch. 🙏");
      setIsSuccess(true);
      setLoading(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="overflow-hidden font-sans relative bg-[#fafafa]">
      {/* Background Orbs */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-orange-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-20 -right-32 w-[35rem] h-[35rem] bg-red-400/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* HERO */}
      <section className="pt-48 pb-20 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          We'd Love To{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Hear From You
          </span>
        </motion.h1>

        <p className="text-gray-600 text-xl max-w-2xl mx-auto px-4">
          Reach out to us anytime — we’d love to connect with you.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* CONTACT INFO */}
          <div className="lg:col-span-2 bg-gray-900 text-white rounded-[2rem] p-10 flex flex-col">
            <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Contact Information
            </h2>

            <div className="space-y-10 flex-grow">
              {/* PHONE */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition">
                  <FaPhone className="text-orange-400 group-hover:text-white transition" />
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                    Phone
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    0903-685-7626
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition">
                  <FaEnvelope className="text-orange-400 group-hover:text-white transition" />
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                    Email
                  </p>
                  <p className="text-sm md:text-xl font-semibold break-all">
                    teenspray01@gmail.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition">
                  <FaMapMarkerAlt className="text-orange-400 group-hover:text-white transition" />
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                    Location
                  </p>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    Akure, Ondo State
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-12 pt-6 border-t border-white/10 flex gap-4 items-center">
              <span className="text-gray-400 text-sm">Follow us:</span>

              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/teenspray01"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full border-b-2 border-gray-200 p-3 focus:border-orange-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-200 p-3 focus:border-orange-500 outline-none"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-orange-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold flex items-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>

              {status && (
                <div
                  className={`p-3 rounded-lg ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
