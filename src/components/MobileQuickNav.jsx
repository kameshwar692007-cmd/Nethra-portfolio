import React from 'react';
import { ShieldCheck, Newspaper, Compass, Mail, ArrowUp } from 'lucide-react';

export default function MobileQuickNav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Mobile quick navigation bar"
      className="md:hidden fixed bottom-3 inset-x-3 z-40 bg-[#141d30]/95 backdrop-blur-lg border-2 border-[#23304a] rounded-2xl p-1.5 shadow-2xl flex items-center justify-around text-[10px] font-bold text-slate-300"
    >
      <button
        onClick={() => scrollTo('patents')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform text-emerald-400 font-mono"
      >
        <ShieldCheck className="w-4 h-4" />
        <span>Patents (7)</span>
      </button>

      <button
        onClick={() => scrollTo('media')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Newspaper className="w-4 h-4 text-slate-400" />
        <span>Press (207)</span>
      </button>

      <button
        onClick={() => scrollTo('journey')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Compass className="w-4 h-4 text-slate-400" />
        <span>Journey</span>
      </button>

      <button
        onClick={() => scrollTo('contact')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Mail className="w-4 h-4 text-slate-400" />
        <span>Contact</span>
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 py-2 flex flex-col items-center justify-center text-slate-400 hover:text-white active:scale-95 transition-transform"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 text-emerald-400" />
        <span>Top</span>
      </button>
    </nav>
  );
}
