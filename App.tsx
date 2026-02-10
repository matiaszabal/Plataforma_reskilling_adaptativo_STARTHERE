
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HypothesisCard from './components/HypothesisCard';
import ComparisonChart from './components/ComparisonChart';
import AISandbox from './components/AISandbox';
import StructuralModel from './components/StructuralModel';
import ExecutiveSummaryModal from './components/ExecutiveSummaryModal';
import ChatModal from './components/ChatModal';
import { HYPOTHESES } from './constants';
import { uiFeedback } from './services/uiFeedbackService';

const App: React.FC = () => {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToSection = (id: string) => {
    uiFeedback.playClick();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartMicroCourse = () => {
    uiFeedback.playClick();
    window.open('https://aistudio.google.com/apps/drive/10TtmryjTf2aZBl2TYX9tCSI_CznddPIO?fullscreenApplet=true&showPreview=true&showAssistant=true', '_blank');
  };

  const handleStartLab = () => {
    uiFeedback.playClick();
    window.open('https://ai.studio/apps/drive/1K9vYxqQr6gGi-n20UmL32gm4xIipKZET?fullscreenApplet=true', '_blank');
  };

  const handleOpenSimulation = () => {
    uiFeedback.playClick();
    window.open('https://notebooklm.google.com/notebook/fe72f1a5-fc54-474b-9809-7883ad230501?artifactId=9e160dde-fe5e-444f-b7bc-2c5ece04d389', '_blank');
  };

  const handleLaunchPoC = () => {
    uiFeedback.playSuccess();
    window.open('https://reskilling-adaptativo-poc-production.up.railway.app/', '_blank');
  };

  const handleLaunchAgentSimulation = () => {
    uiFeedback.playClick();
    window.open('https://ai.studio/apps/drive/1j9AaUp1sL2iT6b7FY8eAA0eWff-ZRwaz?fullscreenApplet=true', '_blank');
  };

  const toggleSummaryModal = (open: boolean) => {
    uiFeedback.playClick();
    setIsSummaryModalOpen(open);
  };

  const toggleChat = (open: boolean) => {
    uiFeedback.playClick();
    setIsChatOpen(open);
  };

  return (
    <div className="min-h-screen pb-20 bg-[#f8fafc]">
      <Navigation onOpenNotebook={handleOpenSimulation} onNavItemClick={() => uiFeedback.playClick()} />
      <ExecutiveSummaryModal isOpen={isSummaryModalOpen} onClose={() => toggleSummaryModal(false)} />
      <ChatModal isOpen={isChatOpen} onClose={() => toggleChat(false)} />
      
      {/* Botón flotante de Chat */}
      {!isChatOpen && (
        <button 
          onClick={() => toggleChat(true)}
          className="fixed bottom-8 right-8 z-[180] w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl shadow-indigo-400 flex items-center justify-center hover:scale-110 transition-all cursor-pointer group"
        >
          <div className="absolute -top-12 right-0 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¿Dudas sobre el modelo?
          </div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      <main className="max-w-7xl mx-auto px-8 pt-32">
        {/* Sección Hero */}
        <section className="mb-20 text-center lg:text-left lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold mb-6 tracking-widest uppercase">
              Propuesta Sancor Salud: Innovación EdTech 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
              El <span className="text-indigo-600">Aprendizaje Adaptativo</span> es el estándar de Sancor Salud en 2026
            </h1>
            <p className="text-xl lg:text-2xl font-bold text-slate-700 mb-6 leading-snug">
              Transforma la capacitación de ser un <span className="text-slate-400">"repositorio de videos"</span> a <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-100">una plataforma de inteligencia que garantiza competencias para el equipo.</span>
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed border-l-4 border-indigo-100 pl-6">
              Basado en el estudio <strong>HRM-26880</strong>: Cómo la IA adaptativa y la colaboración estratégica cierran la brecha de habilidades corporativas en el sector salud de manera escalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={handleLaunchPoC}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 text-center flex items-center justify-center gap-2 cursor-pointer animate-pulse hover:animate-none scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Lanzar PoC Reskilling
              </button>
              <button 
                onClick={handleLaunchAgentSimulation}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
                Lanzar Simulación de Agente
              </button>
              <button 
                onClick={() => toggleSummaryModal(true)}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Resumen Ejecutivo
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
              alt="Estrategia de Fuerza Laboral IA Sancor" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white object-cover aspect-video"
            />
          </div>
        </section>

        {/* Sección de Indicadores */}
        <section id="dashboard" className="mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Validación de Resultados</h2>
              <p className="text-slate-500">Comparativa directa para Sancor Salud: Modelos Tradicionales vs. IA Adaptativa.</p>
            </div>
          </div>
          <ComparisonChart />
        </section>

        {/* Mapa de Valor (SEM Simplificado) */}
        <section id="structural-model" className="mb-20 scroll-mt-24">
           <StructuralModel />
        </section>

        {/* Sección de Hipótesis/Conclusiones */}
        <section id="hypotheses" className="mb-20 scroll-mt-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">5 Conclusiones Clave para Sancor Salud</h2>
            <p className="text-slate-500 leading-relaxed">
              Dimensiones críticas para garantizar que la inversión en tecnología educativa se convierta en capacidades reales para nuestra organización.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HYPOTHESES.map(hyp => (
              <HypothesisCard key={hyp.id} hypothesis={hyp} />
            ))}
          </div>
        </section>

        {/* Simulador */}
        <section id="demo" className="scroll-mt-24">
          <AISandbox />
        </section>

        {/* Llamada a la acción final */}
        <section className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">¿Lideramos la transformación del talento en Salud?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Implementar este modelo asegura que Sancor Salud no solo sobreviva a la transformación digital, sino que la lidere con una fuerza laboral motivada y altamente capacitada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleStartMicroCourse}
                className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
              >
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Micro-curso personalizado
              </button>
              <button 
                onClick={handleStartLab}
                className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Laboratorio en entorno Simulado
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-20 py-12 border-t border-slate-200 text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a 
              href="https://hrmars.com/index.php/IJARBSS/article/view/22340/11252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              Ver Artículo Original (HRM-22340/26880)
            </a>
          </div>
          <p className="text-slate-500 text-xs">
            © 2025 Sancor Salud AI-First Strategy. Análisis Estratégico basado en la publicación científica "AI-Driven EdTech Innovations".
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
