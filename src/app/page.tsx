import React from 'react';
import { useSearch } from '../hooks/useSearch';
import { SearchForm } from '../components/features/SearchForm';
// ===========================
// MAIN HOMEPAGE COMPONENT
// ===========================
export default function Homepage() {
    const { searchState, updateQuery, updateFilter, performSearch } = useSearch();
  
    const handlePopularSearchSelect = (search: string) => {
      updateQuery(search);
    };
  
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <HeroSection />
          
          <SearchForm
            searchState={searchState}
            onQueryChange={updateQuery}
            onFilterChange={updateFilter}
            onSearch={performSearch}
          />
  
          <div className="grid md:grid-cols-2 gap-8">
            <PopularSearches onSearchSelect={handlePopularSearchSelect} />
            <RecentReports />
          </div>
        </div>
      </Layout>
    );
  }