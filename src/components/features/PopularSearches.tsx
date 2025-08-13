import React from 'react';
import { Card } from '../ui/Card';

interface PopularSearchesProps {
  searches?: string[];
  onSearchSelect: (search: string) => void;
  className?: string;
}

export const PopularSearches: React.FC<PopularSearchesProps> = ({
  searches = [
    'Fake tech support calls',
    'Romance scam profiles',
    'Investment fraud schemes',
    'Phishing emails',
    'Crypto scam websites',
    'Job interview scams',
    'Online shopping fraud',
    'Tax refund scams',
  ],
  onSearchSelect,
  className = '',
}) => {
  return (
    <Card className={className}>
      <div className="flex items-center mb-4">
        <div className="w-5 h-5 bg-blue-100 rounded mr-2 flex items-center justify-center">
          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Popular Searches</h3>
      </div>
      
      <div className="space-y-2">
        {searches.map((search, index) => (
          <PopularSearchItem
            key={index}
            search={search}
            onClick={() => onSearchSelect(search)}
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          Click on any search term to quickly find related scammer reports
        </p>
      </div>
    </Card>
  );
};

// Individual Popular Search Item
interface PopularSearchItemProps {
  search: string;
  onClick: () => void;
}

const PopularSearchItem: React.FC<PopularSearchItemProps> = ({
  search,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full text-left px-3 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
    >
      <span className="flex-1">{search}</span>
      <svg 
        className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};