
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhySection from '../components/WhySection';
import AvatarDemo from '../components/AvatarDemo';
import HowItWorks from '../components/HowItWorks';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-drv-darker text-white overflow-hidden">
      <Navbar />
      
      <HeroSection />
      <WhySection />
      <AvatarDemo />
      <HowItWorks />
      
      <section className="py-20 bg-drv-dark relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-5">
              <span className="text-gradient">Explore Our </span>
              <span className="text-gradient-gold">Key Features</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that power the Digital Renaissance Vault platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/ai-legacy-vault" className="block">
                <div className="w-14 h-14 bg-drv-purple/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-drv-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">AI Legacy Vault</h3>
                <p className="text-white/70 mb-6">
                  Claude AI generates and curates your digital legacy through advanced content modeling and philosophical insights.
                </p>
                <div className="flex items-center text-drv-purple">
                  <span>Explore Feature</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/conversational-avatars" className="block">
                <div className="w-14 h-14 bg-drv-gold/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-drv-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">AI Avatars</h3>
                <p className="text-white/70 mb-6">
                  Create interactive digital personas with ElevenLabs voice synthesis that preserve your voice and thoughts.
                </p>
                <div className="flex items-center text-drv-gold">
                  <span>Explore Feature</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/quantum-secured-vault" className="block">
                <div className="w-14 h-14 bg-drv-cyan/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-drv-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">Quantum Vault</h3>
                <p className="text-white/70 mb-6">
                  Supabase-powered secure storage with blockchain authentication ensures your legacy remains protected.
                </p>
                <div className="flex items-center text-drv-cyan">
                  <span>Explore Feature</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/performance-monitoring" className="block">
                <div className="w-14 h-14 bg-drv-purple/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-drv-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="9" y="9" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="16" y="6" width="6" height="15" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">Monitoring</h3>
                <p className="text-white/70 mb-6">
                  Sentry integration ensures AI models, avatars, and vault interactions run smoothly with real-time analytics.
                </p>
                <div className="flex items-center text-drv-purple">
                  <span>Explore Feature</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <footer className="py-10 bg-drv-darker border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-serif text-xl tracking-wider">
                <span className="text-white">Digital</span>
                <span className="text-gradient-purple ml-1">Renaissance</span>
                <span className="text-gradient-gold ml-1">Vault</span>
              </div>
              <div className="text-white/40 text-sm mt-2">Beyond Time, Beyond Death—Your Legacy, Digitized.</div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link to="/ai-legacy-vault" className="text-white/60 hover:text-white transition-colors">AI Legacy Vault</Link>
              <Link to="/conversational-avatars" className="text-white/60 hover:text-white transition-colors">AI Avatars</Link>
              <Link to="/quantum-secured-vault" className="text-white/60 hover:text-white transition-colors">Quantum Vault</Link>
              <Link to="/performance-monitoring" className="text-white/60 hover:text-white transition-colors">Monitoring</Link>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/40 text-sm">© {new Date().getFullYear()} Digital Renaissance Vault. All rights reserved.</div>
            <div className="mt-4 md:mt-0 text-white/40 text-sm">Privacy Policy • Terms of Service</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
