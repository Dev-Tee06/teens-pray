import { useState } from "react";
import { motion } from "framer-motion";
import { FaFire, FaUsers, FaChild } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

/* ================= EVENTS DATA ================= */
const events = [
  {
    title: "Teens Pray Conference 2025",
    year: 2025,
    type: "conference",
    coverImage: "/assets/tp6.png",
    icon: <FaFire className="text-red-500 text-3xl" />,
    description:
      "A powerful gathering marked by intense prayer, worship, and spiritual transformation.",
    images: [
      "/assets/teens1.jpg",
      "/assets/teens2.jpg",
      "/assets/teens6.jpg",
      "/assets/teens8.jpg",
      "/assets/teens10.jpg",
      "/assets/teens11.jpg",
      "/assets/teens12.jpg",
      "/assets/teens13.jpg",
      "/assets/teens14.jpg",
      "/assets/teens15.jpg",
      "/assets/teens16.jpg",
      "/assets/teens20.jpg",
    ],
    video: "/assets/teenspray4.mp4",
  },
  {
    title: "Teens Pray Conference 2024",
    year: 2024,
    type: "conference",
    coverImage: "/assets/tp6.png",
    icon: <FaUsers className="text-orange-500 text-3xl" />,
    description:
      "An unforgettable conference where teenagers encountered God deeply.",
    images: [
      "/assets/pray3.jpg",
      "/assets/pray5.jpg",
      "/assets/pray7.jpg",
      "/assets/pray9.jpg",
      "/assets/pray11.jpg",
      "/assets/pray12.jpg",
      "/assets/pray14.jpg",
      "/assets/pray15.jpg",
      "/assets/pray16.jpg",
      "/assets/pray17.jpg",
      "/assets/pray18.jpg",
      "/assets/pray19.jpg",
    ],
  },
  {
    title: "Children Holy Ghost Meeting",
    year: "all",
    type: "children",
    coverImage: "/assets/tp3.png",
    icon: <FaChild className="text-orange-500 text-3xl" />,
    description: "Joyful, Spirit-filled meetings where children encounter God.",
    video: "/assets/teenspray3.mp4",
  },
  {
    title: "Evangelism Outreach",
    year: "all",
    type: "outreach",
    coverImage: "/assets/tp2.png",
    icon: <FaUsers className="text-red-500 text-3xl" />,
    description:
      "Taking the gospel to communities through prayer, love, and action.",
    video: "/assets/teenspray2.mp4",
  },
];

/* ================= PAGE ================= */
export default function PastEvents() {
  const [yearFilter, setYearFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    const yearMatch =
      yearFilter === "all" || event.year === yearFilter || event.year === "all";
    const typeMatch = typeFilter === "all" || event.type === typeFilter;
    return yearMatch && typeMatch;
  });

  return (
    <div className="font-sans bg-gray-50">
      {/* ===== HERO ===== */}
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

      {/* ===== FILTERS ===== */}
      <section className="py-10 bg-white">
        <div className="flex flex-wrap justify-center gap-4">
          {["all", 2025, 2024].map((year) => (
            <FilterButton
              key={year}
              active={yearFilter === year}
              onClick={() => setYearFilter(year)}
              label={year === "all" ? "All Years" : year}
            />
          ))}

          {[
            { label: "All Types", value: "all" },
            { label: "Children", value: "children" },
            { label: "Outreach", value: "outreach" },
            { label: "Conference", value: "conference" },
          ].map((t) => (
            <FilterButton
              key={t.value}
              active={typeFilter === t.value}
              onClick={() => setTypeFilter(t.value)}
              label={t.label}
            />
          ))}
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section className="py-20 space-y-32">
        {filteredEvents.map((event, index) => (
          <LazyEventSection key={index} {...event} />
        ))}
      </section>
    </div>
  );
}

/* ================= FILTER BUTTON ================= */
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

/* ================= LAZY EVENT SECTION ================= */
function LazyEventSection(props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView && <EventSection {...props} />}</div>;
}

/* ================= EVENT SECTION ================= */
function EventSection({ title, description, images, icon, coverImage, video }) {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = images ? (showAll ? images : images.slice(0, 8)) : [];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* ===== COVER ===== */}
      <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl mb-14">
        <img
          src={coverImage}
          alt={title}
          loading="lazy"
          decoding="async"
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

      {/* ===== VIDEO ===== */}
      {video && (
        <div className="mb-10 flex justify-center">
          <video
            src={video}
            controls
            className="w-full md:w-2/3 h-85 md:h-83 rounded-2xl shadow-lg"
            preload="metadata"
          />
        </div>
      )}

      {/* ===== GALLERY ===== */}
      {visibleImages.length > 0 && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {visibleImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-56 object-cover rounded-2xl shadow group-hover:scale-105 transition duration-500"
            />
          ))}
        </motion.div>
      )}

      {/* ===== VIEW MORE ===== */}
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
