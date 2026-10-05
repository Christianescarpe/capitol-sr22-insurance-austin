'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answerHtml: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  items,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
        <HelpCircle className="w-4 h-4" />
        <span>Got Questions?</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-amber-400 bg-amber-50/20 shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base sm:text-lg text-slate-900 pr-4">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base prose-content"
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
