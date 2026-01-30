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
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Animated Counter Component
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
    <div className="overflow-hidden font-sans relative">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Teens-Pray is a faith-driven movement that empowers teenagers to
            deepen their relationship with God, ignite prayer, worship, and
            purpose, and boldly shine as the light of Christ in their
            generation.
          </motion.p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Vision & Mission
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-red-500 flex items-center gap-2">
                <FaFire /> Our Mission
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <FaPrayingHands className="inline mr-2 text-orange-400" />
                  Empower teens to deepen their relationship with God.
                </li>
                <li>
                  <FaFire className="inline mr-2 text-red-500" />
                  Ignite a prayer revolution among teens.
                </li>
                <li>
                  <FaGlobe className="inline mr-2 text-orange-500" />
                  Raise a generation impacting nations.
                </li>
                <li>
                  <FaDove className="inline mr-2 text-yellow-400" />
                  Raise young intercessors who know God.
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500 flex items-center gap-2">
                <FaGlobe /> Our Vision
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <FaPrayingHands className="inline mr-2 text-red-500" />
                  Awaken a genuine culture of prayer.
                </li>
                <li>
                  <FaDove className="inline mr-2 text-orange-400" />
                  Raise spiritually grounded teenagers.
                </li>
                <li>
                  <FaFire className="inline mr-2 text-yellow-400" />
                  Equip teens to stand boldly for Christ.
                </li>
                <li>
                  <FaGlobe className="inline mr-2 text-red-500" />
                  Prepare future leaders and torchbearers.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR PROGRAMS ================= */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
            Our Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
              <FaChild className="text-red-400 text-3xl mb-3" />
              <h3 className="font-semibold">Children Holy Ghost Meeting</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
              <FaHeartbeat className="text-orange-400 text-3xl mb-3" />
              <h3 className="font-semibold">Healing & Miracle Outreach</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">
              <FaClock className="text-red-400 text-3xl mb-3" />
              <h3 className="font-semibold">6 Hours Prayer Charge</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GET INVOLVED ================= */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Join the Teens-Pray Movement
        </h2>

        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="px-12 py-4 rounded-full bg-white text-red-600 font-semibold shadow-lg"
          >
            Get Involved
          </button>

          {open && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-white text-black rounded-xl shadow-xl">
              <a
                href="/outreach"
                className="block px-6 py-3 hover:bg-orange-100"
              >
                Outreach
              </a>
              <a
                href="/children"
                className="block px-6 py-3 hover:bg-orange-100"
              >
                Children Ministry
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
