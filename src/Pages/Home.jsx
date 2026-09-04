import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaQuestionCircle,
  FaChevronDown,
  FaFire,
} from "react-icons/fa";
import heroImage from "../assets/final_hero_image.jpg";
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
    <div className="overflow-hidden font-sans bg-[#fdfaf6] text-gray-900">
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
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-50/40 via-[#fdfaf6] to-peach-50/40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* Left: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-gray-900">
              Raising a Generation <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                On Fire for God
              </span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Teens-Pray is a faith-driven movement dedicated to igniting
              prayer, worship, and purpose in the hearts of teenagers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5 pt-4">
              {/* Primary CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-1 bg-orange-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:bg-[length:200%_auto] bg-[length:100%_auto] transition-all duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FaFire className="text-lg group-hover:scale-125 transition-transform" />{" "}
                  Join the Movement
                </span>
              </a>

              {/* Secondary CTA */}
              <button className="px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-800 font-bold hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            {/* Atmospheric glows removed to allow natural blending */}

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={heroImage}
                alt="Praying Teen"
                className="relative z-10 w-full h-auto max-h-[700px] object-contain mix-blend-multiply"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT IS TEENS-PRAY ================= */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-bold tracking-wide uppercase">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              What is <span className="text-orange-500">Teens-Pray?</span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { text: "Prayer & Worship Sessions", icon: "🔥" },
              { text: "Word-Based Teachings", icon: "📖" },
              { text: "Teen Fellowship", icon: "🤝" },
              { text: "Purpose & Identity Building", icon: "🌍" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <span className="text-gray-900 text-lg font-bold">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-28 relative bg-[#fdfaf6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-orange-500">Mission & Vision</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.07)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIES ================= */}
      <section className="py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-900">
            What Teens <span className="text-orange-500">Are Saying</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonies.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative text-left flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <FaQuoteLeft className="text-orange-100 text-6xl absolute top-6 right-8 pointer-events-none opacity-50" />
                <div className="relative z-10 flex flex-col flex-grow pt-4">
                  <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10 flex-grow">
                    "{t.message}"
                  </p>
                  <div className="pt-6 border-t border-gray-50">
                    <h3 className="text-lg font-bold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-semibold">
                      Participant
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-28 bg-[#fdfaf6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="flex flex-col gap-4 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "border-orange-200 shadow-md"
                      : "border-gray-100 hover:border-gray-200 shadow-sm"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-orange-50 text-orange-500" : "bg-gray-50 text-gray-400"}`}
                    >
                      <FaChevronDown className="text-sm" />
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
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gray-50 mt-2 pt-4">
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
