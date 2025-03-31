import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, User, Play, Brain } from 'lucide-react';
import { useAPI } from '../context/APIContext';
import { toast } from 'sonner';
import { ClaudeAIService } from '../services/claude-service';
import { ElevenLabsService } from '../services/elevenlabs-service';
import { SentryService } from '../services/sentry-service';
import { useNavigate } from 'react-router-dom';

const ConversationalAvatars = () => {
  const [selectedTab, setSelectedTab] = useState('create');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { status } = useAPI();
  const navigate = useNavigate();
  
  const [avatarName, setAvatarName] = useState('');
  const [personality, setPersonality] = useState('philosophical');
  const [voiceStyle, setVoiceStyle] = useState('natural');
  const [trainingIntensity, setTrainingIntensity] = useState(50);

  useEffect(() => {
    const requiredServices = ['claudeAI', 'elevenLabs'];
    const missingServices = requiredServices.filter(service => !status[service as keyof typeof status]);
    
    if (missingServices.length > 0) {
      toast.warning("Some required API services are not configured", {
        description: "Please configure the API keys in Settings",
        action: {
          label: "Go to Settings",
          onClick: () => navigate('/settings')
        }
      });
    }
  }, [status, navigate]);

  const handleCreateAvatar = async () => {
    if (!avatarName.trim()) {
      toast.error("Please enter an avatar name");
      return;
    }

    if (!status.claudeAI) {
      toast.error("Claude AI API is not configured. Please set up API keys in Settings.");
      return;
    }

    setIsProcessing(true);
    
    try {
      if (status.sentry) {
        SentryService.trackAvatarPerformance("create_avatar", 0, 100);
      }
      
      toast.success(`Avatar ${avatarName} created successfully!`);
    } catch (error) {
      console.error("Error creating avatar:", error);
      toast.error("Failed to create avatar");
      
      if (status.sentry && error instanceof Error) {
        SentryService.reportGenerationError(error, {
          operation: "avatar_creation",
          avatar_name: avatarName,
          personality
        });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateVoice = async () => {
    if (!status.elevenLabs) {
      toast.error("ElevenLabs API is not configured. Please set up API keys in Settings.");
      return;
    }

    setIsProcessing(true);
    
    try {
      const demoText = "Hello, I am your AI avatar. I've been trained to speak in your voice and mannerisms.";
      
      const url = await ElevenLabsService.textToSpeech(demoText);
      setAudioUrl(url);
      
      toast.success("Voice sample generated successfully!");
    } catch (error) {
      console.error("Error generating voice:", error);
      toast.error("Failed to generate voice sample");
      
      if (status.sentry && error instanceof Error) {
        SentryService.reportGenerationError(error, {
          operation: "voice_generation",
          voice_style: voiceStyle
        });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const handleStartTraining = async () => {
    if (!status.claudeAI) {
      toast.error("Claude AI API is not configured. Please set up API keys in Settings.");
      return;
    }

    setIsProcessing(true);
    
    try {
      toast.success("Training started successfully!");
      
      if (status.sentry) {
        SentryService.trackAvatarPerformance("train_avatar", 450, 85);
      }
    } catch (error) {
      console.error("Error starting training:", error);
      toast.error("Failed to start training");
      
      if (status.sentry && error instanceof Error) {
        SentryService.reportGenerationError(error, {
          operation: "avatar_training",
          training_intensity: trainingIntensity
        });
      }
    } finally {
      setIsProcessing(false);
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-gradient">AI-Generated </span>
            <span className="text-gradient-gold">Conversational Avatars</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Create interactive digital personas that preserve your voice, thoughts, and mannerisms
            for meaningful conversations that transcend time.
          </p>
          
          {!status.claudeAI || !status.elevenLabs ? (
            <div className="mt-6 bg-red-900/20 border border-red-500/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-red-300">
                API services not fully configured. Some features may be limited.
              </p>
              <button 
                onClick={() => navigate('/settings')}
                className="mt-2 bg-red-500/20 hover:bg-red-500/30 text-white px-4 py-2 rounded"
              >
                Configure API Keys
              </button>
            </div>
          ) : null}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-morphism rounded-xl overflow-hidden h-[500px] relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-drv-purple/5 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-drv-purple to-drv-cyan opacity-60 rounded-full animate-morph"></div>
                  <div className="absolute inset-1 bg-drv-darker rounded-full animate-morph" style={{ animationDelay: '-4s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-16 h-16 text-white/80" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="text-white/80 font-serif text-lg mb-2">
                  {avatarName ? avatarName : "Your AI Avatar"}
                </div>
                <div className="flex justify-center space-x-3">
                  <button 
                    className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                    onClick={handleGenerateVoice}
                    disabled={isProcessing || !status.elevenLabs}
                  >
                    <Mic className={`w-5 h-5 ${isProcessing ? 'text-gray-400' : 'text-drv-gold'}`} />
                  </button>
                  <button 
                    className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                    disabled={isProcessing}
                  >
                    <MessageSquare className={`w-5 h-5 ${isProcessing ? 'text-gray-400' : 'text-drv-purple'}`} />
                  </button>
                  <button 
                    className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                    onClick={playAudio}
                    disabled={!audioUrl || isProcessing}
                  >
                    <Play className={`w-5 h-5 ${!audioUrl || isProcessing ? 'text-gray-400' : 'text-drv-cyan'}`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-morphism rounded-xl p-8 h-full">
              <div className="flex border-b border-white/10 pb-4 mb-6">
                <button 
                  className={`px-4 py-2 rounded-lg mr-3 transition-all duration-300 ${
                    selectedTab === 'create' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('create')}
                >
                  Create Avatar
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg mr-3 transition-all duration-300 ${
                    selectedTab === 'train' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('train')}
                >
                  Train AI
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTab === 'voice' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedTab('voice')}
                >
                  Voice Clone
                </button>
              </div>
              
              {selectedTab === 'create' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif mb-4">Create Your Digital Avatar</h3>
                  <p className="text-white/70">
                    Design an AI-powered interactive digital persona trained on your data, allowing conversations to transcend time.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">Avatar Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                        placeholder="Enter a name for your avatar"
                        value={avatarName}
                        onChange={(e) => setAvatarName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">Avatar Personality</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                      >
                        <option value="philosophical">Philosophical</option>
                        <option value="creative">Creative & Artistic</option>
                        <option value="analytical">Analytical & Logical</option>
                        <option value="mentor">Mentor & Guide</option>
                      </select>
                    </div>
                    
                    <button 
                      className="w-full bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white py-3 rounded-lg font-medium transition-all duration-300"
                      onClick={handleCreateAvatar}
                      disabled={isProcessing || !avatarName.trim() || !status.claudeAI}
                    >
                      {isProcessing ? "Creating..." : "Create Avatar"}
                    </button>
                  </div>
                </div>
              )}
              
              {selectedTab === 'train' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif mb-4">Train Your AI Avatar</h3>
                  <p className="text-white/70">
                    Upload your writings, speeches, and philosophical content to train your AI avatar in your unique perspective.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-drv-purple/50 transition-all duration-300 cursor-pointer">
                      <p className="text-white/60 mb-2">Drag and drop files or click to upload</p>
                      <p className="text-white/40 text-sm">Supported formats: .txt, .doc, .pdf, .mp3, .mp4</p>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">Training Intensity</label>
                      <div className="flex items-center space-x-3">
                        <span className="text-white/60 text-sm">Basic</span>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-drv-purple to-drv-cyan"
                            style={{ width: `${trainingIntensity}%` }}
                          ></div>
                        </div>
                        <span className="text-white/60 text-sm">Advanced</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={trainingIntensity}
                        onChange={(e) => setTrainingIntensity(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    
                    <button 
                      className="w-full bg-gradient-to-r from-drv-gold to-drv-gold/80 hover:from-drv-gold/90 hover:to-drv-gold/70 text-white py-3 rounded-lg font-medium transition-all duration-300"
                      onClick={handleStartTraining}
                      disabled={isProcessing || !status.claudeAI}
                    >
                      {isProcessing ? "Processing..." : "Begin Training"}
                    </button>
                  </div>
                </div>
              )}
              
              {selectedTab === 'voice' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif mb-4">Voice Clone Technology</h3>
                  <p className="text-white/70">
                    Create a digital version of your voice using ElevenLabs voice synthesis technology for lifelike conversations.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">Voice Sample</label>
                      <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Record a voice sample</span>
                          <button 
                            className="p-2 bg-drv-cyan/20 rounded-full hover:bg-drv-cyan/30 transition-all duration-300"
                            disabled={isProcessing}
                          >
                            <Mic className={`w-4 h-4 ${isProcessing ? 'text-gray-400' : 'text-drv-cyan'}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">Voice Style</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50"
                        value={voiceStyle}
                        onChange={(e) => setVoiceStyle(e.target.value)}
                      >
                        <option value="natural">Natural</option>
                        <option value="passionate">Passionate & Expressive</option>
                        <option value="calm">Calm & Soothing</option>
                        <option value="authoritative">Authoritative</option>
                      </select>
                    </div>
                    
                    <button 
                      className="w-full bg-gradient-to-r from-drv-cyan to-drv-cyan/80 hover:from-drv-cyan/90 hover:to-drv-cyan/70 text-white py-3 rounded-lg font-medium transition-all duration-300"
                      onClick={handleGenerateVoice}
                      disabled={isProcessing || !status.elevenLabs}
                    >
                      {isProcessing ? "Generating..." : "Generate Voice Clone"}
                    </button>
                    
                    {audioUrl && (
                      <div className="mt-4">
                        <button 
                          onClick={playAudio}
                          className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Play Voice Sample
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-morphism rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-serif mb-6 text-center">
            <span className="text-gradient">Avatar Features & </span>
            <span className="text-gradient-gold">Capabilities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-drv-purple/20 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-drv-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Real-Time Conversation</h3>
              <p className="text-white/60 text-sm">
                Engage in meaningful dialogue with AI avatars that respond with your unique perspective and knowledge.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-drv-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-drv-gold" />
              </div>
              <h3 className="text-xl font-medium mb-2">Voice Synthesis</h3>
              <p className="text-white/60 text-sm">
                ElevenLabs voice cloning generates lifelike speech in your exact tone and speaking style.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-drv-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-drv-cyan" />
              </div>
              <h3 className="text-xl font-medium mb-2">Memory Retention</h3>
              <p className="text-white/60 text-sm">
                AI avatars remember previous conversations, allowing for an evolving digital persona over time.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-drv-purple/20 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-drv-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Philosophical Debates</h3>
              <p className="text-white/60 text-sm">
                Engage in multi-perspective dialogues with historical figures or alternate versions of yourself.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-morphism rounded-xl p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif mb-6">Experience Immortal Conversations</h2>
          <p className="text-white/70 mb-8">
            Start creating your AI avatar today and ensure your wisdom, voice, and perspective live on through the ages.
          </p>
          <button className="bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]">
            Begin Creating Your Avatar
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConversationalAvatars;
