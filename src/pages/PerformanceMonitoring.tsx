
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Activity, Zap, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceMonitoring = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedTab, setSelectedTab] = useState('overview');
  
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
            <span className="text-gradient">Real-Time </span>
            <span className="text-gradient-gold">Performance Monitoring</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Track and optimize your AI legacy with advanced analytics, Sentry integration,
            and real-time performance monitoring.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-white/60">Avatar Response Time</CardDescription>
                <CardTitle className="text-2xl text-white">154ms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-400 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12% improvement
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-500" style={{ width: "75%" }}></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-white/60">AI Accuracy Score</CardDescription>
                <CardTitle className="text-2xl text-white">97.3%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-400 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  3.1% improvement
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drv-purple to-drv-purple/70" style={{ width: "97%" }}></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-white/60">Error Rate</CardDescription>
                <CardTitle className="text-2xl text-white">0.08%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-400 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  0.03% reduction
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drv-gold/70 to-drv-gold" style={{ width: "2%" }}></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardDescription className="text-white/60">Voice Synthesis Quality</CardDescription>
                <CardTitle className="text-2xl text-white">9.6/10</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-400 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  0.4 point improvement
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drv-cyan/70 to-drv-cyan" style={{ width: "96%" }}></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'overview' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setSelectedTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'ai' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setSelectedTab('ai')}
            >
              AI Performance
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedTab === 'errors' ? 'bg-drv-purple/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setSelectedTab('errors')}
            >
              Error Tracking
            </button>
          </div>
          
          <div className="flex bg-white/5 rounded-lg overflow-hidden">
            <button 
              className={`px-4 py-2 text-sm ${timeRange === 'day' ? 'bg-white/10 text-white' : 'text-white/60'}`}
              onClick={() => setTimeRange('day')}
            >
              Day
            </button>
            <button 
              className={`px-4 py-2 text-sm ${timeRange === 'week' ? 'bg-white/10 text-white' : 'text-white/60'}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={`px-4 py-2 text-sm ${timeRange === 'month' ? 'bg-white/10 text-white' : 'text-white/60'}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={`px-4 py-2 text-sm ${timeRange === 'year' ? 'bg-white/10 text-white' : 'text-white/60'}`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-morphism rounded-xl p-8 mb-10"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif mb-2">
                {selectedTab === 'overview' && 'Performance Overview'}
                {selectedTab === 'ai' && 'AI Model Metrics'}
                {selectedTab === 'errors' && 'Error Tracking & Resolution'}
              </h2>
              <p className="text-white/60">
                {selectedTab === 'overview' && 'Comprehensive view of your AI legacy system performance'}
                {selectedTab === 'ai' && 'Detailed analytics on AI accuracy and response times'}
                {selectedTab === 'errors' && 'Sentry-powered error monitoring and resolution status'}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-drv-purple mr-2"></div>
                <span className="text-white/60 text-sm">Response Time</span>
              </div>
              <div className="flex items-center ml-4">
                <div className="w-3 h-3 rounded-full bg-drv-gold mr-2"></div>
                <span className="text-white/60 text-sm">Accuracy</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 bg-white/5 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-white/10" />
              <p className="absolute text-white/40 text-sm">Performance Chart Visualization</p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500 lg:col-span-2"
          >
            <div className="flex items-start">
              <div className="w-14 h-14 bg-drv-purple/20 rounded-lg flex items-center justify-center mr-6">
                <Activity className="w-8 h-8 text-drv-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Sentry Integration</h3>
                <p className="text-white/70 mb-6">
                  Real-time error tracking and performance monitoring ensures your AI models, avatars, and vault interactions run flawlessly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Error Rate</span>
                      <span className="text-green-400 text-sm">0.08%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400" style={{ width: "0.8%" }}></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Issues Resolved</span>
                      <span className="text-drv-gold text-sm">98.7%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-drv-gold" style={{ width: "98.7%" }}></div>
                    </div>
                  </div>
                </div>
                <button className="bg-drv-purple/20 text-drv-purple hover:bg-drv-purple/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
                  View Detailed Logs
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-morphism rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-500"
          >
            <div className="w-14 h-14 bg-drv-gold/20 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-drv-gold" />
            </div>
            <h3 className="text-2xl font-serif mb-4">AI Optimization</h3>
            <p className="text-white/70 mb-6">
              Automatic self-learning AI enhancement continuously improves your avatar's performance based on monitored conversations.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Learning Rate</span>
                <div className="flex items-center">
                  <span className="text-drv-gold mr-2">High</span>
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-drv-gold" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Memory Depth</span>
                <div className="flex items-center">
                  <span className="text-drv-purple mr-2">Advanced</span>
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-drv-purple" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">AI Creativity</span>
                <div className="flex items-center">
                  <span className="text-drv-cyan mr-2">Medium</span>
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-drv-cyan" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-drv-gold/20 text-drv-gold hover:bg-drv-gold/30 transition-all duration-300 px-4 py-2 rounded-lg text-sm">
              Optimize AI Settings
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-morphism rounded-xl p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif mb-6">Enhance Your AI Legacy Performance</h2>
          <p className="text-white/70 mb-8">
            Unlock advanced monitoring capabilities and ensure your digital legacy performs flawlessly for generations to come.
          </p>
          <button className="bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.6)]">
            Upgrade Monitoring Suite
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;
