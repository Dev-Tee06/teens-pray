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
      {/* Floating Orbs for Ambient Lighting */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-orange-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply transition-transform duration-[10000ms] animate-spin-slow"></div>
      <div className="absolute top-20 -right-32 w-[35rem] h-[35rem] bg-red-400/15 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-pulse-slow"></div>

      {/* HERO */}
      <section className="pt-48 pb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-8 px-6 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-orange-600 font-bold tracking-widest uppercase shadow-sm"
        >
          Let's Connect
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          We'd Love To <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Hear From You</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-xl font-medium max-w-2xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Whether you have questions, testimonies, or want to get
          involved as a volunteer or partner—reach out.
        </motion.p>
      </section>

      {/* CONTACT BLOCKS */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:gap-16 lg:grid-cols-5">

          {/* INFO WIDGET */}
          <motion.div
            className="lg:col-span-2 relative bg-gray-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden text-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Background elements inside the dark card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px] -z-0"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-red-500/20 rounded-full blur-[80px] -z-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Contact Information
              </h2>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors shadow-inner">
                    <FaPhone className="text-orange-400 text-xl group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-medium tracking-wide">0903-685-7626</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors shadow-inner">
                    <FaEnvelope className="text-orange-400 text-xl group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-medium tracking-wide">teenspray01@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors shadow-inner">
                    <FaMapMarkerAlt className="text-orange-400 text-xl group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-medium tracking-wide leading-relaxed">
                      Akure, Ondo State<br />Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex gap-4">
                <p className="text-gray-400 text-sm w-full font-medium">Follow our journey:</p>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><FaFacebook /></a>
                <a href="https://www.instagram.com/teenspray01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all"><FaTwitter /></a>
              </div>
            </div>
          </motion.div>

          {/* FORM WIDGET */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 transition-shadow duration-300"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-10 text-gray-900">
              Drop Us A <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="peer w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-lg text-gray-900 font-medium placeholder-transparent focus:bg-white focus:outline-none focus:border-orange-500 transition-all rounded-t-xl"
                    placeholder="Full Name"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-focus:-top-3 peer-focus:text-xs peer-focus:text-orange-500 bg-transparent peer-focus:bg-white px-1">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="peer w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-lg text-gray-900 font-medium placeholder-transparent focus:bg-white focus:outline-none focus:border-red-500 transition-all rounded-t-xl"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-4 top-4 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-focus:-top-3 peer-focus:text-xs peer-focus:text-red-500 bg-transparent peer-focus:bg-white px-1">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group mt-4">
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="peer w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-5 text-lg text-gray-900 font-medium placeholder-transparent focus:bg-white focus:outline-none focus:border-orange-400 transition-all shadow-inner"
                  placeholder="Your Message"
                />
                <label className="absolute left-6 top-5 text-gray-400 text-sm font-bold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:normal-case peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-orange-500 bg-transparent peer-focus:bg-white px-2 rounded-full">
                  How can we help you?
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white overflow-hidden shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </span>
                </button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold w-full sm:w-auto ${isSuccess ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
                  >
                    {status}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
