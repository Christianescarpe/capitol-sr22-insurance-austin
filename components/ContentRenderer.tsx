import React from 'react';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export default function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  if (!content) return null;

  return (
    <div
      className={`prose-content max-w-none text-slate-700 ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
