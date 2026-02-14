import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface RedPacketCardProps {
  id: string;
  prize: string;
  isFlipped: boolean;
  onFlip: (id: string) => void;
}

export default function RedPacketCard({ id, prize, isFlipped, onFlip }: RedPacketCardProps) {
  const handleClick = () => {
    if (!isFlipped) {
      onFlip(id);
      // Trigger confetti from the card's position (approximate)
      const rect = document.getElementById(`card-${id}`)?.getBoundingClientRect();
      const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
      const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { x, y },
        colors: ['#ff6b9d', '#ff3838', '#fbbf24', '#ffffff']
      });
    }
  };

  return (
    <div className="relative w-full h-72 cursor-pointer group perspective-[1000px]" onClick={handleClick} id={`card-${id}`}>
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex flex-col items-center justify-center shadow-xl border-4 border-yellow-400"
          style={{ backfaceVisibility: "hidden" }}
        >
           <div className="w-20 h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-4 bg-red-800">
             <span className="text-3xl text-yellow-400">福</span>
           </div>
           <p className="text-yellow-400 font-display text-2xl font-bold">Open Me</p>
           <div className="absolute bottom-4 text-red-200/50 text-xs">Tap to Flip</div>
        </div>

        {/* Back of Card (Prize) */}
        <div 
          className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl border-4 border-pink-300 p-6 text-center"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
           <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-4">You Won</p>
           <p className="text-2xl md:text-3xl font-bold text-rose-600 font-display leading-tight">{prize}</p>
           <div className="mt-6 text-pink-300">
             ✨ ✨ ✨
           </div>
        </div>
      </motion.div>
    </div>
  );
}
