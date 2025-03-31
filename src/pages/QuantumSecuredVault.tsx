
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Lock, Key } from 'lucide-react';

const QuantumSecuredVault = () => {
  const [selectedTab, setSelectedTab] = useState('security');
  
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
            <span className="text-gradient">Quantum-Secured </span>
            <span className="text-gradient-gold">Immortality Vault</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Advanced encryption and blockchain technology preserves your AI-generated legacy
            for centuries, ensuring your wisdom reaches future generations.
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
              <Shield className="w-8 h-8 text-drv-purple" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Quantum Encryption</h3>
            <p className="text-white/70 mb-6">
              Supabase-powered secure storage ensures your AI-generated content is protected by the most advanced encryption available.
            </p>
            <button className="bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Encryption Details
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-gold/20 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-drv-gold" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Post-Mortem Activation</h3>
            <p className="text-white/70 mb-6">
              Schedule your AI messages and intellectual property to be unlocked at specific future dates or family milestones.
            </p>
            <button className="bg-drv-gold/20 text-drv-gold hover:bg-drv-gold/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Schedule Content
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-cyan/20 rounded-lg flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-drv-cyan" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Blockchain Authentication</h3>
            <p className="text-white/70 mb-6">
              Immutable blockchain records ensure the authenticity of your digital legacy, preventing tampering or unauthorized access.
            </p>
            <button className="bg-drv-cyan/20 text-drv-cyan hover:bg-drv-cyan/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Blockchain Security
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass-morphism rounded-xl p-8 h-full">
              <h2 className="text-3xl font-serif mb-6">
                <span className="text-gradient">Vault </span>
                <span className="text-gradient-gold">Configuration</span>
              </h2>
              
              <div className="flex border-b border-white/10 pb-4 mb-6">
                <button 
                  className={`px-4 py-2 rounded-lg mr-3 transition-all duration-300 ${
                    selectedTab === 'security' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('security')}
                >
                  Security
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg mr-3 transition-all duration-300 ${
                    selectedTab === 'access' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('access')}
                >
                  Access Control
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTab === 'timeline' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('timeline')}
                >
                  Timeline
                </button>
              </div>
              
              {selectedTab === 'security' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Encryption Level</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50">
                      <option value="standard">Standard (256-bit)</option>
                      <option value="advanced">Advanced (512-bit)</option>
                      <option value="quantum">Quantum-Resistant</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Authentication Method</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="biometric" className="mr-3" />
                        <label htmlFor="biometric" className="text-white/70">Biometric Verification</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="blockchain" className="mr-3" checked />
                        <label htmlFor="blockchain" className="text-white/70">Blockchain Authentication</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="multifactor" className="mr-3" />
                        <label htmlFor="multifactor" className="text-white/70">Multi-Factor Authentication</label>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 py-3 rounded-lg">
                    Apply Security Settings
                  </button>
                </div>
              )}
              
              {selectedTab === 'access' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Authorized Heirs</label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                        <span className="text-white/80">Sarah Johnson</span>
                        <button className="text-red-400 text-sm hover:text-red-300">Remove</button>
                      </div>
                      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                        <span className="text-white/80">Michael Smith</span>
                        <button className="text-red-400 text-sm hover:text-red-300">Remove</button>
                      </div>
                    </div>
                    <button className="mt-2 text-drv-purple hover:text-drv-purple/80 text-sm">+ Add Heir</button>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Access Level</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50">
                      <option value="partial">Partial (Limited Content)</option>
                      <option value="full">Full (All Content)</option>
                      <option value="tiered">Tiered (Age/Time Based)</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 py-3 rounded-lg">
                    Save Access Settings
                  </button>
                </div>
              )}
              
              {selectedTab === 'timeline' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Release Schedule</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50">
                      <option value="immediate">Immediate (Upon Verification)</option>
                      <option value="timed">Timed (Specific Date)</option>
                      <option value="milestone">Milestone (Family Events)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Content Categories</label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" id="personal" className="mr-3" checked />
                          <label htmlFor="personal" className="text-white/70">Personal Wisdom</label>
                        </div>
                        <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white/70 text-sm">
                          <option>Immediate</option>
                          <option>5 years</option>
                          <option>10 years</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" id="business" className="mr-3" checked />
                          <label htmlFor="business" className="text-white/70">Business Insights</label>
                        </div>
                        <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white/70 text-sm">
                          <option>Immediate</option>
                          <option selected>5 years</option>
                          <option>10 years</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" id="artistic" className="mr-3" />
                          <label htmlFor="artistic" className="text-white/70">Artistic Works</label>
                        </div>
                        <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white/70 text-sm">
                          <option>Immediate</option>
                          <option>5 years</option>
                          <option selected>10 years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 py-3 rounded-lg">
                    Schedule Content Release
                  </button>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-morphism rounded-xl overflow-hidden h-full relative">
              <div className="p-4 bg-black/30 border-b border-white/10 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-white/60 text-sm font-mono ml-2">Holographic Timeline Visualization</div>
              </div>
              
              <div className="p-8 h-[calc(100%-48px)] flex flex-col">
                <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                
                <div className="flex-1 relative">
                  <div className="absolute left-0 right-0 h-1 bg-drv-purple/20 top-1/2 transform -translate-y-1/2 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-drv-purple to-drv-gold"></div>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[5%]">
                    <div className="w-4 h-4 rounded-full bg-drv-purple absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 -translate-y-[calc(100%+12px)]">
                      <div className="text-white/80 text-sm font-medium">Legacy Creation</div>
                      <div className="text-white/60 text-xs">2023</div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[35%]">
                    <div className="w-4 h-4 rounded-full bg-drv-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 translate-y-4">
                      <div className="text-white/80 text-sm font-medium">First Release</div>
                      <div className="text-white/60 text-xs">2028</div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-[65%]">
                    <div className="w-4 h-4 rounded-full bg-drv-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 -translate-y-[calc(100%+12px)]">
                      <div className="text-white/80 text-sm font-medium">Full Access</div>
                      <div className="text-white/60 text-xs">2033</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="text-white font-serif text-xl mb-3">Next Scheduled Release</div>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-lg bg-drv-gold/20 flex items-center justify-center mr-4">
                      <Key className="w-5 h-5 text-drv-gold" />
                    </div>
                    <div>
                      <div className="text-white">Business Wisdom Collection</div>
                      <div className="text-white/60 text-sm">October 15, 2028</div>
                    </div>
                    <div className="ml-auto">
                      <button className="px-3 py-1 bg-drv-purple/20 text-drv-purple text-sm rounded hover:bg-drv-purple/30 transition-all duration-300">
                        Modify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-morphism rounded-xl p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif mb-6">Secure Your Legacy For Centuries</h2>
          <p className="text-white/70 mb-8">
            Begin building your quantum-secured immortality vault today. Ensure your wisdom transcends generations with the most advanced security available.
          </p>
          <button className="bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]">
            Secure Your Digital Legacy
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumSecuredVault;
