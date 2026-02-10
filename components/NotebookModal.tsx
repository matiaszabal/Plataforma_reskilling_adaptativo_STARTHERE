
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NotebookModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  const notebookUrl = "https://notebooklm.google.com/notebook/fe72f1a5-fc54-474b-9809-7883ad230501?artifactId=f9582378-33b5-4f5b-b81b-e0f77189a484";

  const handleLaunchVideo = () => {
    setShowPlayer(true);
    setIsLoading(true);
  };

  const handleBackToBriefing = () => {
    setShowPlayer(false);
  };

  const handleModalClose = () => {
    setShowPlayer(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl animate-fadeIn">
      <div className={`bg-white w-full ${showPlayer ? 'max-w-6xl h-[90vh]' : 'max-w-2xl'} rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/20 transition-all duration-500 ease-in-out`}>
        
        {/* Header Dinámico */}
        <div className={`p-6 bg-gradient-to-br from-indigo-600 to-violet-800 text-white relative shrink-0`}>
          <div className="absolute top-0 right-0 p-4 flex gap-2">
            {showPlayer && (
              <button 
                onClick={handleBackToBriefing} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Volver
              </button>
            )}
            <button onClick={handleModalClose} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div className={`flex items-center gap-4 ${showPlayer ? 'justify-start' : 'flex-col items-center text-center'}`}>
            <div className={`${showPlayer ? 'w-10 h-10' : 'w-16 h-16 mb-2'} bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 transition-all`}>
              <svg className={`${showPlayer ? 'w-5 h-5' : 'w-8 h-8'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </div>
            <div>
              <h2 className={`${showPlayer ? 'text-xl' : 'text-3xl'} font-black tracking-tight transition-all`}>Simulación de Upskilling</h2>
              <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Deep Dive con Inteligencia Artificial</p>
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1 relative overflow-hidden bg-white">
          {!showPlayer ? (
            /* Vista 1: Briefing Center */
            <div className="p-10 space-y-8 animate-fadeIn">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <span className="text-indigo-600 font-black">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">El Dilema de las Habilidades</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">¿Se capacita su equipo para las habilidades de ayer o para el mercado de 2026? Análisis de brecha talento-tecnología.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                    <span className="text-violet-600 font-black">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Ciclo de Aprendizaje Vivo</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Simulación de cómo los agentes de IA actualizan currículas en tiempo real sin intervención humana.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-xs text-slate-400 font-bold uppercase mb-2 tracking-widest text-center">Acceso a Simulación de Impacto</p>
                <p className="text-xs text-slate-500 leading-relaxed text-center">
                  Esta simulación auditiva y visual demuestra el retorno del 3.7x por cada dólar invertido en IA generativa aplicada a la educación corporativa.
                </p>
              </div>

              <button 
                onClick={handleLaunchVideo}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 group cursor-pointer"
              >
                INICIAR SIMULACIÓN ESTRATÉGICA
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </button>
            </div>
          ) : (
            /* Vista 2: Integración del Reproductor */
            <div className="w-full h-full bg-slate-900 flex flex-col">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
                  <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest animate-pulse">Cargando Simulación Deep Dive...</p>
                </div>
              )}
              <iframe 
                src={notebookUrl}
                className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                title="Sancor Salud Strategic Simulation - Upskilling con IA"
                onLoad={() => setIsLoading(false)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
                allowFullScreen
              ></iframe>
              
              {/* Fallback button if Google blocks embed */}
              <div className="absolute bottom-4 right-4 z-20">
                <a 
                  href={notebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-lg font-bold border border-white/10 transition-all flex items-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir simulación en pestaña nueva
                </a>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-slate-50 text-center border-t border-slate-100 shrink-0">
           <p className="text-[10px] text-slate-400 font-medium tracking-tight">Sancor Salud AI-First Strategic Assets &bull; Confidencial &bull; &copy; 2025</p>
        </div>
      </div>
    </div>
  );
};

export default NotebookModal;