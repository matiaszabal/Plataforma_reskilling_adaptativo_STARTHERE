
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { COMPARISON_DATA } from '../constants';
import EdTech2026Modal from './EdTech2026Modal';

const ComparisonChart: React.FC = () => {
  const [showMetricInfo, setShowMetricInfo] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);

  // Extraer dato específico de Aplicación Real para el Spotlight
  const realApplicationMetric = COMPARISON_DATA.find(d => d.name === 'Aplicación Real');
  const improvement = realApplicationMetric 
    ? ((realApplicationMetric.aiEnabled - realApplicationMetric.traditional) / realApplicationMetric.traditional * 100).toFixed(0)
    : 0;

  return (
    <div className="space-y-8 mb-12">
      <EdTech2026Modal isOpen={isVisionModalOpen} onClose={() => setIsVisionModalOpen(false)} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de Barras: Comparativa General */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
            Impacto en el Proceso de Reskilling
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPARISON_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="top" align="right" height={36}/>
                <Bar name="Tradicional" dataKey="traditional" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar name="IA-Enabled" dataKey="aiEnabled" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Radar: Atributos del Modelo */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-violet-600 rounded-full"></span>
            Atributos del Modelo Adaptativo
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={COMPARISON_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="name" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                <Radar
                  name="IA-Enabled"
                  dataKey="aiEnabled"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Spotlight: Aplicación Real (Métrica Crítica para el CEO) */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-bold">Enfoque en Aplicación Real</h4>
                <div className="relative">
                  <button 
                    onClick={() => setShowMetricInfo(!showMetricInfo)}
                    className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold hover:bg-white/20 transition-all cursor-pointer"
                  >
                    i
                  </button>
                  {showMetricInfo && (
                    <div className="absolute left-full ml-2 top-0 w-64 p-3 bg-white text-slate-800 rounded-xl shadow-2xl z-20 text-xs leading-relaxed animate-fadeIn">
                      <p className="font-bold mb-1 text-indigo-600">Métrica de Transferencia:</p>
                      Mide la transferencia efectiva de conocimientos a tareas laborales prácticas, validada mediante simulaciones y KPIs de desempeño en el puesto de trabajo real.
                      <div className="absolute top-2 -left-1 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="text-indigo-100 leading-relaxed mb-6">
              La IA adaptativa no solo acelera la teoría; asegura que el conocimiento se traduzca en <strong>habilidades accionables</strong>. El modelo demuestra una transferencia directa superior al entorno de producción.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
               <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 flex-1 min-w-[140px]">
                  <p className="text-indigo-200 text-[10px] font-bold uppercase mb-1 tracking-wider">Modelo Tradicional</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black">{realApplicationMetric?.traditional}%</span>
                    <span className="text-[10px] text-indigo-300">Efectividad</span>
                  </div>
               </div>
               <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/20 flex-1 min-w-[140px]">
                  <p className="text-indigo-100 text-[10px] font-bold uppercase mb-1 tracking-wider">IA Adaptativa</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black">{realApplicationMetric?.aiEnabled}%</span>
                    <span className="text-[10px] text-indigo-100">Efectividad</span>
                  </div>
               </div>
            </div>

            <button 
              onClick={() => setIsVisionModalOpen(true)}
              className="group flex items-center gap-3 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg"
            >
               Explorar Visión EdTech 2026
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center bg-white/10 rounded-3xl p-6 border border-white/10 backdrop-blur-sm mt-8 md:mt-0 h-full">
            <div className="text-sm font-bold text-indigo-200 mb-2 uppercase tracking-widest">Incremento de Transferencia</div>
            <div className="text-6xl font-black text-white mb-2">+{improvement}%</div>
            <p className="text-xs text-indigo-200 font-medium px-4">
              Aumento porcentual en la capacidad de aplicar nuevos conocimientos en proyectos reales de la compañía.
            </p>
            <div className="mt-6 w-full h-2 bg-indigo-900/40 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-emerald-400 rounded-full" 
                 style={{ width: `${improvement}%` }}
               ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
