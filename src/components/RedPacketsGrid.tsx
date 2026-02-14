import { useLocalStorage } from "@/hooks/useLocalStorage";
import RedPacketCard from "./RedPacketCard";
import { motion } from "framer-motion";

const PRIZES = [
  { id: "1", prize: "Massage Coupon 💆‍♂️" },
  { id: "2", prize: "Dinner Date 🍽️" },
  { id: "3", prize: "Movie Night 🎬" }
];

export default function RedPacketsGrid() {
  const [flippedCards, setFlippedCards] = useLocalStorage<Record<string, boolean>>("flipped_cards", {});

  const handleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto py-12 px-4 mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl md:text-4xl font-display text-center text-white mb-12 drop-shadow-md">
        Pick Your Prizes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRIZES.map((item) => (
          <RedPacketCard 
            key={item.id}
            id={item.id}
            prize={item.prize}
            isFlipped={!!flippedCards[item.id]}
            onFlip={handleFlip}
          />
        ))}
      </div>
    </motion.section>
  );
}
