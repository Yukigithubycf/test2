import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function LoveLetter() {
  return (
    <motion.section 
      className="w-full max-w-2xl mx-auto p-4 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-pink-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
        <h2 className="text-3xl md:text-4xl font-display text-rose-500 mb-6 text-center">To My Dearest</h2>
        <div className="font-body text-gray-800 leading-loose text-lg md:text-xl min-h-[200px] whitespace-pre-wrap">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("My Dearest,")
                .pauseFor(1000)
                .typeString("<br/><br/>")
                .typeString("I wanted to tell you how much you mean to me.")
                .pauseFor(800)
                .typeString("<br/>")
                .typeString("Every moment with you is a treasure I hold close to my heart.")
                .pauseFor(800)
                .typeString("<br/>")
                .typeString("Thank you for being the most amazing person in my life.")
                .pauseFor(1000)
                .typeString("<br/><br/>")
                .typeString("<strong>I love you more than words can say.</strong> ❤️")
                .start();
            }}
            options={{
              cursor: '|',
              delay: 50,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
