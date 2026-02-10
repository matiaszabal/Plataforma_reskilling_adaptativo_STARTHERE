
import React from 'react';
import { Hypothesis } from '../types';

interface Props {
  hypothesis: Hypothesis;
}

const IconTarget = () => (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
);

const IconLink = () => (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
);

const IconSmile = () => (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
);

const IconGlobe = () => (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
);

const IconBarChart = () => (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14" />
);

const ICON_MAP: Record<string, React.ReactNode> = {
  'target': <IconTarget />,
  'link': <IconLink />,
  'smile': <IconSmile />,
  'globe': <IconGlobe />,
  'bar-chart': <IconBarChart />,
};

const HypothesisCard: React.FC<Props> = ({ hypothesis }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transformative': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case 'Critical': return 'bg-violet-50 text-violet-700 border-violet-100';
      default: return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {ICON_MAP[hypothesis.icon] || <IconTarget />}
          </svg>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-lg border uppercase tracking-wider ${getImpactColor(hypothesis.impact)}`}>
          {hypothesis.impact}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{hypothesis.title}</h3>
      <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-grow">
        {hypothesis.description}
      </p>
      
      <div className="bg-slate-50/80 p-3 rounded-xl mb-6">
        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Evidencia Experimental</p>
        <p className="text-xs text-slate-600 italic">"{hypothesis.findingDetail}"</p>
      </div>

      <div className="flex items-end justify-between pt-4 border-t border-slate-50">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{hypothesis.keyMetric}</p>
          <p className="text-3xl font-black text-slate-900">{hypothesis.metricValue}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
            <svg className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default HypothesisCard;
