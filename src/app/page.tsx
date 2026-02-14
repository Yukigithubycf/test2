"use client";

import { useState } from "react";
import IntroOverlay from "@/components/IntroOverlay";
import LoveLetter from "@/components/LoveLetter";
import RelationshipTimer from "@/components/RelationshipTimer";
import RedPacketsGrid from "@/components/RedPacketsGrid";
import { useAudio } from "@/hooks/useAudio";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const { play } = useAudio("/bgm.mp3");

  const handleEnter = () => {
    setShowOverlay(false);
    play();
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {showOverlay && (
          <IntroOverlay onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {!showOverlay && (
        <motion.div
          className="relative z-0 pt-20 pb-20 space-y-24 md:space-y-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <LoveLetter />
          <RelationshipTimer />
          <RedPacketsGrid />
          
          <footer className="text-center text-white/60 pb-8 text-sm font-display">
            Made with all my ❤️ for You
          </footer>
        </motion.div>
      )}
    </main>
  );
}
