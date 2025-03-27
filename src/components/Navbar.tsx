
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-drv-darker/80' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-serif text-xl tracking-wider">
            <span className="text-white">Digital</span>
            <span className="text-gradient-purple ml-1">Renaissance</span>
            <span className="text-gradient-gold ml-1">Vault</span>
          </div>
        </motion.div>

        <motion.div 
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          <a href="#why" className="text-white/70 hover:text-white transition-colors duration-300 hover-underline text-sm">
            Why DRV
          </a>
          <a href="#avatar" className="text-white/70 hover:text-white transition-colors duration-300 hover-underline text-sm">
            AI Avatar
          </a>
          <a href="#how" className="text-white/70 hover:text-white transition-colors duration-300 hover-underline text-sm">
            How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-transparent border border-drv-purple hover:border-drv-gold text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]">
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
