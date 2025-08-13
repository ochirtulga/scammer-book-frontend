import React from 'react';
import { Layout, Container } from '../layout/Layout';
import { HeroSection } from './HeroSection';
import { SearchForm } from './SearchForm';
import { PopularSearches } from './PopularSearches';
import { RecentReports } from './RecentReports';
import { useSearch } from '../../hooks/useSearch';

interface HomepageProps {
  className?: string;
}

export const Homepage: React.FC<HomepageProps> = ({ className = '' }) => {
  const { searchState, updateQuery, updateFilter, performSearch } = useSearch();

  const handlePopularSearchSelect = (search: string) => {
    updateQuery(search);
  };

  const handleLogoClick = () => {
    // Reset search state when logo is clicked
    updateQuery('');
    updateFilter('all');
  };

  const handleReportClick = (report: any) => {
    console.log('Report clicked:', report);
    // TODO: Navigate to report details or show modal
  };

  return (
    <Layout onLogoClick={handleLogoClick} className={className}>
      <Container size="lg">
        <div className="py-20">
          {/* Hero Section */}
          <HeroSection className="mb-16" />
          
          {/* Search Form */}
          <SearchForm
            searchState={searchState}
            onQueryChange={updateQuery}
            onFilterChange={updateFilter}
            onSearch={performSearch}
            className="mb-12"
          />

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <PopularSearches onSearchSelect={handlePopularSearchSelect} />
            <RecentReports onReportClick={handleReportClick} />
          </div>

          {/* Additional Info Section */}
          <TrustIndicators className="mt-16" />
        </div>
      </Container>
    </Layout>
  );
};

// Trust Indicators Component
interface TrustIndicatorsProps {
  className?: string;
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ className = '' }) => {
  const stats = [
    { label: 'Scammers Identified', value: '50,000+', icon: '🛡️' },
    { label: 'Users Protected', value: '1M+', icon: '👥' },
    { label: 'Reports Verified', value: '25,000+', icon: '✅' },
    { label: 'Money Saved', value: '$10M+', icon: '💰' },
  ];

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Trusted by Communities Worldwide
        </h2>
        <p className="text-slate-600">
          Join millions of users who rely on ScamGuard to stay safe online
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Database Updated Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Verified Sources</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Trusted by:</span>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-slate-600">FBI</span>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-slate-600">FTC</span>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-slate-600">BBB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};