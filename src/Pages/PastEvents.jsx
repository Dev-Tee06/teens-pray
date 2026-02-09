import { useState } from "react";
import { motion } from "framer-motion";
import { FaFire, FaUsers, FaChild } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

/* ===== IMPORT ASSETS ===== */
import tp7 from "../assets/tp7.jpg";
import tp6 from "../assets/tp6.png";
import tp3 from "../assets/tp3.png";
import tp2 from "../assets/tp2.png";
import teens from "../assets/teens2024.jpg";

/* 2025 images */
import teens1 from "../assets/teens1.jpg";
import teens2 from "../assets/teens2.jpg";
import teens3 from "../assets/teens3.jpg";
import teens4 from "../assets/teens4.jpg";
import teens5 from "../assets/teens5.jpg";
import teens6 from "../assets/teens6.jpg";
import teens8 from "../assets/teens8.jpg";
import teens10 from "../assets/teens10.jpg";
import teens11 from "../assets/teens11.jpg";
import teens12 from "../assets/teens12.jpg";
import teens13 from "../assets/teens13.jpg";
import teens14 from "../assets/teens14.jpg";
import teens15 from "../assets/teens15.jpg";
import teens16 from "../assets/teens16.jpg";
import teens18 from "../assets/teens18.jpg";
import teens20 from "../assets/teens20.jpg";

/* 2024 images */
import pray3 from "../assets/pray3.jpg";
import pray5 from "../assets/pray5.jpg";
import pray7 from "../assets/pray7.jpg";
import pray9 from "../assets/pray9.jpg";
import pray11 from "../assets/pray11.jpg";
import pray12 from "../assets/pray12.jpg";
import pray14 from "../assets/pray14.jpg";
import pray15 from "../assets/pray15.jpg";
import pray16 from "../assets/pray16.jpg";
import pray17 from "../assets/pray17.jpg";
import pray18 from "../assets/pray18.jpg";
import pray19 from "../assets/pray19.jpg";

/* videos */
import teenspray4 from "../assets/teenspray4.mp4";
import teenspray3 from "../assets/teenspray3.mp4";
import teenspray2 from "../assets/teenspray2.mp4";

/* ================= EVENTS DATA ================= */
const events = [
  {
    title: "Teens Pray 2026",
    year: 2026,
    type: "conference",
    coverImage: tp7,
    icon: <FaFire className="text-red-500 text-3xl" />,
    description:
      "An upcoming gathering of teenagers for prayer, worship, and revival.",
    images: [],
  },
  {
    title: "Teens Pray  2025",
    year: 2025,
    type: "conference",
    coverImage: tp6,
    icon: <FaFire className="text-red-500 text-3xl" />,
    description:
      "A powerful gathering marked by intense prayer, worship, and spiritual transformation.",
    images: [
      teens1,
      teens2,
      teens5,
      teens6,
      teens8,
      teens3,
      teens10,
      teens11,
      teens4,
      teens12,
      teens13,
      teens14,
      teens15,
      teens16,
      teens20,
      teens18,
    ],
    video: teenspray4,
  },
  {
    title: "Teens Pray  2024",
    year: 2024,
    type: "conference",
    coverImage: teens,
    icon: <FaUsers className="text-orange-500 text-3xl" />,
    description:
      "An unforgettable conference where teenagers encountered God deeply.",
    images: [
      pray3,
      pray5,
      pray7,
      pray9,
      pray11,
      pray12,
      pray14,
      pray15,
      pray16,
      pray17,
      pray18,
      pray19,
    ],
  },
  {
    title: "Children Holy Ghost Meeting",
    year: null,
    type: "children",
    coverImage: tp3,
    icon: <FaChild className="text-orange-500 text-3xl" />,
    description: "Joyful, Spirit-filled meetings where children encounter God.",
    video: teenspray3,
  },
  {
    title: "Healing & Miracle Outreach",
    year: null,
    type: "outreach",
    coverImage: tp2,
    icon: <FaUsers className="text-red-500 text-3xl" />,
    description:
      "Outreaches focused on healing, miracles, and sharing the love of Christ.",
    video: teenspray2,
  },
];

/* ================= PAGE ================= */
export default function PastEvents() {
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    if (typeof filter === "number") return event.year === filter;
    return event.type === filter;
  });

  return (
    <div className="font-sans bg-gray-50">
      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-br from-red-600 via-orange-500 to-red-700 text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Past Events
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg text-white/90">
          Moments of prayer, worship, and kingdom impact.
        </p>
      </section>

      {/* FILTERS */}
      <section className="py-10 bg-white">
        <div className="flex flex-wrap justify-center gap-4">
          <FilterButton
            label="All"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <FilterButton
            label="2026"
            active={filter === 2026}
            onClick={() => setFilter(2026)}
          />
          <FilterButton
            label="2025"
            active={filter === 2025}
            onClick={() => setFilter(2025)}
          />
          <FilterButton
            label="2024"
            active={filter === 2024}
            onClick={() => setFilter(2024)}
          />
          <FilterButton
            label="Outreach"
            active={filter === "outreach"}
            onClick={() => setFilter("outreach")}
          />
          <FilterButton
            label="Children"
            active={filter === "children"}
            onClick={() => setFilter("children")}
          />
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 space-y-32">
        {filteredEvents.map((event, index) => (
          <LazyEventSection key={index} {...event} />
        ))}
      </section>
    </div>
  );
}

/* ================= HELPERS ================= */
function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full font-semibold transition ${
        active
          ? "bg-red-600 text-white shadow-md"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

function LazyEventSection(props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView && <EventSection {...props} />}</div>;
}

function EventSection({ title, description, images, icon, coverImage, video }) {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = images ? (showAll ? images : images.slice(0, 8)) : [];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* COVER */}
      <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl mb-14">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          {icon}
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-2">
            {title}
          </h2>
          <p className="max-w-3xl text-white/90">{description}</p>
        </div>
      </div>

      {/* VIDEO */}
      {video && (
        <div className="mb-10 flex justify-center">
          <video
            src={video}
            controls
            className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* GALLERY */}
      {visibleImages.length > 0 && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={title}
              className="w-full h-56 object-cover rounded-2xl shadow"
            />
          ))}
        </motion.div>
      )}

      {/* VIEW MORE */}
      {images && images.length > 8 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
