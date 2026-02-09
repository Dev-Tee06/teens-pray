import { motion } from "framer-motion";
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
} from "react-icons/fa";

/* ===== IMAGES ===== */
import tp7 from "../assets/tp7.jpg";
import tp6 from "../assets/tp6.png";
import tp3 from "../assets/tp3.png";
import tp2 from "../assets/tp2.png";
import tp1 from "../assets/tp1.png";

/* ===== COUNTDOWN COMPONENT ===== */
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

/* ================= MAIN PAGE ================= */
export default function Programs() {
  return (
    <div className="relative overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="py-28 bg-gradient-to-br from-white via-orange-50 to-red-50 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h1>

        <p className="text-gray-700 text-xl max-w-2xl mx-auto">
          Raising a generation through prayer, worship, healing, and the Word.
        </p>
      </section>

      {/* ================= UPCOMING PROGRAM (GLASS HERO) ================= */}
      <section className="relative py-32 bg-gradient-to-br from-black via-red-600 to-orange-500">
        {/* Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/30 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-red-500/30 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              grid md:grid-cols-2 gap-16 items-center
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              rounded-[2.5rem]
              p-10 md:p-14
              shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* IMAGE */}
            <div className="relative w-full order-1 md:order-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/40 to-red-500/40 blur-xl" />
              <img
                src={tp7}
                alt="TeensPray 2026"
                className="relative rounded-3xl shadow-2xl 
                  md:h-[500px] h-[350px] sm:h-[450px] 
                  md:w-auto"
              />
            </div>

            {/* TEXT */}
            <div className="text-white order-2 md:order-1">
              <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold">
                UPCOMING PROGRAM
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                TeensPray 2026
              </h2>

              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                A powerful annual gathering igniting prayer, worship, and
                purpose in teenagers—raising a generation on fire for God.
              </p>

              <div className="flex flex-wrap gap-6 mb-10 text-white/90">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFire />
                  <span>Prayer • Worship • Word</span>
                </div>
              </div>

              {/* COUNTDOWN */}
              <div className="mb-10">
                <Countdown />
              </div>

              {/* REGISTER CTA */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative inline-flex items-center justify-center
                    px-10 py-3 rounded-full
                    text-lg font-extrabold tracking-wide
                    text-black
                    bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600
                    shadow-[0_0_35px_rgba(255,165,0,0.8)]
                    hover:shadow-[0_0_55px_rgba(255,80,0,1)]
                    hover:scale-105
                    transition-all duration-300
                    animate-pulse
                  "
                >
                  🔥 Register Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-28 bg-gradient-to-br from-white via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ProgramCard
            image={tp6}
            icon={<FaUsers />}
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
            icon={<FaChild />}
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
            icon={<FaHeartbeat />}
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
            icon={<FaClock />}
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
      <section className="py-28 bg-gradient-to-br from-black via-red-600 to-orange-500 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <ImpactCard label="People Reached" value={500} />
          <ImpactCard label="Healings" value={100} />
          <ImpactCard label="Holy Ghost Baptisms" value={50} />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Frequently Asked Questions
          </h2>

          <FAQ
            question="Who can attend?"
            answer="Teenagers, youths, and young adults."
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
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ProgramCard({ image, icon, title, description, features }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-8">
        <div className="text-orange-500 text-2xl mb-3">{icon}</div>
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
    </div>
  );
}

function ImpactCard({ label, value }) {
  return (
    <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-xl">
      <h3 className="text-4xl font-extrabold">
        <AnimatedCounter value={value} />+
      </h3>
      <p className="mt-2 text-white/90">{label}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="mb-4 p-6 bg-orange-50/60 backdrop-blur-lg border border-orange-200 rounded-2xl cursor-pointer"
    >
      <div className="flex items-center gap-2 font-semibold">
        <FaQuestionCircle className="text-orange-500" />
        {question}
      </div>
      {open && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
}
