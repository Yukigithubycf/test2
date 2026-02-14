import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

interface IntroOverlayProps {
  onEnter: () => void;
}

export default function IntroOverlay({ onEnter }: IntroOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Wait for animation to finish before calling onEnter
    setTimeout(onEnter, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 1 }}
          animate={
            isExiting 
              ? { scale: 40, opacity: 0 } 
              : { scale: [1, 1.2, 1] }
          }
          transition={
            isExiting
              ? { duration: 0.8, ease: "easeInOut" }
              : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }
        >
          <Heart size={100} fill="white" className="text-white drop-shadow-lg" />
        </motion.div>

        {!isExiting && (
          <motion.p
            className="mt-8 text-3xl font-bold text-white font-display drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Click to Open
          </motion.p>
        )}
      </div>
    </div>
  );
}
