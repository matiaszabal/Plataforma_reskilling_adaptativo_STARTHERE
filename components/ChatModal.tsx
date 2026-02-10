
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola, soy el Asistente Estratégico de Sancor Salud AI-First. ¿En qué puedo ayudarte hoy sobre la implementación de IA Adaptativa en tu organización?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Ref to persist the chat session for multi-turn robustness
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize or get the chat session
  const getChatSession = () => {
    if (chatSessionRef.current) return chatSessionRef.current;
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Eres un Consultor Senior de Estrategia EdTech en Sancor Salud AI-First. 
        Tu base de conocimiento es el estudio científico "AI-Driven EdTech Innovations for Workforce Reskilling" (HRM-26880).
        
        REGLAS DE INTERACCIÓN:
        1. Responde de forma EJECUTIVA, PERSUASIVA y ESTRATÉGICA.
        2. Usa Markdown para mejorar la legibilidad:
           - Usa **negritas** para conceptos clave.
           - Usa listas con viñetas para enumerar beneficios.
           - Usa saltos de línea para separar ideas.
        3. Siempre vincula los beneficios de la IA con el ROI del negocio (ahorro de tiempo del 45%, retorno de 3.7x).
        4. Defiende el Aprendizaje Adaptativo sobre la personalización estática.
        5. Si el usuario pregunta por la propuesta, destaca que Sancor Salud AI-First transforma el aprendizaje corporativo en plataformas inteligentes de desarrollo de talento de alto rendimiento.`,
      },
    });
    chatSessionRef.current = chat;
    return chat;
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (!isOpen) return null;

  // Robust Markdown-ish renderer
  const renderMessageContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle Bullet points
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Handle Bold
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-bold text-indigo-900">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={i} className="flex gap-2 ml-2 mt-1">
            <span className="text-indigo-500">•</span>
            <span className="flex-1">{content}</span>
          </div>
        );
      }

      return (
        <p key={i} className={`${i > 0 ? 'mt-2' : ''} leading-relaxed`}>
          {content}
        </p>
      );
    });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "Lo siento, no pude procesar esa consulta. ¿Podrías reformularla?";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Hubo un error al conectar con el motor estratégico. Por favor, revisa tu conexión e intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-end p-4 md:p-8 pointer-events-none">
      <div className="w-full max-w-md h-[650px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] border border-slate-100 flex flex-col pointer-events-auto animate-fadeIn overflow-hidden">
        
        {/* Header - Premium Design */}
        <div className="p-6 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 text-white shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-wider">Consultor Estratégico</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-indigo-100 font-bold opacity-80 uppercase tracking-tighter">AI Sancor Salud Activa</p>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              <div className={`max-w-[88%] p-4 rounded-2xl text-sm shadow-sm transition-all ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-slate-200'
              }`}>
                {msg.role === 'model' ? renderMessageContent(msg.text) : msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IA Analizando...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input - Improved Visibility & States */}
        <div className="p-6 bg-white border-t border-slate-100 shrink-0">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
              placeholder={isLoading ? "Procesando respuesta..." : "Escribe tu consulta estratégica..."}
              className={`w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-base font-medium text-slate-900 placeholder-slate-400 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none pr-16 transition-all shadow-inner ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer shadow-lg shadow-indigo-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Propulsado por Gemini 3 Flash
            </p>
            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Datos Sancor Salud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;