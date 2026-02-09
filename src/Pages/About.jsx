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
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-red-400/30 rounded-full blur-3xl animate-spin-slow" />
      <div className="absolute top-40 -right-40 w-[30rem] h-[30rem] bg-orange-400/30 rounded-full blur-3xl animate-pulse-slow" />

      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-28 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Teens-Pray is a faith-driven movement that empowers teenagers to
            deepen their relationship with God, ignite prayer, worship, and
            purpose, and boldly shine as the light of Christ in their
            generation.
          </motion.p>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaUsers />,
              value: 500,
              label: "People Reached",
            },
            {
              icon: <FaHeartbeat />,
              value: 100,
              label: "Healings Recorded",
            },
            {
              icon: <FaFire />,
              value: 50,
              label: "Holy Ghost Baptisms",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-red-500 mb-4 mx-auto">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-gray-800">
                <AnimatedCounter value={stat.value} />+
              </h3>
              <p className="text-gray-600 mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-14 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vision & Mission
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <motion.div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-red-500 flex items-center gap-3">
                <FaFire /> Our Mission
              </h3>
              <ul className="space-y-4 text-gray-700">
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
            <motion.div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-orange-500 flex items-center gap-3">
                <FaGlobe /> Our Vision
              </h3>
              <ul className="space-y-4 text-gray-700">
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
      <section className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-14 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
            Our Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
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
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-xl"
              >
                <div className="text-4xl text-red-400 mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaQuoteLeft className="text-4xl text-red-500 mx-auto mb-6" />
          <p className="text-xl italic text-gray-700 leading-relaxed">
            “Through Teens-Pray, my prayer life was revived and my passion for
            God was restored. I now stand boldly for Christ in my school.”
          </p>
          <h4 className="mt-6 font-semibold text-red-500">
            — A Teen Participant
          </h4>
        </div>
      </section>

      {/* ================= GET INVOLVED ================= */}
      <section className="py-28 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Join the Teens-Pray Movement
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg opacity-90">
          Be part of a generation committed to prayer, purpose, and impact.
        </p>

        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="px-14 py-4 rounded-full bg-white text-red-600 font-semibold shadow-xl hover:scale-105 transition"
          >
            Get Involved
          </button>

          {open && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white text-black rounded-2xl shadow-2xl overflow-hidden">
              <a
                href="/outreach"
                className="block px-6 py-4 hover:bg-orange-100"
              >
                Outreach
              </a>
              <a
                href="/children"
                className="block px-6 py-4 hover:bg-orange-100"
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
