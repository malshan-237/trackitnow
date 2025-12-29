import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production app, you might proxy this through a backend to keep the key secret,
// but for this client-side demo, we use the env variable directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the helpful AI support assistant for "TrackItNow", a smart vehicle tracking system.
Your goal is to answer visitor questions about the product based on the following information:

Product: TrackItNow
Core Function: Real-time GPS tracking, theft prevention, and intelligent monitoring for vehicles and assets.
Key Benefits: Real-Time Tracking, Anti-Theft Alerts (SMS/App), Geo-Fencing, Cloud Dashboard.
Hardware: Uses ESP32, GPS module, GSM module.
Use Cases: Personal Vehicle Security, Fleet Management, Rental Tracking, Logistics.

Tone: Professional, helpful, concise, and enthusiastic about vehicle security.
If asked about pricing, mention that custom quotes are available via the Contact page.
If asked about technical details, explain the GPS/GSM data flow simply.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};
