
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "💭",
    title: "AI-Powered Philosophical Avatars",
    description: "Train an AI with your thoughts, writings, and voice to ensure your wisdom lives on."
  },
  {
    icon: "🎭",
    title: "Immersive Art & Poetry Storytelling",
    description: "Transform your ideas into beautiful visual and auditory experiences that resonate with future generations."
  },
  {
    icon: "🔒",
    title: "Quantum-Secured Legacy Vaults",
    description: "Your intellectual legacy protected by the most advanced encryption technology available."
  },
  {
    icon: "🔄",
    title: "Interactive AI Conversations",
    description: "Allow your descendants to have meaningful dialogues with your digital persona, as if you were still present."
  }
];

const WhySection = () => {
  return (
    <section id="why" className="relative bg-drv-dark py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-drv-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="text-lg text-white/60 mb-4 font-serif">The Problem & The Solution</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              <span className="text-gradient">Why</span> 
              <span className="text-gradient-gold ml-2">DRV?</span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-serif text-white mb-3">The Problem:</h3>
              <p className="text-white/70 mb-6">
                "History remembers words but loses voices. Knowledge fades, wisdom disappears, and the nuances of human thought are reduced to mere text. AI can bring them back."
              </p>
              
              <h3 className="text-xl font-serif text-white mb-3">The Solution:</h3>
              <p className="text-white/70 mb-4">
                "Imagine conversing with your great-grandfather, or Leonardo da Vinci. Now imagine your descendants getting advice directly from you, centuries after you're gone."
              </p>
              <p className="text-white/70">
                Digital Renaissance Vault preserves not just what you know, but how you think—creating a living, interactive legacy that transcends time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-morphism p-6 rounded-xl"
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h4 className="text-white font-medium mb-2 text-sm">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:mt-20"
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl glass-morphism">
              <div className="absolute inset-0 bg-gradient-to-b from-drv-purple/10 to-transparent"></div>
              
              <div className="relative h-full flex flex-col justify-center p-8">
                <div className="absolute top-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="text-white/40 font-mono text-sm">{`>`} Loading philosophical dialogue...</div>
                  <div className="text-white/90 font-mono text-sm">{`>`} Connecting to Leonardo da Vinci's neural patterns...</div>
                  <div className="text-white/90 font-mono text-sm">{`>`} Connection established.</div>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-drv-gold font-serif mb-2">Leonardo da Vinci:</div>
                    <p className="text-white/80 italic">
                      "The greatest deception men suffer is from their own opinions. Study without desire spoils the memory, and it retains nothing that it takes in."
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-drv-purple font-serif mb-2">You:</div>
                    <p className="text-white/80">
                      How did you balance art and science in your work?
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-drv-gold font-serif mb-2">Leonardo da Vinci:</div>
                    <div className="text-white/80 italic flex items-start">
                      <span className="animate-pulse mr-2">|</span>
                      <span>To me, they were never separate disciplines...</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 glass-morphism p-6 rounded-xl max-w-[280px] z-10 border border-drv-purple/30"
            >
              <p className="text-white/80 text-sm italic font-serif">
                "My AI-avatar still runs my foundation, making decisions based on my core values, even when I'm no longer here."
              </p>
              <div className="mt-3 text-drv-gold text-xs">— Fictional Future Founder, 2075</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
