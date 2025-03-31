
import { toast } from "sonner";
import { ClaudeAIService } from "./claude-service";
import { ElevenLabsService } from "./elevenlabs-service";
import { SentryService } from "./sentry-service";

// API keys storage keys
const API_KEYS = {
  CLAUDE_AI: 'claude_api_key',
  ELEVEN_LABS: 'elevenlabs_api_key',
  SENTRY_DSN: 'sentry_dsn',
  SENTRY_CLIENT_ID: 'sentry_client_id',
  SENTRY_CLIENT_SECRET: 'sentry_client_secret'
};

// Service initialization status
interface ServicesStatus {
  claudeAI: boolean;
  elevenLabs: boolean;
  sentry: boolean;
}

export class APIService {
  private static servicesStatus: ServicesStatus = {
    claudeAI: false,
    elevenLabs: false,
    sentry: false
  };
  
  // Initialize all services from stored API keys
  static initializeAllServices(): ServicesStatus {
    this.initializeClaudeAI();
    this.initializeElevenLabs();
    this.initializeSentry();
    return this.servicesStatus;
  }
  
  // Initialize Claude AI service
  static initializeClaudeAI(): boolean {
    const apiKey = localStorage.getItem(API_KEYS.CLAUDE_AI);
    if (apiKey) {
      try {
        ClaudeAIService.initialize(apiKey);
        this.servicesStatus.claudeAI = true;
        return true;
      } catch (error) {
        console.error('Failed to initialize Claude AI:', error);
        toast.error('Failed to initialize Claude AI service');
      }
    }
    this.servicesStatus.claudeAI = false;
    return false;
  }
  
  // Initialize ElevenLabs service
  static initializeElevenLabs(): boolean {
    const apiKey = localStorage.getItem(API_KEYS.ELEVEN_LABS);
    if (apiKey) {
      try {
        ElevenLabsService.initialize(apiKey);
        this.servicesStatus.elevenLabs = true;
        return true;
      } catch (error) {
        console.error('Failed to initialize ElevenLabs:', error);
        toast.error('Failed to initialize ElevenLabs service');
      }
    }
    this.servicesStatus.elevenLabs = false;
    return false;
  }
  
  // Initialize Sentry service
  static initializeSentry(): boolean {
    const dsn = localStorage.getItem(API_KEYS.SENTRY_DSN);
    const clientId = localStorage.getItem(API_KEYS.SENTRY_CLIENT_ID);
    const clientSecret = localStorage.getItem(API_KEYS.SENTRY_CLIENT_SECRET);
    
    if (dsn && clientId && clientSecret) {
      try {
        SentryService.initialize(dsn, clientId, clientSecret);
        this.servicesStatus.sentry = true;
        return true;
      } catch (error) {
        console.error('Failed to initialize Sentry:', error);
        toast.error('Failed to initialize Sentry monitoring');
      }
    }
    this.servicesStatus.sentry = false;
    return false;
  }
  
  // Save Claude AI API key
  static saveClaudeAPIKey(apiKey: string): boolean {
    try {
      localStorage.setItem(API_KEYS.CLAUDE_AI, apiKey);
      return this.initializeClaudeAI();
    } catch (error) {
      console.error('Failed to save Claude AI API key:', error);
      toast.error('Failed to save Claude AI API key');
      return false;
    }
  }
  
  // Save ElevenLabs API key
  static saveElevenLabsAPIKey(apiKey: string): boolean {
    try {
      localStorage.setItem(API_KEYS.ELEVEN_LABS, apiKey);
      return this.initializeElevenLabs();
    } catch (error) {
      console.error('Failed to save ElevenLabs API key:', error);
      toast.error('Failed to save ElevenLabs API key');
      return false;
    }
  }
  
  // Save Sentry credentials
  static saveSentryCredentials(dsn: string, clientId: string, clientSecret: string): boolean {
    try {
      localStorage.setItem(API_KEYS.SENTRY_DSN, dsn);
      localStorage.setItem(API_KEYS.SENTRY_CLIENT_ID, clientId);
      localStorage.setItem(API_KEYS.SENTRY_CLIENT_SECRET, clientSecret);
      return this.initializeSentry();
    } catch (error) {
      console.error('Failed to save Sentry credentials:', error);
      toast.error('Failed to save Sentry credentials');
      return false;
    }
  }
  
  // Get service status
  static getServicesStatus(): ServicesStatus {
    return this.servicesStatus;
  }
  
  // Get specific API key
  static getAPIKey(service: keyof typeof API_KEYS): string | null {
    return localStorage.getItem(API_KEYS[service]);
  }
}

// Initialize services on load
APIService.initializeAllServices();
