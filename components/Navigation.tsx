
import React from 'react';

interface NavigationProps {
  onOpenNotebook: () => void;
  onNavItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenNotebook, onNavItemClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavItemClick) onNavItemClick();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenNotebook = () => {
    if (onNavItemClick) onNavItemClick();
    onOpenNotebook();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 glass-panel z-50 px-8 flex items-center justify-between shadow-sm border-b border-slate-200/50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 leading-none">
            Sancor Salud AI-First
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            Reskilling Adaptativo con Impacto Estratégico
          </span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a 
          href="#dashboard" 
          onClick={(e) => scrollToSection(e, 'dashboard')}
          className="hover:text-indigo-600 transition-colors relative group"
        >
          Resultados
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </a>
        <a 
          href="#structural-model" 
          onClick={(e) => scrollToSection(e, 'structural-model')}
          className="hover:text-indigo-600 transition-colors relative group"
        >
          Impacto
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </a>
        <a 
          href="#hypotheses" 
          onClick={(e) => scrollToSection(e, 'hypotheses')}
          className="hover:text-indigo-600 transition-colors relative group"
        >
          Claves
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </a>
        <a 
          href="#demo" 
          onClick={(e) => scrollToSection(e, 'demo')}
          className="hover:text-indigo-600 transition-colors relative group"
        >
          Simulador
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </a>
        
        <button 
          onClick={handleOpenNotebook}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Simulación de Upskilling
        </button>
      </div>

      {/* Mobile Indicator */}
      <div className="lg:hidden">
        <button onClick={handleOpenNotebook} className="p-2 text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
