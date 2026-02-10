
import React from 'react';

const StructuralModel: React.FC = () => {
  return (
    <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 mb-12 relative overflow-hidden group">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          Visualización de Causalidad Directa
        </div>
        <h3 className="text-4xl font-black text-slate-900 tracking-tight">Mapa de Impacto Estratégico</h3>
        <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
          Arquitectura del éxito organizacional basada en la mediación estratégica entre tecnología y negocio.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative z-10 px-4">
        
        {/* Nodo 1: Innovación */}
        <div className="w-full lg:w-[28%] group/node">
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-indigo-100 to-transparent hover:from-indigo-200 transition-all duration-500 shadow-sm hover:shadow-indigo-100 hover:shadow-xl">
            <div className="bg-white border border-indigo-50 p-8 rounded-[2.3rem] text-center">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200 group-hover/node:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest block mb-2">Fase 1: Input</span>
              <h4 className="font-black text-slate-900 text-xl leading-tight">Sistemas IA Adaptativos</h4>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Personalización dinámica basada en el desempeño cognitivo.</p>
            </div>
          </div>
        </div>

        {/* Conector 1: Flujo de Innovación a Mediación */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[8%] h-20">
          <div className="w-full h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
            <div className="absolute top-0 h-full w-full bg-indigo-400 animate-[flow_2s_linear_infinite]"></div>
          </div>
          <svg className="w-6 h-6 text-slate-200 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Nodo 2: EL MEDIADOR (Puente) */}
        <div className="w-full lg:w-[32%] relative group/mediator">
          {/* Efecto de resplandor para resaltar que es el componente CRÍTICO */}
          <div className="absolute inset-0 bg-violet-500/20 blur-[40px] rounded-full scale-75 animate-pulse"></div>
          
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-violet-600 to-indigo-800 shadow-2xl shadow-violet-200">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-8 lg:p-10 rounded-[2.3rem] text-center text-white border border-white/10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30 shadow-inner group-hover/mediator:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-violet-200 uppercase tracking-[0.25em] block mb-3">EL MEDIADOR CRÍTICO</span>
              <h4 className="font-black text-white text-2xl leading-none uppercase">Alianza Estratégica</h4>
              <p className="text-xs text-violet-100 mt-4 font-medium leading-relaxed opacity-90 italic">Alineación obligatoria entre currícula académica y necesidades de negocio.</p>
              
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[9px] font-bold">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                VALIDADOR DE ROI #1
              </div>
            </div>
          </div>
          
          {/* Indicadores de móvil */}
          <div className="h-10 w-px bg-gradient-to-b from-violet-600 to-transparent mx-auto lg:hidden"></div>
        </div>

        {/* Conector 2: Flujo de Mediación a Resultados */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[8%] h-20">
          <div className="w-full h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
            <div className="absolute top-0 h-full w-full bg-violet-400 animate-[flow_2s_linear_infinite_0.5s]"></div>
          </div>
          <svg className="w-6 h-6 text-slate-200 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Nodo 3: Resultados (Output) */}
        <div className="w-full lg:w-[28%] group/result">
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-emerald-100 to-transparent hover:from-emerald-200 transition-all duration-500">
            <div className="bg-white border border-emerald-50 p-8 rounded-[2.3rem] text-center">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100 group-hover/result:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">Fase 3: Output</span>
              <h4 className="font-black text-slate-900 text-xl leading-tight">Éxito en Reskilling</h4>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Fuerza laboral sostenible, inclusiva y preparada para el futuro.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cards de Profundidad con mejores iconos y diseño */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-slate-50/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-600">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cognición Optimizada</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            La IA reduce la <strong>carga cognitiva</strong>, eliminando la fatiga por sobreinformación y permitiendo ciclos de aprendizaje un 45% más cortos.
          </p>
        </div>

        <div className="bg-slate-50/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-600">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Alineación Organizacional</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            La mediación industria-academia no es un canal de comunicación; es el <strong>motor de relevancia</strong> que asegura que cada hora invertida tenga un impacto directo en el P&L.
          </p>
        </div>

        <div className="bg-slate-50/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center text-emerald-600">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14"/></svg>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confianza & Autonomía</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            El <strong>92% de los empleados</strong> alcanza niveles de confianza críticos tras 3 semanas, acelerando la toma de decisiones autónoma en sus nuevos roles.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default StructuralModel;
