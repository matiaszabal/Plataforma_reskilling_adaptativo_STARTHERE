
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EdTech2026Modal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-violet-700 to-indigo-800 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-black leading-none uppercase tracking-tight">La Evolución EdTech 2026</h2>
              <p className="text-xs text-violet-100 opacity-80 mt-1 font-medium tracking-widest">ECOSISTEMAS ADAPTATIVOS & MENTORÍA CON IA</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              1. Introducción: La Transición Inevitable
            </h3>
            <p className="mb-4">
              Para el año 2026, el paradigma del mercado de la tecnología educativa (EdTech) ha completado una transición definitiva. El modelo tradicional, que funcionaba como una vasta "biblioteca de contenidos", ha evolucionado para convertirse en un <strong>ecosistema de aprendizaje adaptativo</strong>.
            </p>
            <p>
              El valor ya no reside en el curso en sí mismo, sino en la capacidad de la plataforma para garantizar la adquisición de competencias reales y aplicables en entornos seguros y controlados.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. El Ocaso del Contenido Estático: El Fin del "Curso Zombie"</h3>
            <p className="mb-6">
              El concepto de <strong>"Curso Zombie"</strong> —el tradicional curso asincrónico, pasivo y de talla única basado en extensos videos pregrabados— ha perdido su relevancia. Es sustituido por <strong>Trayectos Modulares Dinámicos</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-indigo-600 mb-2">Micro y Nano-learning</h4>
                <p className="text-sm">Módulos de 2 a 5 minutos actualizados semanalmente por agentes de IA que monitorean documentación técnica en tiempo real.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-indigo-600 mb-2">Contenido Sintético</h4>
                <p className="text-sm">Uso de avatares de IA y síntesis de voz para eliminar costos prohibitivos de regrabación y acelerar el tiempo de lanzamiento.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. El Surgimiento del Mentor de IA: Orquestador Pedagógico</h3>
            <p className="mb-6">
              El mentor de IA trasciende la función de un chatbot; actúa como un director de orquesta que convoca los instrumentos correctos en el momento preciso para cada estudiante.
            </p>
            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 font-bold text-slate-900">Componente</th>
                    <th className="p-4 font-bold text-slate-900">Función Estratégica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-bold text-indigo-600">Arquitectura RAG</td>
                    <td className="p-4">Garantiza respuestas basadas exclusivamente en la base de conocimiento institucional, citando fuentes verificadas.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-600">Andamiaje Cognitivo</td>
                    <td className="p-4">Utiliza tutoría socrática para guiar al alumno al razonamiento en lugar de entregar respuestas directas.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-600">Agentes Especializados</td>
                    <td className="p-4">Personalización del tono, dificultad y guía basándose en el historial detallado de progreso del usuario.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Laboratorios de Simulación: Aprender Haciendo a Escala</h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 text-white font-bold">1</div>
                <div>
                  <h4 className="font-bold text-emerald-900">Synthetic Sandboxes</h4>
                  <p className="text-sm text-emerald-800">Clonación de entornos empresariales reales para prácticas seguras (Ej. simulación de ciberataques).</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 text-white font-bold">2</div>
                <div>
                  <h4 className="font-bold text-blue-900">Roleplay con Agentes de IA</h4>
                  <p className="text-sm text-blue-800">Escalamiento de Soft Skills: Negociación, liderazgo y resolución de conflictos evaluados por IA en tiempo real.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-violet-50 rounded-2xl border border-violet-100">
                <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center shrink-0 text-white font-bold">3</div>
                <div>
                  <h4 className="font-bold text-violet-900">Feedback de Ciclo Corto</h4>
                  <p className="text-sm text-violet-800">Análisis de arquitectura o revisiones de código en segundos, acelerando el ROI para clientes B2B.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 & 6 (Combined Summary) */}
          <section className="border-t border-slate-100 pt-10">
             <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">5. El Imperativo Ético</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2"><span className="text-indigo-600 font-bold">✓</span> Privacidad de Datos (FERPA/GDPR Compliance)</li>
                    <li className="flex gap-2"><span className="text-indigo-600 font-bold">✓</span> Mitigación de Sesgo Algorítmico</li>
                    <li className="flex gap-2"><span className="text-indigo-600 font-bold">✓</span> Ciberseguridad proactiva</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4">6. Referentes Globales</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Khan Academy', 'Udacity', '360Learning', 'Whatfix Mirror', 'Minerva University'].map(brand => (
                      <span key={brand} className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 border border-slate-200 uppercase tracking-tighter">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
          </section>

          {/* Conclusion */}
          <section className="bg-indigo-900 text-white p-8 rounded-3xl">
             <h3 className="text-xl font-bold mb-4">7. Conclusión: Implicaciones Estratégicas</h3>
             <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
               La transición hacia ecosistemas adaptativos es una realidad competitiva ineludible. Las instituciones que no adopten este paradigma corren el riesgo de volverse irrelevantes frente a un mercado que premia la garantía de competencias sobre el catálogo de contenidos.
             </p>
             <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-white/10 p-4 rounded-xl flex-1 border border-white/10">
                   <p className="font-bold text-white mb-1">Eficiencia de Costos</p>
                   <p className="text-xs text-indigo-200">Escalamiento masivo sin aumento proporcional de nómina humana.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex-1 border border-white/10">
                   <p className="font-bold text-white mb-1">Diferenciación B2B</p>
                   <p className="text-xs text-indigo-200">Venta de laboratorios de simulación prácticos y seguros.</p>
                </div>
             </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
          >
            Entendido, volver al Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdTech2026Modal;
