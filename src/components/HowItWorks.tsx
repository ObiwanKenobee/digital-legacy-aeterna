
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 'upload',
    title: 'Upload & Train',
    description: 'We scan your writings, speeches, and ideas to understand your unique thought patterns.',
    detail: 'Our proprietary AI analyzes everything from writing style to philosophical viewpoints. The more data provided, the more authentic your digital avatar becomes.',
    icon: '📊'
  },
  {
    id: 'ai',
    title: 'Philosophical AI',
    description: 'AI learns from history and your personal insights to create a truly personalized model.',
    detail: 'By combining historical philosophical frameworks with your unique perspectives, we create an AI that thinks like you would, not just mimics your words.',
    icon: '🧠'
  },
  {
    id: 'legacy',
    title: 'Immersive Legacy Creation',
    description: 'Your thoughts become art, poetry, and AI-driven storytelling for future generations.',
    detail: 'Beyond conversation, your digital legacy includes AI-generated art and literature that expresses your ideas in new mediums that evolve with future technologies.',
    icon: '🎭'
  },
  {
    id: 'vault',
    title: 'Quantum Vault Protection',
    description: 'Your wisdom is secured for centuries using quantum-resistant encryption.',
    detail: 'We employ post-quantum cryptography and decentralized storage to ensure your digital legacy remains secure even as computational power increases exponentially.',
    icon: '🔒'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id);

  return (
    <section id="how" className="relative bg-drv-dark py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-drv-gold/30 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">
            <span className="text-gradient">How It</span> 
            <span className="text-gradient-gold ml-2">Works</span>
          </h2>
          <p className="text-white/70">
            Creating your digital legacy is a thoughtful, collaborative process. Here's how we transform your wisdom into an eternal digital presence.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute h-1 bg-white/10 top-24 left-0 right-0 z-0">
            <div 
              className="h-full bg-gradient-to-r from-drv-purple to-drv-gold transition-all duration-500"
              style={{ 
                width: `${(steps.findIndex(s => s.id === activeStep) + 1) * 25}%` 
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative ${index !== steps.length - 1 ? 'md:border-r border-white/10' : ''}`}
              >
                <div 
                  className={`
                    cursor-pointer transition-all duration-300
                    ${activeStep === step.id ? 'md:scale-110' : 'opacity-70 hover:opacity-100'}
                  `}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3
                      ${activeStep === step.id 
                        ? 'bg-gradient-to-r from-drv-purple to-drv-gold text-white animate-pulse-glow' 
                        : 'bg-white/10 text-white/70'}
                    `}>
                      {step.icon}
                    </div>
                    <div className={`text-center ${activeStep === step.id ? 'text-white' : 'text-white/70'}`}>
                      <h3 className="font-serif text-xl mb-1">{step.title}</h3>
                      <p className="text-sm">{index + 1} of 4</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 glass-morphism rounded-xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeStep}
            transition={{ duration: 0.5 }}
          >
            {steps.map((step) => (
              step.id === activeStep && (
                <div key={step.id} className="text-center">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-white font-serif text-2xl mb-4">{step.title}</h3>
                  <p className="text-white/90 mb-4">{step.description}</p>
                  <p className="text-white/70 text-sm">{step.detail}</p>
                </div>
              )
            ))}
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-drv-gold to-amber-500 text-black font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
          >
            Join the Digital Renaissance
          </motion.button>
          <p className="mt-4 text-white/50 text-sm">Limited availability. Accepting new legacy projects by application only.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
