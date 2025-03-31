
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Lock, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-7 h-7 text-drv-gold" />,
    title: "AI-Powered Philosophical Avatars",
    description: "Train an AI with your thoughts, writings, and voice to ensure your wisdom lives on."
  },
  {
    icon: <Brain className="w-7 h-7 text-drv-purple" />,
    title: "Immersive Art & Poetry Storytelling",
    description: "Transform your ideas into beautiful visual and auditory experiences that resonate with future generations."
  },
  {
    icon: <Lock className="w-7 h-7 text-drv-cyan" />,
    title: "Quantum-Secured Legacy Vaults",
    description: "Your intellectual legacy protected by the most advanced encryption technology available."
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-drv-gold" />,
    title: "Interactive AI Conversations",
    description: "Allow your descendants to have meaningful dialogues with your digital persona, as if you were still present."
  }
];

const WhySection = () => {
  return (
    <section id="why" className="relative bg-drv-dark py-24 md:py-36 overflow-hidden">
      {/* Top border glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-drv-purple/50 to-transparent"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full star-field"></div>
      </div>
      
      {/* Glowing orb background effect */}
      <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-drv-purple/5 blur-[100px]"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] rounded-full bg-drv-gold/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-white/60 mb-4 font-serif"
            >
              The Problem & The Solution
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif mb-12 relative"
            >
              <span className="text-gradient relative inline-block">
                Why
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-drv-purple to-transparent"
                />
              </span> 
              <span className="text-gradient-gold relative inline-block ml-4">
                DRV?
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-drv-gold to-transparent"
                />
              </span>
            </motion.h2>
            
            <div className="glass-morphism rounded-2xl p-8 mb-12 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif text-white mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-drv-purple mr-3"></span>
                  The Problem:
                </h3>
                <p className="text-white/70 mb-8 pl-7">
                  "History remembers words but loses voices. Knowledge fades, wisdom disappears, and the nuances of human thought are reduced to mere text. AI can bring them back."
                </p>
                
                <h3 className="text-xl font-serif text-white mb-3 flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-drv-gold mr-3"></span>
                  The Solution:
                </h3>
                <p className="text-white/70 mb-4 pl-7">
                  "Imagine conversing with your great-grandfather, or Leonardo da Vinci. Now imagine your descendants getting advice directly from you, centuries after you're gone."
                </p>
                <p className="text-white/70 pl-7">
                  Digital Renaissance Vault preserves not just what you know, but how you think—creating a living, interactive legacy that transcends time.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="glass-morphism p-6 rounded-xl border border-white/5 hover:border-drv-purple/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.15)]"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-medium mb-2">{feature.title}</h4>
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
            <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-2xl glass-morphism hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-drv-purple/10 to-transparent"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              
              <div className="relative h-full flex flex-col justify-start p-8">
                <div className="absolute top-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md border-b border-white/10">
                  <div className="flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-white/50 text-xs font-mono">leonardo_da_vinci.ai — Terminal</div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4 mt-16"
                >
                  <div className="text-white/40 font-mono text-sm">{`>`} Loading philosophical dialogue...</div>
                  <div className="text-white/90 font-mono text-sm">{`>`} Connecting to Leonardo da Vinci's neural patterns...</div>
                  <div className="text-white/90 font-mono text-sm">{`>`} Connection established.</div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="text-drv-gold font-serif mb-2 text-lg">Leonardo da Vinci:</div>
                    <p className="text-white/80 italic">
                      "The greatest deception men suffer is from their own opinions. Study without desire spoils the memory, and it retains nothing that it takes in."
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="text-drv-purple font-serif mb-2 text-lg">You:</div>
                    <p className="text-white/80">
                      How did you balance art and science in your work?
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="text-drv-gold font-serif mb-2 text-lg">Leonardo da Vinci:</div>
                    <div className="text-white/80 italic flex items-start">
                      <span className="animate-pulse text-drv-purple mr-2">|</span>
                      <span>To me, they were never separate disciplines. Art is the expression of science, and science informs art. Through observation of nature, I found patterns that informed both my paintings and my inventions. The same principles of light, proportion, and movement guided my anatomical studies and my portraiture alike...</span>
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
              className="absolute -bottom-10 -right-10 glass-morphism p-8 rounded-2xl max-w-[300px] z-10 border border-drv-purple/30 backdrop-blur-xl shadow-[0_0_25px_rgba(155,135,245,0.15)]"
            >
              <p className="text-white/90 text-sm italic font-serif">
                "My AI-avatar still runs my foundation, making decisions based on my core values, even when I'm no longer here."
              </p>
              <div className="mt-3 text-drv-gold text-xs flex items-center">
                <div className="w-6 h-1 bg-gradient-to-r from-drv-gold to-transparent mr-2"></div>
                Fictional Future Founder, 2075
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
