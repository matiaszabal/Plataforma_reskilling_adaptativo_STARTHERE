
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateSkillStrategy = async (industry: string, role: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Actúa como un Consultor Estratégico de EdTech basado en el paper "AI-Driven EdTech Innovations for Workforce Reskilling". 
    Analiza el impacto para el rol de "${role}" en "${industry}". 
    
    Genera un análisis que diferencie entre personalización estática y aprendizaje adaptativo dinámico, mencionando el rol mediador de la colaboración academia-industria.
    
    El análisis debe estar estructurado para un CEO, priorizando el ROI y la alineación estratégica.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          executiveSummary: { type: Type.STRING, description: "Breve resumen ejecutivo de la oportunidad" },
          strategicAlignment: { type: Type.STRING, description: "Cómo se alinea con los objetivos del negocio" },
          roiPoints: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Puntos clave de impacto en el ROI (ej. ahorro de tiempo, retención)"
          },
          keySkills: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Habilidades críticas detectadas"
          },
          projectedROI: { type: Type.STRING, description: "Cifra de ROI estimado o porcentaje" }
        },
        required: ["executiveSummary", "strategicAlignment", "roiPoints", "keySkills", "projectedROI"]
      }
    }
  });
  
  return JSON.parse(response.text);
};
