
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const avatars = [
  { id: 'seneca', name: 'Seneca', specialty: 'Stoic philosophy and business advice' },
  { id: 'davinci', name: 'Da Vinci', specialty: 'Innovation and creative thinking' },
  { id: 'custom', name: 'Your Avatar', specialty: 'Your unique wisdom and perspective' }
];

const sampleQuestions = [
  "What is your approach to handling adversity?",
  "How should I think about legacy?",
  "What principles guide ethical decision-making?",
  "How do you balance ambition with contentment?"
];

const AvatarDemo = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [userQuestion, setUserQuestion] = useState('');
  const [conversation, setConversation] = useState<{role: string, content: string, avatar?: string}[]>([
    { 
      role: 'assistant', 
      content: 'I am Seneca, Roman Stoic philosopher. How may I assist you with matters of business, ethics, or life principles?',
      avatar: 'seneca'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleAvatarChange = (avatar: typeof avatars[0]) => {
    setSelectedAvatar(avatar);
    setConversation([
      { 
        role: 'assistant', 
        content: avatar.id === 'seneca' 
          ? 'I am Seneca, Roman Stoic philosopher. How may I assist you with matters of business, ethics, or life principles?'
          : avatar.id === 'davinci'
          ? 'I am Leonardo da Vinci. I can share insights on innovation, art, science, and the creative process.'
          : 'This is your personal AI avatar. Train it with your thoughts, ideas, and wisdom.',
        avatar: avatar.id
      }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    const newMessage = { role: 'user', content: userQuestion };
    setConversation(prev => [...prev, newMessage]);
    setUserQuestion('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (selectedAvatar.id === 'seneca') {
        response = "The key to resilience is focusing on what you can control. In business as in life, external events are beyond our influence, but our judgments about them are within our power. A wise leader prepares for adversity while not being consumed by its possibility.";
      } else if (selectedAvatar.id === 'davinci') {
        response = "Innovation emerges at the intersection of disciplines. Observe nature carefully, for it is the greatest teacher. Art and science are not separate realms but different expressions of the same curiosity about our world.";
      } else {
        response = "This is a simulation of your future AI avatar. With proper training, it would respond with your personal insights, wisdom, and thought patterns.";
      }

      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        avatar: selectedAvatar.id
      }]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSampleQuestion = (question: string) => {
    setUserQuestion(question);
  };

  return (
    <section id="avatar" className="relative min-h-screen bg-drv-darker py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-drv-cyan/30 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">
            <span className="text-gradient">AI-Powered</span> 
            <span className="text-gradient-gold ml-2">Digital Avatar</span>
          </h2>
          <p className="text-white/70">
            Experience a conversation with a philosophical AI avatar. This demo illustrates how your wisdom could be preserved and shared across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-morphism rounded-xl p-6 h-full">
              <h3 className="text-white font-serif text-xl mb-6">Choose an Avatar</h3>
              
              <div className="space-y-4 mb-8">
                {avatars.map((avatar) => (
                  <motion.div
                    key={avatar.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAvatarChange(avatar)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedAvatar.id === avatar.id 
                        ? 'bg-drv-purple/20 border border-drv-purple/50' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedAvatar.id === avatar.id ? 'bg-drv-purple/30' : 'bg-white/10'
                      }`}>
                        {avatar.id === 'seneca' && 'S'}
                        {avatar.id === 'davinci' && 'D'}
                        {avatar.id === 'custom' && 'Y'}
                      </div>
                      <div className="ml-3">
                        <div className="text-white font-medium">{avatar.name}</div>
                        <div className="text-white/60 text-sm">{avatar.specialty}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-white font-serif text-xl mb-4">Sample Questions</h3>
                <div className="space-y-2">
                  {sampleQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSampleQuestion(question)}
                      className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all border border-white/10 text-sm text-white/70"
                    >
                      {question}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-morphism rounded-xl overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 bg-black/30 border-b border-white/10 flex items-center">
                <div className="w-3 h-3 rounded-full bg-drv-purple mr-3"></div>
                <div className="text-white font-medium">Conversation with {selectedAvatar.name}</div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {conversation.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[80%] rounded-xl p-4 ${
                        message.role === 'user' 
                          ? 'bg-drv-purple/20 border border-drv-purple/30' 
                          : 'bg-white/10 border border-white/10'
                      }`}
                    >
                      {message.role === 'assistant' && message.avatar && (
                        <div className="mb-2 text-xs font-medium">
                          {message.avatar === 'seneca' && (
                            <span className="text-drv-gold">Seneca</span>
                          )}
                          {message.avatar === 'davinci' && (
                            <span className="text-drv-gold">Leonardo da Vinci</span>
                          )}
                          {message.avatar === 'custom' && (
                            <span className="text-drv-gold">Your AI Avatar</span>
                          )}
                        </div>
                      )}
                      <div className={`${message.role === 'assistant' ? 'text-white/90' : 'text-white'}`}>
                        {message.content}
                      </div>
                    </motion.div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 border border-white/10 rounded-xl p-4 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-drv-purple/50"
                    placeholder="Ask something..."
                  />
                  <button 
                    type="submit"
                    className="bg-drv-purple hover:bg-drv-purple/90 text-white rounded-r-lg px-6 py-3 transition-colors duration-300"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AvatarDemo;
