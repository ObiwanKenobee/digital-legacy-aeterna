
import React, { createContext, useContext, ReactNode } from 'react';
import { useAPIServices, APIServicesStatus } from '../hooks/useAPIServices';

interface APIContextType {
  status: APIServicesStatus;
  saveClaudeAPIKey: (apiKey: string) => boolean;
  saveElevenLabsAPIKey: (apiKey: string) => boolean;
  saveSentryCredentials: (dsn: string, clientId: string, clientSecret: string) => boolean;
}

const APIContext = createContext<APIContextType | undefined>(undefined);

export const APIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const apiServices = useAPIServices();
  
  return (
    <APIContext.Provider value={apiServices}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = (): APIContextType => {
  const context = useContext(APIContext);
  
  if (context === undefined) {
    throw new Error('useAPI must be used within an APIProvider');
  }
  
  return context;
};
