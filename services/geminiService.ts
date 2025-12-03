import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'Lumi', a high-end hair stylist consultant for DoesntMatter Salon & Spa. 
Your goal is to help clients choose hairstyles, colors, and treatments based on their descriptions (face shape, hair texture, maintenance preference).
- Be polite, professional, and chic in your tone.
- Keep answers concise (under 100 words) unless asked for details.
- If a user decides on a style, encourage them to click the "Book Now" button on the website.
- You are knowledgeable about cuts (pixie, bob, layers), coloring (balayage, ombre, highlights), and hair health.
- Do not make up prices. Refer them to the "Services" section for pricing.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I'm having a bad hair day and couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently offline for a quick trim. Please try again later.";
  }
};