
import { toast } from "sonner";

// Claude AI API integration
export class ClaudeAIService {
  private static baseUrl = "https://api.anthropic.com/v1/messages";
  private static apiKey = ""; // API key should be provided by user or stored securely

  // Initialize with API key
  static initialize(apiKey: string) {
    this.apiKey = apiKey;
    console.log("Claude AI service initialized");
    return this;
  }

  // Generate philosophical content using Claude AI
  static async generatePhilosophicalContent(prompt: string): Promise<string> {
    try {
      if (!this.apiKey) {
        throw new Error("Claude AI API key not set");
      }

      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.apiKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-opus-20240229",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to generate content");
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error("Claude AI generation error:", error);
      toast.error("Failed to generate philosophical content");
      return "Error generating philosophical content. Please try again.";
    }
  }

  // Compare user insights with historical figures
  static async compareWithHistoricalFigure(userContent: string, historicalFigure: string): Promise<string> {
    const prompt = `Compare the following philosophical insight with the thinking of ${historicalFigure}:
    
    User's insight: "${userContent}"
    
    Provide a thoughtful comparison highlighting similarities and differences in philosophical approach.`;
    
    return this.generatePhilosophicalContent(prompt);
  }

  // Generate AI-powered legacy content
  static async generateLegacyContent(userContext: string, contentType: "wisdom" | "poetry" | "philosophy"): Promise<string> {
    let prompt = "";
    
    switch (contentType) {
      case "wisdom":
        prompt = `Based on this context about the person: "${userContext}", 
        generate a piece of timeless wisdom that reflects their thinking and values.`;
        break;
      case "poetry":
        prompt = `Based on this context about the person: "${userContext}", 
        compose a philosophical poem that captures their essence and worldview.`;
        break;
      case "philosophy":
        prompt = `Based on this context about the person: "${userContext}", 
        articulate a philosophical perspective or insight that aligns with their thinking.`;
        break;
    }
    
    return this.generatePhilosophicalContent(prompt);
  }
}
