import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaUsers, FaChild, FaPlay, FaImage } from "react-icons/fa";
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
    icon: <FaFire className="text-orange-500 text-4xl" />,
    description: "An upcoming gathering of teenagers for prayer, worship, and revival.",
    images: [],
  },
  {
    title: "Teens Pray 2025",
    year: 2025,
    type: "conference",
    coverImage: tp6,
    icon: <FaFire className="text-orange-500 text-4xl" />,
    description: "A powerful gathering marked by intense prayer, worship, and spiritual transformation.",
    images: [
      teens1, teens2, teens5, teens6, teens8, teens3, teens10, teens11, teens4,
      teens12, teens13, teens14, teens15, teens16, teens20, teens18,
    ],
    video: teenspray4,
  },
  {
    title: "Teens Pray 2024",
    year: 2024,
    type: "conference",
    coverImage: teens,
    icon: <FaUsers className="text-amber-500 text-4xl" />,
    description: "An unforgettable conference where teenagers encountered God deeply.",
    images: [
      pray3, pray5, pray7, pray9, pray11, pray12, pray14, pray15, pray16, pray17,
      pray18, pray19,
    ],
  },
  {
    title: "Children Holy Ghost Meeting",
    year: null,
    type: "children",
    coverImage: tp3,
    icon: <FaChild className="text-amber-500 text-4xl" />,
    description: "Joyful, Spirit-filled meetings where children encounter God.",
    video: teenspray3,
  },
  {
    title: "Healing & Miracle Outreach",
    year: null,
    type: "outreach",
    coverImage: tp2,
    icon: <FaUsers className="text-red-500 text-4xl" />,
    description: "Outreaches focused on healing, miracles, and sharing the love of Christ.",
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
    <div className="font-sans bg-[#fafafa]">
      {/* HERO */}
      <section className="relative pt-48 pb-24 text-center bg-black overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-[#fafafa] opacity-90"></div>
           <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[150%] bg-orange-600/20 blur-[150px] rotate-[-20deg]"></div>
           <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[150%] bg-red-600/20 blur-[150px] rotate-[20deg]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest uppercase shadow-sm"
          >
            Gallery & Memories
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Events</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl font-medium text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A visual journey through powerful moments of prayer, worship, and kingdom impact that shaped a generation.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-12 bg-white border-b border-gray-100 shadow-sm sticky top-20 z-40">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-6 max-w-7xl mx-auto">
          <FilterButton label="All Experiences" active={filter === "all"} onClick={() => setFilter("all")} />
          <FilterButton label="2026" active={filter === 2026} onClick={() => setFilter(2026)} />
          <FilterButton label="2025" active={filter === 2025} onClick={() => setFilter(2025)} />
          <FilterButton label="2024" active={filter === 2024} onClick={() => setFilter(2024)} />
          <FilterButton label="Outreach" active={filter === "outreach"} onClick={() => setFilter("outreach")} />
          <FilterButton label="Children" active={filter === "children"} onClick={() => setFilter("children")} />
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 space-y-40">
        <AnimatePresence>
          {filteredEvents.map((event, index) => (
            <motion.div
              layout
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <LazyEventSection {...event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
}

/* ================= HELPERS ================= */
function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
        active
          ? "bg-gray-900 text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] scale-105"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
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
      <div className="relative h-80 md:h-[400px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-16 group">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-10 md:p-16">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl mb-6 shadow-2xl border border-white/20">
             {icon}
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-md">
            {title}
          </h2>
          <p className="max-w-3xl text-lg md:text-xl font-medium text-white/90 drop-shadow">
            {description}
          </p>
        </div>
      </div>

      {/* VIDEO */}
      {video && (
        <div className="mb-16 flex justify-center">
          <div className="relative w-full md:w-2/3 lg:w-1/2 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-200 bg-white p-2 group">
             <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase rounded-full tracking-widest">
                <FaPlay className="text-orange-500" /> Event Highlight
             </div>
             <video
               src={video}
               controls
               className="w-full h-72 md:h-96 rounded-[1.5rem] object-cover bg-black"
             />
          </div>
        </div>
      )}

      {/* GALLERY */}
      {visibleImages.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
             <FaImage className="text-2xl text-orange-500" />
             <h3 className="text-3xl font-black text-gray-900">Event Gallery</h3>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
               {visibleImages.map((img, i) => (
                 <motion.div
                   layout
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.4 }}
                   className="relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
                 >
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                   <img
                     src={img}
                     alt={title}
                     className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                 </motion.div>
               ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* VIEW MORE CTA */}
      {images && images.length > 8 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-gray-900 border-2 border-gray-900 overflow-hidden hover:text-white transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gray-900 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0"></div>
            <span className="relative z-10">
               {showAll ? "View Less" : "Load Experience Gallery"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
