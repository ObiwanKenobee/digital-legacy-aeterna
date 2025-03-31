
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Brain, User, Shield, BarChart3, Menu, X } from 'lucide-react';

const features = [
  { 
    id: 'ai-legacy-vault', 
    name: 'AI Legacy Vault', 
    path: '/ai-legacy-vault',
    icon: <Brain className="w-5 h-5 text-drv-gold" />
  },
  { 
    id: 'conversational-avatars', 
    name: 'AI Avatars', 
    path: '/conversational-avatars',
    icon: <User className="w-5 h-5 text-drv-purple" />
  },
  { 
    id: 'quantum-secured-vault', 
    name: 'Quantum Vault', 
    path: '/quantum-secured-vault',
    icon: <Shield className="w-5 h-5 text-drv-cyan" />
  },
  { 
    id: 'performance-monitoring', 
    name: 'Monitoring', 
    path: '/performance-monitoring',
    icon: <BarChart3 className="w-5 h-5 text-drv-gold" />
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-drv-darker/90 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-serif text-2xl tracking-wider"
          >
            <span className="text-white">Digital</span>
            <span className="text-gradient-purple ml-1">Renaissance</span>
            <span className="text-gradient-gold ml-1">Vault</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {features.map((feature) => (
              <Link
                key={feature.id}
                to={feature.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === feature.path ? 
                  'bg-white/10 text-white' : 
                  'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {feature.icon}
                <span>{feature.name}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-drv-darker border-t border-white/10 py-4"
        >
          <div className="container mx-auto px-6 space-y-3">
            {features.map((feature) => (
              <Link
                key={feature.id}
                to={feature.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === feature.path ? 
                  'bg-white/10 text-white' : 
                  'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {feature.icon}
                <span>{feature.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
