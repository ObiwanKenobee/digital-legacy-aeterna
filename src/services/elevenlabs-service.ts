
import { toast } from "sonner";

// ElevenLabs API integration
export class ElevenLabsService {
  private static baseUrl = "https://api.elevenlabs.io/v1";
  private static apiKey = ""; // API key should be provided by user or stored securely

  // Voice IDs for default voices
  private static voices = {
    aria: "9BWtsMINqrJLrRacOk9x",
    roger: "CwhRBWXzGAHq8TQ4Fs17",
    sarah: "EXAVITQu4vr4xnSDxMaL"
  };

  // Initialize with API key
  static initialize(apiKey: string) {
    this.apiKey = apiKey;
    console.log("ElevenLabs service initialized");
    return this;
  }

  // Get available voices
  static async getVoices(): Promise<any[]> {
    try {
      if (!this.apiKey) {
        throw new Error("ElevenLabs API key not set");
      }

      const response = await fetch(`${this.baseUrl}/voices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": this.apiKey
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch voices");
      }

      const data = await response.json();
      return data.voices || [];
    } catch (error) {
      console.error("ElevenLabs error:", error);
      toast.error("Failed to fetch available voices");
      return [];
    }
  }

  // Convert text to speech
  static async textToSpeech(text: string, voiceId: string = this.voices.aria): Promise<string> {
    try {
      if (!this.apiKey) {
        throw new Error("ElevenLabs API key not set");
      }

      const response = await fetch(`${this.baseUrl}/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": this.apiKey
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate speech");
      }

      // Convert the audio blob to a URL
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      return audioUrl;
    } catch (error) {
      console.error("ElevenLabs speech generation error:", error);
      toast.error("Failed to generate speech");
      return "";
    }
  }

  // Clone voice from audio sample
  static async cloneVoice(name: string, audioSample: Blob): Promise<string> {
    try {
      if (!this.apiKey) {
        throw new Error("ElevenLabs API key not set");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("files", audioSample);
      formData.append("description", "AI avatar voice clone");

      const response = await fetch(`${this.baseUrl}/voices/add`, {
        method: "POST",
        headers: {
          "xi-api-key": this.apiKey
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to clone voice");
      }

      const data = await response.json();
      toast.success("Voice successfully cloned");
      return data.voice_id;
    } catch (error) {
      console.error("ElevenLabs voice cloning error:", error);
      toast.error("Failed to clone voice");
      return "";
    }
  }
}
