import { useState, useEffect } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { motion } from "framer-motion";

const START_DATE = new Date("2023-01-01");

export default function RelationshipTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setTimeLeft({
        days: differenceInDays(now, START_DATE),
        hours: differenceInHours(now, START_DATE) % 24,
        minutes: differenceInMinutes(now, START_DATE) % 60,
        seconds: differenceInSeconds(now, START_DATE) % 60,
      });
    };
    
    updateTimer(); // Initial call
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm p-4 rounded-2xl shadow-lg w-20 md:w-24"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.span 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-rose-600 font-display"
      >
        {value}
      </motion.span>
      <span className="text-xs md:text-sm font-medium text-rose-800 uppercase tracking-wider mt-1">{label}</span>
    </motion.div>
  );

  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-3xl font-display text-center text-white mb-8 drop-shadow-md">
        We've been together for
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </motion.section>
  );
}
