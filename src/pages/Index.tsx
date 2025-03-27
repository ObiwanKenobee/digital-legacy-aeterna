
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
              <a href="#why" className="text-white/60 hover:text-white transition-colors">Why DRV</a>
              <a href="#avatar" className="text-white/60 hover:text-white transition-colors">AI Avatar</a>
              <a href="#how" className="text-white/60 hover:text-white transition-colors">How It Works</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
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
