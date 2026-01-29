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
  return (
    <div className="overflow-hidden font-sans relative">
      {/* Floating Orbs for Background */}
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
            generation. Through gatherings, teachings, and prayer encounters, we
            raise fearless followers of Christ.
          </motion.p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Vision & Mission
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg text-left hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-500 flex items-center gap-2 justify-center md:justify-start">
                <FaFire /> Our Mission
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <FaPrayingHands className="inline mr-2 text-orange-400" />{" "}
                  Empower teens to deepen their relationship with God that we
                  shine as light of Christ in their generation.
                </li>
                <li>
                  <FaFire className="inline mr-2 text-red-500" /> Ignite a
                  prayer revolution among teens transforming them into fearless
                  followers of Christ.
                </li>
                <li>
                  <FaGlobe className="inline mr-2 text-orange-500" /> Raise a
                  burning generation of young ones who can make positive impact
                  in nations of earth.
                </li>
                <li>
                  <FaDove className="inline mr-2 text-yellow-400" /> Raise a
                  generation of young intercessors who know God and communicate
                  it to God's people.
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg text-left hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-500 flex items-center gap-2 justify-center md:justify-start">
                <FaGlobe /> Our Vision
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <FaPrayingHands className="inline mr-2 text-red-500" /> Awaken
                  and nurture a genuine culture of prayer among teenagers.
                </li>
                <li>
                  <FaDove className="inline mr-2 text-orange-400" /> Raise
                  teenagers who are spiritually sensitive, morally grounded, and
                  purpose-driven.
                </li>
                <li>
                  <FaFire className="inline mr-2 text-yellow-400" /> Equip young
                  people to withstand societal pressures while standing boldly
                  for Christ.
                </li>
                <li>
                  <FaGlobe className="inline mr-2 text-red-500" /> Prepare a
                  generation that will become spiritual pillars, leaders, and
                  torchbearers in ministry, society, and governance.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR PROGRAMS ================= */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-red-400 flex items-center gap-2 justify-center md:justify-start">
                <FaChild /> Children Holy Ghost Meeting
              </h3>
              <p className="text-gray-200">
                Interactive spiritual sessions for young children to encounter
                the Holy Spirit in a safe and nurturing environment.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-400 flex items-center gap-2 justify-center md:justify-start">
                <FaHeartbeat /> Healing and Miracle Outreach
              </h3>
              <p className="text-gray-200">
                Powerful outreach programs focused on healing, miracles, and
                delivering hope to teens and communities in need.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-red-400 flex items-center gap-2 justify-center md:justify-start">
                <FaClock /> 6 Hours Prayer Charge
              </h3>
              <p className="text-gray-200">
                Extended prayer sessions designed to cultivate intimacy with God
                and empower teens through dedicated prayer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 rounded-3xl shadow-lg bg-white/20 backdrop-blur-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FaUsers className="text-red-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold">
                <AnimatedCounter value={500} />+
              </h3>
              <p className="text-gray-700 mt-2">Teens Reached</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl shadow-lg bg-white/20 backdrop-blur-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaHeartbeat className="text-orange-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold">
                <AnimatedCounter value={80} />+
              </h3>
              <p className="text-gray-700 mt-2">Healings</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl shadow-lg bg-white/20 backdrop-blur-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaDove className="text-yellow-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold">
                <AnimatedCounter value={50} />+
              </h3>
              <p className="text-gray-700 mt-2">Holy Ghost Baptisms</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= JOIN TEENS-PRAY CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 blur-3xl animate-pulse-slow"></div>

        <motion.div
          className="relative max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white animate-pulse">
            Join the Teens-Pray Movement
          </h2>
          <p className="text-gray-100 text-lg md:text-xl mb-8">
            Be part of a generation of teens on fire for God! Connect, pray, and
            grow with us through our events, programs, and spiritual mentorship.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform animate-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
