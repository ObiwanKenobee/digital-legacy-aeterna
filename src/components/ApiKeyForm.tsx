
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ClaudeAIService } from '@/services/claude-service';
import { ElevenLabsService } from '@/services/elevenlabs-service';
import { SentryService } from '@/services/sentry-service';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ApiKeys {
  claude?: string;
  elevenlabs?: string;
  sentryDsn?: string;
  sentryClientId?: string;
  sentryClientSecret?: string;
}

const ApiKeyForm = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeys>(() => {
    // Load any saved API keys from localStorage
    const savedKeys = localStorage.getItem('drv_api_keys');
    return savedKeys ? JSON.parse(savedKeys) : {};
  });
  
  const [activeTab, setActiveTab] = useState("claude");
  
  const tabs = ["claude", "elevenlabs", "sentry"];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiKeys(prev => ({ ...prev, [name]: value }));
  };

  const saveApiKeys = () => {
    // Save to localStorage
    localStorage.setItem('drv_api_keys', JSON.stringify(apiKeys));
    
    // Initialize services with the provided API keys
    if (apiKeys.claude) {
      ClaudeAIService.initialize(apiKeys.claude);
    }
    
    if (apiKeys.elevenlabs) {
      ElevenLabsService.initialize(apiKeys.elevenlabs);
    }
    
    if (apiKeys.sentryDsn && apiKeys.sentryClientId && apiKeys.sentryClientSecret) {
      SentryService.initialize(
        apiKeys.sentryDsn,
        apiKeys.sentryClientId,
        apiKeys.sentryClientSecret
      );
    }
    
    toast.success("API keys saved successfully");
  };
  
  const navigateTab = (direction: 'next' | 'prev') => {
    const currentIndex = tabs.indexOf(activeTab);
    if (direction === 'next' && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">
          <span className="text-gradient">API</span>
          <span className="text-gradient-gold ml-2">Configuration</span>
        </CardTitle>
        <CardDescription>
          Configure your API integrations for the Digital Renaissance Vault.
          Your keys are stored securely in your browser's local storage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="claude">Claude AI</TabsTrigger>
            <TabsTrigger value="elevenlabs">ElevenLabs</TabsTrigger>
            <TabsTrigger value="sentry">Sentry</TabsTrigger>
          </TabsList>
          
          <TabsContent value="claude" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Claude AI API Key</label>
              <Input
                name="claude"
                value={apiKeys.claude || ''}
                onChange={handleInputChange}
                placeholder="sk-ant-api..."
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Used for AI-powered content generation, philosophical insights, and digital avatars.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="elevenlabs" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">ElevenLabs API Key</label>
              <Input
                name="elevenlabs"
                value={apiKeys.elevenlabs || ''}
                onChange={handleInputChange}
                placeholder="sk_fc..."
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Required for voice synthesis, enabling your AI avatars to speak with lifelike voices.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="sentry" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sentry DSN</label>
              <Input
                name="sentryDsn"
                value={apiKeys.sentryDsn || ''}
                onChange={handleInputChange}
                placeholder="https://..."
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                The Data Source Name for your Sentry project.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sentry Client ID</label>
              <Input
                name="sentryClientId"
                value={apiKeys.sentryClientId || ''}
                onChange={handleInputChange}
                placeholder="33d6757bc7d8..."
                className="font-mono"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sentry Client Secret</label>
              <Input
                name="sentryClientSecret"
                value={apiKeys.sentryClientSecret || ''}
                onChange={handleInputChange}
                placeholder="32a80ce3a506..."
                className="font-mono"
                type="password"
              />
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => navigateTab('prev')}
            disabled={activeTab === tabs[0]}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigateTab('next')}
            disabled={activeTab === tabs[tabs.length - 1]}
            className="flex items-center"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-drv-purple to-drv-purple/80 hover:from-drv-purple/90 hover:to-drv-purple/70" onClick={saveApiKeys}>
          Save API Keys
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApiKeyForm;
