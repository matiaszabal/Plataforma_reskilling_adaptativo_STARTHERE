
import React, { useState } from 'react';
import { generateSkillStrategy } from '../services/geminiService';
import { uiFeedback } from '../services/uiFeedbackService';

const AISandbox: React.FC = () => {
  const [industry, setIndustry] = useState('Fintech');
  const [role, setRole] = useState('Director Comercial');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    uiFeedback.playClick();
    setLoading(true);
    try {
      const data = await generateSkillStrategy(industry, role);
      setResult(data);
      uiFeedback.playSuccess();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="demo" className="bg-slate-900 text-white p-8 rounded-3xl mb-12 overflow-hidden relative border border-slate-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Simulador de Impacto IA</h2>
            <p className="text-slate-400 text-sm max-w-md">Calcule el retorno estratégico de implementar modelos de aprendizaje adaptativo en su organización.</p>
          </div>
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-3 group"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Analizando...</span>
              </>
            ) : (
              <>
                <span>Generar Informe de Valor</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Panel de Configuración */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50 space-y-6">
              <div>
                <label className="block text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-[0.2em]">Sector Industrial</label>
                <input 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  placeholder="Ej. Banca, Retail, Energía..."
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-[0.2em]">Perfil de Talento</label>
                <input 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  placeholder="Ej. Gerente de Proyecto..."
                />
              </div>
            </div>
            
            <div className="p-5 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
              <h4 className="text-[10px] font-bold text-indigo-300 uppercase mb-2">Respaldo Metodológico</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                Cálculos basados en el modelo SEM del estudio <strong>HRM-26880</strong>, priorizando la mediación industria-academia.
              </p>
            </div>
          </div>

          {/* Panel de Resultados Ejecutivos */}
          <div className="lg:col-span-8 bg-slate-800/20 rounded-3xl border border-slate-700/30 p-8 min-h-[400px] flex flex-col relative overflow-hidden">
            {!result && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-600 text-center animate-pulse">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-medium text-sm">Esperando configuración de parámetros...</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-6"></div>
                <div className="space-y-2 text-center">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Calculando Probabilidades</p>
                  <p className="text-slate-600 text-[10px]">Ajustando pesos de mediación logística...</p>
                </div>
              </div>
            )}

            {result && (
              <div className="animate-fadeIn space-y-8 h-full">
                {/* HERO ROI SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  <div className="md:col-span-5 bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl shadow-2xl shadow-indigo-900/40 flex flex-col justify-center">
                    <p className="text-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Retorno (ROI) Estimado</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">{result.projectedROI}</span>
                      <span className="text-indigo-200 font-bold text-sm">Proyectado</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-[11px] text-indigo-100/80 leading-snug">Basado en la reducción del 45% en tiempos de adaptación de habilidades críticas.</p>
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-slate-800/80 p-6 rounded-3xl border border-slate-700/50 flex flex-col justify-center">
                    <h4 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Valor Estratégico</h4>
                    <p className="text-lg font-bold text-slate-100 leading-snug">
                      {result.strategicAlignment}
                    </p>
                  </div>
                </div>

                {/* DETALLES DE IMPACTO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                      Resumen Ejecutivo
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-slate-700 pl-4">
                      "{result.executiveSummary}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                      Evidencia de ROI
                    </h4>
                    <ul className="space-y-3">
                      {result.roiPoints.map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          <p className="text-xs text-slate-400 leading-tight">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* SKILLS CHIPS */}
                <div className="pt-6 border-t border-slate-700/50 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-600 uppercase mr-2 tracking-widest">Foco de Talento:</span>
                  {result.keySkills.map((skill: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISandbox;
