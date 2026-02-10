
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ExecutiveSummaryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-600 text-white">
          <h2 className="text-xl font-bold">Resumen Ejecutivo: Estrategia EdTech 2025</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div className="p-8 overflow-y-auto space-y-6 text-slate-700">
          <section>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Objetivo del Modelo</h3>
            <p className="text-sm leading-relaxed">
              El despliegue de IA en capacitación corporativa no debe verse como una simple automatización de contenidos, sino como un sistema de <strong>aprendizaje adaptativo</strong> que personaliza la ruta de cada colaborador en tiempo real.
            </p>
          </section>

          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-indigo-600 mb-2">Hallazgos Clave (Estudio HRM-26880)</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>ROI de Tiempo:</strong> Reducción del 45% en la curva de aprendizaje mediante sistemas adaptativos dinámicos.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Factor de Éxito:</strong> La colaboración Academia-Industria actúa como el principal mediador del éxito del reskilling.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Psicología del Usuario:</strong> Aumento del 68% en el engagement gracias al feedback instantáneo de la IA.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Hoja de Ruta para el CEO</h3>
            <ol className="list-decimal list-inside text-sm space-y-2 ml-2">
              <li><strong>Auditoría de Brecha:</strong> Identificar skills críticas por departamento.</li>
              <li><strong>Integración Adaptativa:</strong> Migrar de contenidos estáticos a plataformas con motor de IA dinámico.</li>
              <li><strong>Alianzas Estratégicas:</strong> Validar currículas con expertos del sector para asegurar pertinencia.</li>
            </ol>
          </section>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">
            Cerrar
          </button>
          <button className="px-6 py-2 text-sm font-bold bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">
            Descargar PDF Completo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryModal;
