import { motion } from "framer-motion";
import {
  FaFire,
  FaPrayingHands,
  FaGlobe,
  FaDove,
  FaChild,
  FaHeartbeat,
  FaClock,
  FaUsers,
  FaQuoteLeft,
} from "react-icons/fa";
import { useEffect, useState } from "react";

/* ================= Animated Counter ================= */
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Floating Effects */}
      <div className="fixed -top-40 -left-40 w-[40rem] h-[40rem] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed top-80 -right-40 w-[40rem] h-[40rem] bg-red-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* ================= WHO WE ARE ================= */}
      <section className="relative pt-48 pb-24 bg-gradient-to-b from-transparent to-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 font-bold tracking-widest uppercase shadow-sm"
          >
            Who We Are
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A Generation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Awakened
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Teens-Pray is a faith-driven movement that empowers teenagers to
            deepen their relationship with God, ignite prayer, worship, and
            purpose, and boldly shine as the light of Christ in their
            generation.
          </motion.p>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center text-white">
          {[
            {
              icon: <FaUsers />,
              value: 500,
              label: "People Reached",
              color: "from-orange-500 to-red-500",
            },
            {
              icon: <FaHeartbeat />,
              value: 100,
              label: "Healings Recorded",
              color: "from-red-500 to-rose-600",
            },
            {
              icon: <FaFire />,
              value: 50,
              label: "Holy Ghost Baptisms",
              color: "from-amber-500 to-orange-500",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-[2.5rem] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-90 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div
                className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay`}
              ></div>

              <div className="relative z-10 bg-black/10 backdrop-blur-sm rounded-[2.4rem] p-10 h-full flex flex-col items-center justify-center border border-white/20">
                <div className="text-5xl mb-6 bg-white/20 w-24 h-24 flex items-center justify-center rounded-full shadow-inner border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black tracking-tight mb-2">
                  <AnimatedCounter value={stat.value} />+
                </h3>
                <p className="text-white/90 text-lg font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Vision &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Mission
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 transition-shadow duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center text-3xl mb-8 shadow-lg">
                <FaFire />
              </div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Our Mission
              </h3>
              <ul className="space-y-6 text-gray-600 font-medium text-lg">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                    <FaPrayingHands className="text-sm" />
                  </div>
                  Empower teens to deepen their relationship with God.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <FaFire className="text-sm" />
                  </div>
                  Ignite a prayer revolution among teens.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                    <FaGlobe className="text-sm" />
                  </div>
                  Raise a generation impacting nations.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                    <FaDove className="text-sm" />
                  </div>
                  Raise young intercessors who know God.
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 transition-shadow duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center text-3xl mb-8 shadow-lg">
                <FaGlobe />
              </div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Our Vision
              </h3>
              <ul className="space-y-6 text-gray-600 font-medium text-lg">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                    <FaPrayingHands className="text-sm" />
                  </div>
                  Awaken a genuine culture of prayer.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <FaDove className="text-sm" />
                  </div>
                  Raise spiritually grounded teenagers.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                    <FaFire className="text-sm" />
                  </div>
                  Equip teens to stand boldly for Christ.
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                    <FaGlobe className="text-sm" />
                  </div>
                  Prepare future leaders and torchbearers.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR PROGRAMS ================= */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2 className="text-4xl md:text-5xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Our Core Initiatives
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChild />,
                title: "Children Holy Ghost Meeting",
                desc: "Spirit-filled gatherings where children encounter God early.",
              },
              {
                icon: <FaHeartbeat />,
                title: "Healing & Miracle Outreach",
                desc: "Bringing the power of Jesus to communities in need.",
              },
              {
                icon: <FaClock />,
                title: "6 Hours Prayer Charge",
                desc: "Intense prayer sessions igniting spiritual fire.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10"
              >
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center text-4xl text-orange-400 mb-8 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONY ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-10 shadow-sm"
          >
            <FaQuoteLeft className="text-4xl text-orange-500" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-black text-gray-800 leading-snug tracking-tight mb-8"
          >
            “Through Teens-Pray, my prayer life was revived and my passion for
            God was restored. I now stand boldly for Christ in my school.”
          </motion.p>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 text-xl tracking-wide uppercase"
          >
            — A Teen Participant
          </motion.h4>
        </div>
      </section>

      {/* ================= GET INVOLVED ================= */}
      <section className="py-32 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white drop-shadow-md">
            Join the Movement
          </h2>
          <p className="mb-12 text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-sm">
            Be part of a generation committed to prayer, purpose, and impact.
          </p>

          <div className="relative inline-block group">
            <button
              onClick={() => setOpen(!open)}
              className="px-12 py-5 rounded-full bg-white text-white bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-xl font-black shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1"
            >
              Get Involved
            </button>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute left-1/2 -translate-x-1/2 mt-6 w-72 bg-white text-gray-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-100"
              >
                <div className="p-2">
                  <a
                    href={"https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"}
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
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
