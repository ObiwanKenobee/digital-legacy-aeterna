
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Key, ShieldAlert, Sparkles } from 'lucide-react';
import ApiKeyForm from '@/components/ApiKeyForm';
import { toast } from "sonner";

const Settings = () => {
  useEffect(() => {
    // Check if API keys are configured
    const savedKeys = localStorage.getItem('drv_api_keys');
    if (!savedKeys) {
      toast.info('Please configure your API keys to enable all features');
    }
  }, []);

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
            <span className="text-gradient">Vault </span>
            <span className="text-gradient-gold">Settings</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Configure your Digital Renaissance Vault and connect to external services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-morphism rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-drv-purple/20 rounded-lg flex items-center justify-center mr-4">
                  <Key className="w-6 h-6 text-drv-purple" />
                </div>
                <h2 className="text-2xl font-serif">API Integrations</h2>
              </div>
              
              <p className="text-white/70 mb-8">
                Connect your Digital Renaissance Vault to external AI services for enhanced functionality.
                Your API keys are stored securely in your browser's local storage.
              </p>
              
              <ApiKeyForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="glass-morphism rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-drv-gold/20 rounded-lg flex items-center justify-center mr-4">
                  <ShieldAlert className="w-6 h-6 text-drv-gold" />
                </div>
                <h2 className="text-2xl font-serif">Privacy & Security</h2>
              </div>
              
              <p className="text-white/70 mb-6">
                Control how your data is stored and processed within the Digital Renaissance Vault.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">AI Content Encryption</span>
                  <div className="w-12 h-6 bg-drv-purple/20 rounded-full flex items-center px-1">
                    <div className="w-4 h-4 rounded-full bg-drv-purple ml-auto"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Blockchain Authentication</span>
                  <div className="w-12 h-6 bg-drv-purple/20 rounded-full flex items-center px-1">
                    <div className="w-4 h-4 rounded-full bg-drv-purple ml-auto"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Anonymous Usage Analytics</span>
                  <div className="w-12 h-6 bg-white/10 rounded-full flex items-center px-1">
                    <div className="w-4 h-4 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-drv-cyan/20 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-drv-cyan" />
                </div>
                <h2 className="text-2xl font-serif">AI Preferences</h2>
              </div>
              
              <p className="text-white/70 mb-6">
                Customize how your AI avatars and content generation behave.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Default Avatar Voice</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white">
                    <option value="aria">Aria (Female)</option>
                    <option value="roger">Roger (Male)</option>
                    <option value="custom">Custom Voice Clone</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">AI Memory Depth</label>
                  <div className="flex items-center space-x-3">
                    <span className="text-white/60 text-sm">Short-term</span>
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-gradient-to-r from-drv-purple to-drv-cyan"></div>
                    </div>
                    <span className="text-white/60 text-sm">Long-term</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Response Style</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white">
                    <option value="philosophical">Philosophical</option>
                    <option value="practical">Practical & Direct</option>
                    <option value="poetic">Poetic & Artistic</option>
                    <option value="socratic">Socratic Method</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
