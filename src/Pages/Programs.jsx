import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFire,
  FaChild,
  FaHeartbeat,
  FaClock,
  FaUsers,
  FaQuestionCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

/* ===== IMAGES ===== */
import teensmain from "../assets/teensmain.jpeg";
import tp6 from "../assets/tp6.png";
import tp3 from "../assets/tp3.png";
import tp2 from "../assets/tp2.png";
import tp1 from "../assets/tp1.png";

import Countdown from "../Components/Countdown";

/* ================= COUNTER ================= */
function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(value / 40);
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Programs() {
  return (
    <div className="relative overflow-hidden font-sans bg-[#fafafa]">
      {/* ================= HERO ================= */}
      <section className="relative pt-48 pb-20 bg-gradient-to-b from-orange-50/50 to-transparent">
        <div className="absolute top-0 inset-x-0 h-[500px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[30rem] h-[30rem] bg-orange-300/20 rounded-full blur-[100px]" />
          <div className="absolute top-[10%] right-[10%] w-[25rem] h-[25rem] bg-red-300/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 text-gray-800 font-bold tracking-widest uppercase shadow-sm"
          >
            Capabilities
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Programs
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Raising a generation through prayer, worship, healing, and the
            transformative power of the Word.
          </motion.p>
        </div>
      </section>

      {/* ================= UPCOMING PROGRAM (GLASS HERO) ================= */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="absolute top-[-10%] -left-[10%] w-[40rem] h-[40rem] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[40rem] h-[40rem] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          >
            {/* IMAGE */}
            <div className="relative w-full order-1 lg:order-2 perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/40 to-red-500/40 blur-3xl opacity-60 rounded-3xl -z-10" />
              <img
                src={teensmain}
                alt="TeensPray 2026"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover lg:h-[750px] border border-white/10 hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* TEXT */}
            <div className="text-white order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-white shadow-inner">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                A Spiritual Gathering
              </span>

              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                TeensPray{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  2026
                </span>
              </h2>

              <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-lg">
                Our powerful annual gathering igniting prayer, worship, and
                purpose in teenagers. Join us as we raise a generation on fire
                for God.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14 text-white/90">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaCalendarAlt className="text-orange-500 text-xl" />
                  <span className="font-semibold">2026 </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                  <span className="font-semibold">TBA</span>
                </div>
              </div>

              {/* COUNTDOWN */}
              <div className="mb-14">
                <Countdown />
              </div>

              {/* CTA */}
              {/* <div className="relative mt-6 flex justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-black text-gray-950 shadow-[0_14px_40px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Register Now
                </Link>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS GRID ================= */}
      <section className="py-32 relative bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Initiatives
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <ProgramCard
              image={tp6}
              icon={<FaUsers />}
              title="Teens Pray Conference"
              description="An annual conference igniting prayer, worship, and spiritual purpose in teenagers."
              features={[
                "Annual powerful gathering",
                "Life-transforming worship & teachings",
                "Mentorship and fellowship",
              ]}
              delay={0.1}
            />

            <ProgramCard
              image={tp3}
              icon={<FaChild />}
              title="Children Holy Ghost Meeting"
              description="A joyful, spirit-filled meeting where children encounter God in a safe and loving atmosphere."
              features={[
                "Spirit-led worship for kids",
                "Bible teachings made simple",
                "Fun and guided spiritual growth",
              ]}
              delay={0.2}
            />

            <ProgramCard
              image={tp2}
              icon={<FaHeartbeat />}
              title="Healing & Miracle Outreach"
              description="Community outreaches focused on prayer, healing, miracles, and sharing Christ’s love."
              features={[
                "Healing & miracle prayers",
                "Evangelism & compassion outreach",
                "Powerful testimonies",
              ]}
              delay={0.3}
            />

            <ProgramCard
              image={tp1}
              icon={<FaClock />}
              title="6 Hours Prayer Charge"
              description="An intense prayer experience designed to deepen intimacy with God."
              features={[
                "6 hours non-stop prayer",
                "Prophetic & spiritual activation",
                "Deep worship moments",
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-32 bg-gradient-to-br from-black via-red-900 to-[#1a0500] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-orange-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight text-white drop-shadow-md">
            Our Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Impact
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard
              label="People Reached"
              value={500}
              delay={0.1}
              icon={<FaUsers />}
            />
            <ImpactCard
              label="Healings Recorded"
              value={100}
              delay={0.2}
              icon={<FaHeartbeat />}
            />
            <ImpactCard
              label="Holy Ghost Baptisms"
              value={50}
              delay={0.3}
              icon={<FaFire />}
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Event{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                FAQ
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            <FAQ
              question="Who can attend?"
              answer="Our programs are primarily designed for teenagers, youths, and young adults who desire to grow spiritually."
            />
            <FAQ
              question="Is registration required?"
              answer="Yes, registration is required to ensure proper spacing and a secure environment for all attendees."
            />
            <FAQ
              question="Are the programs free?"
              answer="Absolutely. All our programs are entirely free of charge, supported by partners and donors."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ProgramCard({ image, icon, title, description, features, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-orange-500 text-2xl z-20 shadow-lg group-hover:-rotate-6 transition-transform">
          {icon}
        </div>
      </div>

      <div className="p-10 flex-grow flex flex-col">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <ul className="space-y-3 text-gray-700 font-medium">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="text-orange-500 mt-1 shrink-0">
                <FaFire className="text-sm" />
              </span>{" "}
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ImpactCard({ label, value, delay, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-5xl text-orange-400 mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-5xl font-black mb-4 tracking-tighter text-white drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-white transition-colors">
          <AnimatedCounter value={value} />+
        </h3>
        <p className="text-white/80 font-bold uppercase tracking-widest text-sm">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
        open
          ? "bg-orange-50/50 border-orange-200 shadow-md"
          : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-sm"
      }`}
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-6 md:p-8 flex justify-between items-center gap-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${open ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
          >
            <FaQuestionCircle />
          </div>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          className={`flex-shrink-0 ${open ? "text-orange-500" : "text-gray-400"}`}
        >
          <FaChevronDown className="text-xl" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-600 font-medium text-lg leading-relaxed ml-14 border-t border-orange-100/50 mt-2 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
