import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFire,
  FaChild,
  FaHeartbeat,
  FaClock,
  FaUsers,
  FaQuoteLeft,
  FaQuestionCircle,
} from "react-icons/fa";

/* ===== IMPORT IMAGES ===== */
import tp6 from "../assets/tp6.png";
import tp3 from "../assets/tp3.png";
import tp2 from "../assets/tp2.png";
import tp1 from "../assets/tp1.png";

// ================= ANIMATED COUNTER =================
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

// ================= MAIN PAGE =================
export default function Programs() {
  return (
    <div className="overflow-hidden font-sans relative">
      {/* Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-30 animate-spin-slow" />
      <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />

      {/* ================= HERO ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h1>

        <motion.p
          className="text-gray-700 text-xl md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Powerful gatherings designed to raise a generation on fire for God
          through prayer, worship, healing, and the Word.
        </motion.p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ProgramCard
            image={tp6}
            icon={<FaUsers className="text-red-500 text-2xl" />}
            title="Teens Pray"
            description="An annual conference igniting prayer, worship, and spiritual purpose in teenagers."
            features={[
              "Annual powerful gathering",
              "Life-transforming worship & teachings",
              "Mentorship and fellowship",
            ]}
          />

          <ProgramCard
            image={tp3}
            icon={<FaChild className="text-orange-500 text-2xl" />}
            title="Children Holy Ghost Meeting"
            description="A joyful, spirit-filled meeting where children encounter God in a safe and loving atmosphere."
            features={[
              "Spirit-led worship for kids",
              "Bible teachings made simple",
              "Fun and guided spiritual growth",
            ]}
          />

          <ProgramCard
            image={tp2}
            icon={<FaHeartbeat className="text-red-500 text-2xl" />}
            title="Healing & Miracle Outreach"
            description="Community outreaches focused on prayer, healing, miracles, and sharing Christ’s love."
            features={[
              "Healing & miracle prayers",
              "Evangelism & compassion outreach",
              "Powerful testimonies",
            ]}
          />

          <ProgramCard
            image={tp1}
            icon={<FaClock className="text-orange-500 text-2xl" />}
            title="6 Hours Prayer Charge"
            description="An intense prayer experience designed to deepen intimacy with God."
            features={[
              "6 hours non-stop prayer",
              "Prophetic & spiritual activation",
              "Deep worship moments",
            ]}
          />
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ImpactCard
            icon={<FaUsers className="text-red-500 text-4xl mx-auto" />}
            label="Teens Reached"
            value={500}
          />
          <ImpactCard
            icon={<FaHeartbeat className="text-orange-500 text-4xl mx-auto" />}
            label="Healings"
            value={80}
          />
          <ImpactCard
            icon={<FaFire className="text-yellow-500 text-4xl mx-auto" />}
            label="Holy Ghost Baptisms"
            value={50}
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Testimonial
              quote="My prayer life changed completely after attending Teens Pray."
              author="Mary, 16"
            />
            <Testimonial
              quote="I encountered God deeply and found my purpose."
              author="Daniel, 17"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto text-left">
            <FAQ
              question="Who can attend?"
              answer="Teenagers, Youths and Young Adults."
            />
            <FAQ
              question="Is registration required?"
              answer="Yes, registration is required."
            />
            <FAQ
              question="Are the programs free?"
              answer="Yes, all programs are free."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// ================= PROGRAM CARD =================
function ProgramCard({ image, icon, title, description, features }) {
  return (
    <motion.div
      className="group bg-white/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">
          {icon}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <ul className="space-y-2 text-gray-700">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-orange-500">•</span> {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ================= IMPACT CARD =================
function ImpactCard({ icon, label, value }) {
  return (
    <div className="p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-lg">
      {icon}
      <h3 className="text-3xl font-bold mt-2">
        <AnimatedCounter value={value} />+
      </h3>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}

// ================= TESTIMONIAL =================
function Testimonial({ quote, author }) {
  return (
    <div className="bg-white/30 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
      <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
      <p className="italic text-gray-700 mb-4">"{quote}"</p>
      <p className="font-semibold text-right">— {author}</p>
    </div>
  );
}

// ================= FAQ =================
function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-2">
        <FaQuestionCircle className="text-orange-400" />
        <h3 className="font-semibold">{question}</h3>
      </div>
      {open && <p className="mt-3 text-gray-300">{answer}</p>}
    </div>
  );
}
