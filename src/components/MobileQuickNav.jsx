import React from 'react';
import { ShieldCheck, Newspaper, Compass, Mail, Code, ArrowUp } from 'lucide-react';

export default function MobileQuickNav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Mobile quick navigation dock"
      className="md:hidden fixed bottom-3 inset-x-3 z-40 bg-[#0d1017]/95 backdrop-blur-md border border-white/10 rounded-xl p-1.5 shadow-2xl flex items-center justify-around text-[10px] font-mono font-semibold text-slate-300"
    >
      <button
        onClick={() => scrollTo('patents')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform text-[#2f6bff] font-bold"
      >
        <ShieldCheck className="w-4 h-4 text-[#2f6bff]" />
        <span>Patents (07)</span>
      </button>

      <button
        onClick={() => scrollTo('trajectory')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Compass className="w-4 h-4 text-slate-400" />
        <span>Trajectory</span>
      </button>

      <button
        onClick={() => scrollTo('projects')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Code className="w-4 h-4 text-slate-400" />
        <span>Systems</span>
      </button>

      <button
        onClick={() => scrollTo('media')}
        className="flex-1 py-2 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:text-white"
      >
        <Newspaper className="w-4 h-4 text-slate-400" />
        <span>Press (207)</span>
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
        className="w-9 py-2 flex flex-col items-center justify-center text-slate-400 hover:text-white active:scale-95 transition-transform"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
        <span>Top</span>
      </button>
    </nav>
  );
}
