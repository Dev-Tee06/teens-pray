import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), 7, 28, 0, 0, 0); // August 28

    if (now > target) {
      target.setFullYear(target.getFullYear() + 1); // Next year if passed
    }

    const difference = target - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  const units = [
    { label: "Days", value: timeLeft.days, color: "from-red-600 to-orange-500" },
    { label: "Hours", value: timeLeft.hours, color: "from-orange-500 to-amber-500" },
    { label: "Minutes", value: timeLeft.minutes, color: "from-amber-500 to-yellow-400" },
    { label: "Seconds", value: timeLeft.seconds, color: "from-yellow-400 to-red-400" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative group w-24 sm:w-28 md:w-32 h-32 sm:h-36"
        >
          {/* Glow Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-br ${unit.color} rounded-[2rem] opacity-30 group-hover:opacity-60 blur-md transition duration-500`}></div>
          
          {/* Card Engine */}
          <div className="relative w-full h-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            {/* Top highlight line */}
            <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${unit.color} opacity-80`}></div>
            
            <motion.div 
              key={unit.value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              {formatNumber(unit.value)}
            </motion.div>
            
            <div className="text-white/70 uppercase text-xs sm:text-sm font-semibold tracking-widest mt-2">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
