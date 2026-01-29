import { motion } from "framer-motion";
import Countdown from "../Components/Countdown";
import { FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can participate in Teens-Pray?",
      answer:
        "Teens from ages 13-19 who desire to grow spiritually, connect with peers, and deepen their prayer life can participate.",
    },
    {
      question: "Do I need to register in advance?",
      answer:
        "Yes, registration is required for all major events to ensure proper planning and a safe environment.",
    },
    {
      question: "Are there opportunities for volunteers?",
      answer:
        "Absolutely! Teens-Pray encourages youth to volunteer in various capacities including worship, mentorship, and event support.",
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
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-black">Raising a Generation</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                On Fire for God
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Teens-Pray is a faith-driven movement dedicated to igniting
              prayer, worship, and purpose in the hearts of teenagers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                Join the Movement
              </button>
              <button className="px-8 py-3 rounded-full border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHAT IS TEENS-PRAY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-orange-500">Teens-Pray?</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Teens-Pray is a faith-driven movement dedicated to raising a
              generation of teenagers who know God deeply and boldly shine as
              the light of Christ in their generation.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We awaken a genuine culture of prayer among teenagers—igniting
              spiritual fire, nurturing intimacy with God, and shaping young
              people who are spiritually sensitive, morally grounded, and
              purpose-driven.
            </p>
            <p className="text-gray-700 text-lg">
              Through prayer gatherings, worship encounters, and teaching,
              Teens-Pray raises fearless followers of Christ—equipped to
              withstand societal pressures and impact nations of the earth.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-orange-200 rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-4 text-gray-800 text-lg font-medium">
              <li>🔥 Prayer & Worship Sessions</li>
              <li>📖 Word-Based Teachings</li>
              <li>🤝 Teen Fellowship</li>
              <li>🌍 Purpose & Identity Building</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Mission & Vision</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mission 1 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <div className="text-red-500 text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2">Empower Teens</h3>
              <p className="text-gray-700 text-sm">
                Empower teens to deepen their relationship with God and shine as
                the light of Christ in their generation.
              </p>
            </motion.div>

            {/* Mission 2 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="text-orange-500 text-5xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-2">Ignite Prayer</h3>
              <p className="text-gray-700 text-sm">
                Ignite a prayer revolution among teens, transforming them into
                fearless followers of Christ.
              </p>
            </motion.div>

            {/* Vision 1 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-red-500 text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Impact Nations</h3>
              <p className="text-gray-700 text-sm">
                Raise a generation of young ones who can make positive impact in
                nations of the earth.
              </p>
            </motion.div>

            {/* Vision 2 */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-orange-500 text-5xl mb-4">🕊️</div>
              <h3 className="text-xl font-semibold mb-2">Spiritual Pillars</h3>
              <p className="text-gray-700 text-sm">
                Prepare young intercessors who know God and communicate it to
                His people, becoming spiritual pillars and leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ANTICIPATE TEENS PRAY 2026 ================= */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 blur-3xl"></div>
        <motion.div
          className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Anticipate <span className="text-white/90">Teens Pray 2026</span>
          </motion.h2>

          <Countdown />

          <motion.div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <p className="text-xl font-semibold mb-2">
              📅 Year: <span className="text-orange-400">2026</span>
            </p>
            <p className="text-xl font-semibold mb-6">
              🔥 Theme: <span className="text-red-400">ANTICIPATE</span>
            </p>

            <button className="px-10 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-semibold hover:scale-105 transition">
              Stay Updated
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= TESTIMONIES ================= */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
            What Teens Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonies.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
                <p className="text-gray-700 mb-4">"{t.message}"</p>
                <h3 className="text-lg font-semibold text-orange-500">
                  {t.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4 text-left">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 rounded-xl p-6 cursor-pointer shadow hover:shadow-lg transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FaQuestionCircle className="text-orange-500" />{" "}
                    {faq.question}
                  </h3>
                  <span className="text-orange-500 font-bold">
                    {openIndex === i ? "-" : "+"}
                  </span>
                </div>
                {openIndex === i && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
