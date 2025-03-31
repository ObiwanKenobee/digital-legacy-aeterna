
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAPI } from '../context/APIContext';
import APIConfigTabs from '../components/APIConfigTabs';
import { Key, Settings as SettingsIcon, Monitor, Shield, User } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('claude');
  const { status, saveClaudeAPIKey, saveElevenLabsAPIKey, saveSentryCredentials } = useAPI();
  
  // Claude AI settings
  const [claudeAPIKey, setClaudeAPIKey] = useState('');
  
  // ElevenLabs settings
  const [elevenLabsAPIKey, setElevenLabsAPIKey] = useState('');
  
  // Sentry settings
  const [sentryDSN, setSentryDSN] = useState('');
  const [sentryClientId, setSentryClientId] = useState('');
  const [sentryClientSecret, setSentryClientSecret] = useState('');
  
  // Save Claude API key
  const handleSaveClaudeAPI = () => {
    if (!claudeAPIKey.trim()) {
      toast.error("Please enter the Claude AI API key");
      return;
    }
    
    if (saveClaudeAPIKey(claudeAPIKey)) {
      toast.success("Claude AI API configured successfully");
      setClaudeAPIKey('');
    } else {
      toast.error("Failed to save Claude AI API key");
    }
  };
  
  // Save ElevenLabs API key
  const handleSaveElevenLabsAPI = () => {
    if (!elevenLabsAPIKey.trim()) {
      toast.error("Please enter the ElevenLabs API key");
      return;
    }
    
    if (saveElevenLabsAPIKey(elevenLabsAPIKey)) {
      toast.success("ElevenLabs API configured successfully");
      setElevenLabsAPIKey('');
    } else {
      toast.error("Failed to save ElevenLabs API key");
    }
  };
  
  // Save Sentry credentials
  const handleSaveSentryCredentials = () => {
    if (!sentryDSN.trim() || !sentryClientId.trim() || !sentryClientSecret.trim()) {
      toast.error("Please enter all Sentry credentials");
      return;
    }
    
    if (saveSentryCredentials(sentryDSN, sentryClientId, sentryClientSecret)) {
      toast.success("Sentry monitoring configured successfully");
      setSentryDSN('');
      setSentryClientId('');
      setSentryClientSecret('');
    } else {
      toast.error("Failed to save Sentry credentials");
    }
  };
  
  return (
    <div className="min-h-screen bg-drv-darker text-white pt-20">
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-gradient">Account </span>
            <span className="text-gradient-gold">Settings</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Configure your account settings and API integrations for Digital Legacy Vault
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="glass-morphism rounded-xl p-6">
              <h2 className="text-xl font-medium mb-6">Settings</h2>
              
              <nav className="space-y-1">
                <button className="w-full flex items-center px-3 py-3 text-left rounded-lg bg-drv-purple/20 text-white">
                  <Key className="w-5 h-5 mr-3" />
                  <span>API Configuration</span>
                </button>
                
                <button className="w-full flex items-center px-3 py-3 text-left rounded-lg text-white/70 hover:bg-white/5">
                  <User className="w-5 h-5 mr-3" />
                  <span>Account</span>
                </button>
                
                <button className="w-full flex items-center px-3 py-3 text-left rounded-lg text-white/70 hover:bg-white/5">
                  <Shield className="w-5 h-5 mr-3" />
                  <span>Privacy & Security</span>
                </button>
                
                <button className="w-full flex items-center px-3 py-3 text-left rounded-lg text-white/70 hover:bg-white/5">
                  <Monitor className="w-5 h-5 mr-3" />
                  <span>Display & Theme</span>
                </button>
                
                <button className="w-full flex items-center px-3 py-3 text-left rounded-lg text-white/70 hover:bg-white/5">
                  <SettingsIcon className="w-5 h-5 mr-3" />
                  <span>Advanced Settings</span>
                </button>
              </nav>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="glass-morphism rounded-xl p-8">
              <h2 className="text-2xl font-serif mb-6">API Configuration</h2>
              
              <APIConfigTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {activeTab === 'claude' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Claude AI API</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Configure the Claude AI API for philosophical content generation and conversational avatars.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-white/80 text-sm block mb-2">API Key</label>
                        <input 
                          type="password"
                          value={claudeAPIKey}
                          onChange={(e) => setClaudeAPIKey(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                          placeholder="Enter your Claude AI API key"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${status.claudeAI ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                          <span className="text-sm text-white/70">
                            {status.claudeAI ? 'Connected' : 'Not Connected'}
                          </span>
                        </div>
                        
                        <button 
                          onClick={handleSaveClaudeAPI}
                          className="bg-drv-purple hover:bg-drv-purple/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        >
                          Save API Key
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'elevenlabs' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-1">ElevenLabs API</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Configure the ElevenLabs API for voice synthesis and avatar voice cloning.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-white/80 text-sm block mb-2">API Key</label>
                        <input 
                          type="password"
                          value={elevenLabsAPIKey}
                          onChange={(e) => setElevenLabsAPIKey(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                          placeholder="Enter your ElevenLabs API key"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${status.elevenLabs ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                          <span className="text-sm text-white/70">
                            {status.elevenLabs ? 'Connected' : 'Not Connected'}
                          </span>
                        </div>
                        
                        <button 
                          onClick={handleSaveElevenLabsAPI}
                          className="bg-drv-purple hover:bg-drv-purple/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        >
                          Save API Key
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'sentry' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Sentry Monitoring</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Configure Sentry for application monitoring, error tracking, and performance optimization.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-white/80 text-sm block mb-2">Sentry DSN</label>
                        <input 
                          type="password"
                          value={sentryDSN}
                          onChange={(e) => setSentryDSN(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                          placeholder="Enter your Sentry DSN"
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/80 text-sm block mb-2">Client ID</label>
                        <input 
                          type="password"
                          value={sentryClientId}
                          onChange={(e) => setSentryClientId(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                          placeholder="Enter your Sentry Client ID"
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/80 text-sm block mb-2">Client Secret</label>
                        <input 
                          type="password"
                          value={sentryClientSecret}
                          onChange={(e) => setSentryClientSecret(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                          placeholder="Enter your Sentry Client Secret"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${status.sentry ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                          <span className="text-sm text-white/70">
                            {status.sentry ? 'Connected' : 'Not Connected'}
                          </span>
                        </div>
                        
                        <button 
                          onClick={handleSaveSentryCredentials}
                          className="bg-drv-purple hover:bg-drv-purple/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                        >
                          Save Credentials
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
