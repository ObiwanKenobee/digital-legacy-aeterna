
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const quotes = [
  "What we know is a drop, what we don't know is an ocean. — Isaac Newton",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
  "The unexamined life is not worth living. — Socrates",
  "Man is condemned to be free. — Jean-Paul Sartre",
  "I think, therefore I am. — René Descartes"
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-drv-darker">
      <div className="absolute inset-0 star-field opacity-70"></div>

      <div className="absolute inset-0 bg-gradient-radial from-drv-purple/5 via-transparent to-transparent mask-radial-gradient"></div>

      <div className="container relative z-10 px-6 pt-20 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="w-40 h-40 md:w-52 md:h-52 mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-drv-purple to-drv-cyan opacity-60 rounded-full animate-morph"></div>
            <div className="absolute inset-1 bg-drv-darker rounded-full animate-morph" style={{ animationDelay: '-4s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center text-5xl text-white font-light">
              DRV
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl text-drv-gold/80 font-serif italic mb-2">
              Eternal Legacy Begins Here
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 font-medium">
              <span className="text-gradient">Beyond Time, Beyond Death—</span><br />
              <span className="text-gradient-gold">Your Legacy, Digitized.</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
              A fusion of AI, art, philosophy, and technology to preserve your wisdom for eternity.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a href="#why" className="inline-block px-8 py-4 bg-gradient-to-r from-drv-purple to-drv-purple/80 text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.6)] hover:from-drv-purple/90 hover:to-drv-purple/70">
                Begin Your Digital Renaissance
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-0 right-0 overflow-hidden h-7 flex items-center justify-center"
        >
          <div className="text-white/50 font-serif italic text-sm md:text-base overflow-hidden">
            {quotes.map((quote, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentQuote === index ? 1 : 0,
                  y: currentQuote === index ? 0 : 20 
                }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 right-0 text-center"
              >
                {quote}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
