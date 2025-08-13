import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface SearchState {
  query: string;
  filter: string;
  isLoading: boolean;
}

interface SearchFormProps {
  searchState: SearchState;
  onQueryChange: (query: string) => void;
  onFilterChange: (filter: string) => void;
  onSearch: () => void;
  className?: string;
}

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Fields' },
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'company', label: 'Company' },
];

export const SearchForm: React.FC<SearchFormProps> = ({
  searchState,
  onQueryChange,
  onFilterChange,
  onSearch,
  className = '',
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const selectedFilter = FILTER_OPTIONS.find(f => f.value === searchState.filter) || FILTER_OPTIONS[0];

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Card padding="lg" shadow="xl" className={className}>
      <div className="space-y-6">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Enter name, email, phone number, or company..."
            value={searchState.query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={searchState.isLoading}
            className="w-full pl-12 pr-4 py-4 text-lg border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors placeholder-slate-500"
          />
        </div>

        {/* Filter and Search Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Filter Dropdown */}
          <FilterDropdown
            options={FILTER_OPTIONS}
            selectedValue={searchState.filter}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
            onSelect={(value) => {
              onFilterChange(value);
              setIsFilterOpen(false);
            }}
          />

          {/* Search Button */}
          <Button
            onClick={onSearch}
            disabled={!searchState.query.trim() || searchState.isLoading}
            className="flex-1 sm:flex-none min-w-[120px] flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>{searchState.isLoading ? 'Searching...' : 'Search'}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Filter Dropdown Component
interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  options: FilterOption[];
  selectedValue: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  selectedValue,
  isOpen,
  onToggle,
  onSelect,
}) => {
  const selectedOption = options.find(opt => opt.value === selectedValue) || options[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center space-x-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-300 min-w-[160px]"
      >
        <span className="text-slate-700 font-medium">{selectedOption.label}</span>
        <svg
          className={`w-4 h-4 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors"
            >
              <span className="text-slate-700">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};