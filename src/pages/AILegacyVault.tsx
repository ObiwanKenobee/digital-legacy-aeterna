
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Brain, Sparkles } from 'lucide-react';

const AILegacyVault = () => {
  return (
    <div className="min-h-screen bg-drv-darker text-white pt-20">
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-gradient">AI-Powered </span>
            <span className="text-gradient-gold">Legacy Vault</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Preserve your wisdom, insights, and philosophies for future generations
            through the power of artificial intelligence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-purple/20 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-drv-purple" />
            </div>
            <h3 className="text-2xl font-serif mb-4">AI Content Modeling</h3>
            <p className="text-white/70 mb-6">
              Claude AI generates a comprehensive digital legacy through advanced content modeling based on your writings, speeches, and personal philosophies.
            </p>
            <button className="bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Start Training
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-gold/20 rounded-lg flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-drv-gold" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Interactive Wisdom</h3>
            <p className="text-white/70 mb-6">
              AI synthesizes your insights, poetry, and philosophical content into a beautifully designed, interactive vault for future generations.
            </p>
            <button className="bg-drv-gold/20 text-drv-gold hover:bg-drv-gold/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Explore Vault
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-cyan/20 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-drv-cyan" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Philosopher Mode</h3>
            <p className="text-white/70 mb-6">
              Compare your insights with historical figures like Seneca, Da Vinci, or Nietzsche, creating a timeless dialogue across eras.
            </p>
            <button className="bg-drv-cyan/20 text-drv-cyan hover:bg-drv-cyan/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Compare Insights
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative rounded-2xl overflow-hidden glass-morphism p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">
                <span className="text-gradient">Holographic </span>
                <span className="text-gradient-gold">Vault Interface</span>
              </h2>
              <p className="text-white/70 mb-8">
                Our revolutionary 3D holographic vault UI creates an immersive experience for browsing through AI-generated manuscripts and visualized thoughts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-drv-purple/30 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-drv-purple"></div>
                  </div>
                  <p className="text-white/80">
                    Interactive 3D visualization of your philosophical works
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-drv-gold/30 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-drv-gold"></div>
                  </div>
                  <p className="text-white/80">
                    AI-generated manuscripts with your unique style and voice
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-drv-cyan/30 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-drv-cyan"></div>
                  </div>
                  <p className="text-white/80">
                    Time-based exploration of your evolving philosophical journey
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/40 text-sm">Holographic Vault Preview</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-morphism rounded-xl p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif mb-6">Ready to Preserve Your Legacy?</h2>
          <p className="text-white/70 mb-8">
            Begin the journey of creating your AI-powered legacy vault today. Your wisdom deserves to transcend time.
          </p>
          <button className="bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]">
            Begin Your Digital Renaissance
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AILegacyVault;
