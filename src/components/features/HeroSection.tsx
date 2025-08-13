import React from 'react';

interface HeroSectionProps {
  title?: {
    word1: string;
    word2: string;
    word3: string;
  };
  subtitle?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = {
    word1: 'Find',
    word2: 'Out',
    word3: 'Truth'
  },
  subtitle = 'Search our comprehensive database to verify suspicious contacts and protect yourself from scams.',
  className = '',
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
        <span className="text-red-600">{title.word1}</span>{' '}
        <span className="text-slate-900">{title.word2}</span>{' '}
        <span className="text-slate-700">{title.word3}</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};