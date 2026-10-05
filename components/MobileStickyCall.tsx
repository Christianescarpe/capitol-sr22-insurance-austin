import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileStickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 lg:hidden shadow-2xl">
      <a
        href="tel:+17373094205"
        className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-[#f5c32c] hover:bg-[#eab308] text-slate-900 font-extrabold shadow-md active:scale-95 transition-transform text-sm sm:text-base"
        aria-label="Call (737) 309-4205"
      >
        <span className="p-1 rounded-full bg-slate-900/10">
          <Phone className="w-4 h-4 text-slate-900 fill-slate-900" />
        </span>
        <span>Call Now: (737) 309-4205</span>
      </a>
    </div>
  );
}
