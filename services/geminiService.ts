
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTraditionalBlessing = async (name: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Buatkan satu kutipan doa atau harapan pernikahan tradisional Indonesia yang puitis dan mendalam untuk pasangan bernama Sekar dan Aditya. Tambahkan pesan khusus yang menyapa tamu bernama "${name}". Gunakan gaya bahasa formal namun hangat (krama inggil atau bahasa Indonesia baku yang indah). Maksimal 3 kalimat.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Menjadi pasangan yang saling melengkapi hingga akhir hayat.";
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "Semoga cinta kalian abadi seperti aksara yang terpahat di candi, kokoh dan indah sepanjang masa.";
  }
};
