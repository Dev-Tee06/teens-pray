import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import {
  FaQuoteLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFire,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";
import teensmain from "../assets/teensmain.webp";
import { useState } from "react";
import SEO from "../Components/SEO";

const WHATSAPP_LINK = "https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can participate in Teens-Pray?",
      answer:
        "Teenagers, Youth and Young Adults who desire to grow spiritually, connect with peers, and deepen their prayer life can participate.",
    },
    {
      question: "Do I need to register in advance?",
      answer:
        "Yes, registration is required for all major events to ensure proper planning and a safe environment.",
    },
    {
      question: "Are there opportunities for volunteers?",
      answer:
        "Absolutely! Teens-Pray encourages everyone who Loves God to volunteer in various capacities including worship, Ushering, Media & Publicity, Auditorium Support, Protocol.",
    },
  ];

  const testimonies = [
    {
      name: "Mary Johnson",
      message:
        "Attending Teens-Pray transformed my prayer life. I feel spiritually empowered and more confident in my faith.",
    },
    {
      name: "David Oke",
      message:
        "The conference helped me understand my purpose in God’s kingdom. I met amazing peers and mentors who inspired me.",
    },
    {
      name: "Faith Adeyemi",
      message:
        "The worship and prayer sessions were life-changing. Teens-Pray helped me develop a consistent and passionate prayer life.",
    },
  ];

  return (
    <div className="overflow-hidden font-sans">
      <SEO
        title="TeenSpray | Empowering Teenagers Through Faith and Growth"
        description="TeenSpray empowers teenagers spiritually, socially, and academically through faith-based initiatives."
        url="/"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TeenSpray",
          url: "https://teenspray.org",
          logo: "https://teenspray.org/teenslogo.png",
          description:
            "TeenSpray empowers teenagers spiritually, socially, and academically through faith-based initiatives.",
        }}
      />
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-48 pb-16 min-h-[95vh] flex items-center justify-center">
        {/* Ambient Animated Gradients */}
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10 bg-gradient-to-br from-orange-50/50 via-white to-red-50/50 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-orange-300 rounded-full blur-[100px] mix-blend-multiply"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[20%] right-[0%] w-[40vw] h-[40vw] bg-red-300 rounded-full blur-[100px] mix-blend-multiply"
          />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-16 text-center ring-1 ring-black/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                <span className="text-gray-900 drop-shadow-sm">
                  Raising a Generation
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 drop-shadow-sm">
                  On Fire for God
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-gray-600 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Teens-Pray is a faith-driven movement dedicated to igniting
              prayer, worship, and purpose in the hearts of teenagers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {/* Primary CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.4)] transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 group-hover:bg-[length:200%_auto] bg-[length:100%_auto] transition-all duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FaFire className="text-lg group-hover:scale-125 transition-transform" />{" "}
                  Join the Movement
                </span>
              </a>

              {/* Secondary CTA */}
              <button className="px-8 py-4 rounded-full border-2 border-transparent bg-white/50 backdrop-blur-sm text-gray-800 font-bold hover:bg-white/80 hover:border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHAT IS TEENS-PRAY ================= */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block mb-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 text-sm font-bold tracking-wide uppercase">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Teens-Pray?
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600 font-medium">
              <p>
                Teens-Pray is a faith-driven movement dedicated to raising a
                generation of teenagers who know God deeply and boldly shine as
                the light of Christ in their generation.
              </p>
              <p>
                We awaken a genuine culture of prayer among teenagers—igniting
                spiritual fire, nurturing intimacy with God, and shaping young
                people who are spiritually sensitive, morally grounded, and
                purpose-driven.
              </p>
              <p>
                Through prayer gatherings, worship encounters, and teaching,
                Teens-Pray raises fearless followers of Christ—equipped to
                withstand societal pressures and impact nations of the earth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-[2.5rem] blur-2xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-10 shadow-2xl">
              <ul className="space-y-6">
                {[
                  {
                    text: "Prayer & Worship Sessions",
                    icon: "🔥",
                    color: "text-red-500",
                  },
                  {
                    text: "Word-Based Teachings",
                    icon: "📖",
                    color: "text-amber-500",
                  },
                  {
                    text: "Teen Fellowship",
                    icon: "🤝",
                    color: "text-orange-500",
                  },
                  {
                    text: "Purpose & Identity Building",
                    icon: "🌍",
                    color: "text-rose-500",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-gray-800 text-xl font-bold">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-28 relative bg-[#fdfdfd] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-400/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Mission & Vision
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Empower Teens",
                icon: "🔥",
                desc: "Empower teens to deepen their relationship with God and shine as the light of Christ in their generation.",
              },
              {
                title: "Ignite Prayer",
                icon: "🙏",
                desc: "Ignite a prayer revolution among teens, transforming them into fearless followers of Christ.",
              },
              {
                title: "Impact Nations",
                icon: "🌍",
                desc: "Raise a generation of young ones who can make positive impact in nations of the earth.",
              },
              {
                title: "Spiritual Pillars",
                icon: "🕊️",
                desc: "Prepare young intercessors who know God and communicate it to His people, becoming spiritual pillars.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Subtle top border highlight */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING PROGRAM (GLASS HERO) ================= */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
        {/* Cinematic Lighting Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-600/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-red-600/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-amber-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 lg:p-20 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* IMAGE */}
            <div className="relative w-full order-1 lg:order-2 perspective-1000 group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/30 to-red-500/30 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500 rounded-3xl" />
              <img
                loading="lazy"
                src={teensmain}
                alt="TeensPray 2026"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover sm:h-[700px] hover:scale-[1.02] hover:rotate-1 transition-all duration-500 border border-white/10"
              />
              {
                <div className="relative mt-6 flex justify-center">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-black text-gray-950 shadow-[0_14px_40px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  >
                    Register Now
                  </Link>
                </div>
              }
            </div>

            {/* TEXT */}
            <div className="text-white order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold tracking-widest uppercase text-orange-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Upcoming Program
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                TeensPray{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  2026
                </span>
              </h2>

              <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                A powerful annual gathering igniting prayer, worship, and
                purpose in teenagers. An encounter that raises a generation on
                fire for God.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                {[
                  { icon: <FaCalendarAlt />, text: "2026 Season" },
                  { icon: <FaMapMarkerAlt />, text: "To Be Announced" },
                  { icon: <FaFire />, text: "Prayer • Worship • Word" },
                ].map((info, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 text-gray-200 font-medium shadow-inner"
                  >
                    <span className="text-orange-500 text-lg">{info.icon}</span>
                    {info.text}
                  </div>
                ))}
              </div>

              {/* COUNTDOWN */}
              <div className="mb-12">
                <Countdown />
              </div>

              {/* REGISTER CTA */}
              <div className="flex">
                <a
                  href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold text-white overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-500"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500 to-red-500 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                    <FaFire className="animate-pulse" /> Stay Updated
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIES ================= */}
      <section className="py-28 bg-[#fafafa]">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-900">
            What Teens{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Are Saying
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonies.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-300 relative text-left group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <FaQuoteLeft className="text-orange-100 text-6xl absolute top-6 right-8 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10 flex-grow italic">
                    "{t.message}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-orange-500 text-sm font-semibold">
                        Participant
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-900">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Questions
            </span>
          </h2>

          <div className="flex flex-col gap-4 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-orange-50/50 border-orange-200 shadow-md"
                      : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-sm"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
                      >
                        <FaQuestionCircle />
                      </div>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`flex-shrink-0 ${isOpen ? "text-orange-500" : "text-gray-400"}`}
                    >
                      <FaChevronDown className="text-xl" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-600 font-medium text-lg leading-relaxed ml-11 border-t border-orange-100/50 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
