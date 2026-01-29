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
    {
      label: "Days",
      value: timeLeft.days,
      color: "from-red-600 to-orange-500",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-orange-400 to-red-400",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      color: "from-red-500 to-orange-500",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      color: "from-orange-300 to-red-400",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {units.map((unit) => (
        <motion.div
          key={unit.label}
          className={`w-24 md:w-28 h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform`}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`w-full h-1 rounded-t-xl mb-3 bg-gradient-to-r ${unit.color}`}
          ></div>
          <div className="text-3xl md:text-4xl font-bold text-white">
            {formatNumber(unit.value)}
          </div>
          <div className="text-gray-200 uppercase text-sm mt-1">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
