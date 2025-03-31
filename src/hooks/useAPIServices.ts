
import { useState, useEffect } from 'react';
import { APIService } from '../services/api-service';

export interface APIServicesStatus {
  claudeAI: boolean;
  elevenLabs: boolean;
  sentry: boolean;
}

export const useAPIServices = () => {
  const [status, setStatus] = useState<APIServicesStatus>(APIService.getServicesStatus());

  useEffect(() => {
    // Initialize services when the hook is first used
    const currentStatus = APIService.initializeAllServices();
    setStatus(currentStatus);
  }, []);

  const saveClaudeAPIKey = (apiKey: string) => {
    const success = APIService.saveClaudeAPIKey(apiKey);
    if (success) {
      setStatus(prev => ({ ...prev, claudeAI: true }));
    }
    return success;
  };

  const saveElevenLabsAPIKey = (apiKey: string) => {
    const success = APIService.saveElevenLabsAPIKey(apiKey);
    if (success) {
      setStatus(prev => ({ ...prev, elevenLabs: true }));
    }
    return success;
  };

  const saveSentryCredentials = (dsn: string, clientId: string, clientSecret: string) => {
    const success = APIService.saveSentryCredentials(dsn, clientId, clientSecret);
    if (success) {
      setStatus(prev => ({ ...prev, sentry: true }));
    }
    return success;
  };

  return {
    status,
    saveClaudeAPIKey,
    saveElevenLabsAPIKey,
    saveSentryCredentials
  };
};
