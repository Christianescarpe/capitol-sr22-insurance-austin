import React from 'react';
import { Phone } from 'lucide-react';

interface PhoneCTAButtonProps {
  label?: string;
  subtext?: string;
  variant?: 'primary' | 'navy' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  pulse?: boolean;
}

export default function PhoneCTAButton({
  label = 'Call (737) 309-4205',
  subtext,
  variant = 'primary',
  size = 'md',
  className = '',
  pulse = false,
}: PhoneCTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 group";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-2",
    md: "px-6 py-3 text-sm sm:text-base gap-2.5",
    lg: "px-8 py-4 text-base sm:text-lg gap-3",
  }[size];

  const variantClasses = {
    primary: "bg-[#f5c32c] hover:bg-[#eab308] text-slate-900 border border-amber-300 hover:border-amber-400",
    navy: "bg-[#0d1527] hover:bg-[#162544] text-white border border-slate-700 hover:border-amber-400",
    white: "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-amber-400",
    ghost: "bg-transparent text-white hover:bg-white/10 border border-white/30",
  }[variant];

  const pulseClass = pulse ? "phone-pulse" : "";

  return (
    <a
      href="tel:+17373094205"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${pulseClass} ${className}`}
      aria-label="Call Capitol SR22 Insurance Austin at (737) 309-4205"
    >
      <span className="p-1.5 rounded-full bg-slate-900/10 group-hover:scale-110 transition-transform">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
      </span>
      <span className="flex flex-col text-left">
        <span>{label}</span>
        {subtext && <span className="text-[10px] sm:text-xs font-normal opacity-85 leading-tight">{subtext}</span>}
      </span>
    </a>
  );
}
