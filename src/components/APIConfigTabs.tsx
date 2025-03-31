
import React from 'react';
import { useAPI } from '../context/APIContext';
import { toast } from 'sonner';

interface APIConfigTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const APIConfigTabs: React.FC<APIConfigTabsProps> = ({ activeTab, setActiveTab }) => {
  const { status } = useAPI();
  
  const tabs = [
    { id: 'claude', label: 'Claude AI', status: status.claudeAI },
    { id: 'elevenlabs', label: 'ElevenLabs', status: status.elevenLabs },
    { id: 'sentry', label: 'Sentry', status: status.sentry }
  ];
  
  return (
    <div className="flex flex-wrap border-b border-white/10 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-6 py-3 text-sm font-medium relative ${
            activeTab === tab.id 
              ? 'text-white' 
              : 'text-white/60 hover:text-white/90'
          } transition-colors`}
          onClick={() => setActiveTab(tab.id)}
        >
          <div className="flex items-center">
            {tab.label}
            {tab.status && (
              <div className="ml-2 w-2 h-2 rounded-full bg-green-500"></div>
            )}
          </div>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-drv-purple"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default APIConfigTabs;
