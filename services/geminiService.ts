
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client with named parameter apiKey from process.env.API_KEY
const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiService {
  async askLegalQuestion(question: string): Promise<string> {
    try {
      const ai = getClient();
      // Use gemini-3-pro-preview for complex reasoning tasks such as legal intelligence
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: question,
        config: {
          systemInstruction: "You are Yugality AI, a specialized legal assistant. Provide structured, accurate, and professional legal insights. Always conclude with a standard disclaimer that AI is not a substitute for professional legal advice from a qualified attorney.",
          temperature: 0.65,
          topP: 0.95,
        },
      });

      // Directly access response.text property to extract model's generated text
      if (!response.text) {
        throw new Error("Empty response from AI engine");
      }

      return response.text;
    } catch (error) {
      console.error("[GeminiService Error]:", error);
      // Propagate professional error for UI handling
      throw new Error("Unable to reach the legal intelligence engine. Please check your connection.");
    }
  }
}

export const geminiService = new GeminiService();
