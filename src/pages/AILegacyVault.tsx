
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAPI } from '../context/APIContext';
import { ClaudeAIService } from '../services/claude-service';
import { ElevenLabsService } from '../services/elevenlabs-service';
import { SentryService } from '../services/sentry-service';
import { toast } from 'sonner';
import APIStatusCheck from '../components/APIStatusCheck';
import { Book, FileText, Mic, Play, BookOpen, Bookmark } from 'lucide-react';

const AILegacyVault = () => {
  const { status } = useAPI();
  const [selectedContentType, setSelectedContentType] = useState<'wisdom' | 'poetry' | 'philosophy'>('wisdom');
  const [userContext, setUserContext] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [savedItems, setSavedItems] = useState<Array<{id: string, type: string, content: string}>>([]);
  
  // Generate content using Claude AI
  const handleGenerateContent = async () => {
    if (!userContext.trim()) {
      toast.error("Please enter some context about yourself");
      return;
    }
    
    if (!status.claudeAI) {
      toast.error("Claude AI API is not configured");
      return;
    }
    
    setIsGenerating(true);
    setGeneratedContent('');
    setAudioUrl(null);
    
    try {
      // Start performance monitoring
      const startTime = performance.now();
      
      // Generate content using Claude AI
      const content = await ClaudeAIService.generateLegacyContent(
        userContext, 
        selectedContentType
      );
      
      // End performance monitoring
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      // Track performance metrics if Sentry is available
      if (status.sentry) {
        SentryService.trackAvatarPerformance(
          "content_generation", 
          responseTime,
          95
        );
      }
      
      setGeneratedContent(content);
      toast.success("Content generated successfully");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content");
      
      if (status.sentry && error instanceof Error) {
        SentryService.reportGenerationError(error, {
          operation: "content_generation",
          content_type: selectedContentType,
          context_length: userContext.length
        });
      }
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Convert text to speech using ElevenLabs
  const handleTextToSpeech = async () => {
    if (!generatedContent.trim()) {
      toast.error("No content to convert to speech");
      return;
    }
    
    if (!status.elevenLabs) {
      toast.error("ElevenLabs API is not configured");
      return;
    }
    
    setIsConverting(true);
    
    try {
      // Start performance monitoring
      const startTime = performance.now();
      
      // Convert text to speech
      const url = await ElevenLabsService.textToSpeech(generatedContent);
      
      // End performance monitoring
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      // Track performance metrics if Sentry is available
      if (status.sentry) {
        SentryService.trackAvatarPerformance(
          "text_to_speech", 
          responseTime,
          90
        );
      }
      
      setAudioUrl(url);
      toast.success("Speech generated successfully");
    } catch (error) {
      console.error("Error converting to speech:", error);
      toast.error("Failed to convert text to speech");
      
      if (status.sentry && error instanceof Error) {
        SentryService.reportGenerationError(error, {
          operation: "text_to_speech",
          content_length: generatedContent.length
        });
      }
    } finally {
      setIsConverting(false);
    }
  };
  
  // Play generated audio
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };
  
  // Save generated content to vault
  const saveToVault = () => {
    if (!generatedContent.trim()) {
      toast.error("No content to save");
      return;
    }
    
    const newItem = {
      id: Date.now().toString(),
      type: selectedContentType,
      content: generatedContent
    };
    
    setSavedItems([...savedItems, newItem]);
    toast.success("Content saved to your legacy vault");
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
            <span className="text-gradient">AI Legacy </span>
            <span className="text-gradient-gold">Vault</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Preserve your wisdom, creativity, and philosophical insights for future generations
            using advanced AI content generation.
          </p>
        </motion.div>
        
        <APIStatusCheck requiredServices={['claudeAI', 'elevenLabs']} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-morphism rounded-xl p-8">
              <h2 className="text-2xl font-serif mb-6 text-center">Create Your Legacy</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-white/80 text-sm block mb-2">Content Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      className={`p-3 rounded-lg flex flex-col items-center border ${
                        selectedContentType === 'wisdom' 
                          ? 'bg-drv-purple/20 border-drv-purple/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      } transition-all duration-300`}
                      onClick={() => setSelectedContentType('wisdom')}
                    >
                      <Book className="w-5 h-5 mb-2" />
                      <span className="text-sm">Wisdom</span>
                    </button>
                    
                    <button
                      className={`p-3 rounded-lg flex flex-col items-center border ${
                        selectedContentType === 'poetry' 
                          ? 'bg-drv-purple/20 border-drv-purple/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      } transition-all duration-300`}
                      onClick={() => setSelectedContentType('poetry')}
                    >
                      <FileText className="w-5 h-5 mb-2" />
                      <span className="text-sm">Poetry</span>
                    </button>
                    
                    <button
                      className={`p-3 rounded-lg flex flex-col items-center border ${
                        selectedContentType === 'philosophy' 
                          ? 'bg-drv-purple/20 border-drv-purple/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      } transition-all duration-300`}
                      onClick={() => setSelectedContentType('philosophy')}
                    >
                      <BookOpen className="w-5 h-5 mb-2" />
                      <span className="text-sm">Philosophy</span>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-white/80 text-sm block mb-2">About You</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-drv-purple/50 min-h-[120px]"
                    placeholder="Share your thoughts, interests, values, or life experiences..."
                    value={userContext}
                    onChange={(e) => setUserContext(e.target.value)}
                  />
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white py-3 rounded-lg font-medium transition-all duration-300"
                  onClick={handleGenerateContent}
                  disabled={isGenerating || !status.claudeAI}
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </span>
                  ) : "Generate Content"}
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-morphism rounded-xl p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif">Your Legacy Content</h2>
                <div className="flex space-x-2">
                  <button
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
                    onClick={saveToVault}
                    disabled={!generatedContent}
                    title="Save to Vault"
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
                    onClick={handleTextToSpeech}
                    disabled={!generatedContent || isConverting || !status.elevenLabs}
                    title="Convert to Speech"
                  >
                    <Mic className={`w-5 h-5 ${isConverting ? 'animate-pulse' : ''}`} />
                  </button>
                  {audioUrl && (
                    <button
                      className="bg-drv-cyan/20 hover:bg-drv-cyan/30 p-2 rounded-lg transition-all duration-300"
                      onClick={playAudio}
                      title="Play Audio"
                    >
                      <Play className="w-5 h-5 text-drv-cyan" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 mb-4 overflow-y-auto">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-drv-purple animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-drv-purple animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-drv-purple animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <p className="text-white/50">Generating AI content...</p>
                  </div>
                ) : generatedContent ? (
                  <div className="whitespace-pre-line">{generatedContent}</div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-white/40">
                    <FileText className="w-10 h-10 mb-2 opacity-50" />
                    <p>Generated content will appear here</p>
                  </div>
                )}
              </div>
              
              {isConverting && (
                <div className="bg-drv-cyan/10 border border-drv-cyan/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <div className="flex space-x-2 mr-3">
                      <div className="w-2 h-2 rounded-full bg-drv-cyan animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-drv-cyan animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-drv-cyan animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <p className="text-sm text-drv-cyan">Converting text to speech...</p>
                  </div>
                </div>
              )}
              
              {savedItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3">Saved Items</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {savedItems.map(item => (
                      <div 
                        key={item.id}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 cursor-pointer transition-all"
                        onClick={() => setGeneratedContent(item.content)}
                      >
                        <div className="flex items-center">
                          {item.type === 'wisdom' && <Book className="w-4 h-4 mr-2 text-drv-gold" />}
                          {item.type === 'poetry' && <FileText className="w-4 h-4 mr-2 text-drv-purple" />}
                          {item.type === 'philosophy' && <BookOpen className="w-4 h-4 mr-2 text-drv-cyan" />}
                          <span className="text-sm truncate">{item.content.substring(0, 40)}...</span>
                        </div>
                      </div>
                    ))}
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

export default AILegacyVault;
