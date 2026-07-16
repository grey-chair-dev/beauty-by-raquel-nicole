'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface ServiceFilterProps {
  onFilterChange: (filters: FilterState) => void;
  activeFilters: FilterState;
}

export interface FilterState {
  category: string;
  priceRange: string;
  duration: string;
  search: string;
}

const ServiceFilter = ({ onFilterChange, activeFilters }: ServiceFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'color', name: 'Color & Highlights' },
    { id: 'extensions', name: 'Extensions' },
    { id: 'styling', name: 'Styling & Events' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: '0-50', name: 'Under $50' },
    { id: '51-100', name: '$51 - $100' },
    { id: '101-200', name: '$101 - $200' },
    { id: '201+', name: '$201+' },
  ];

  const durations = [
    { id: 'all', name: 'All Durations' },
    { id: 'quick', name: 'Quick (< 30 min)' },
    { id: 'standard', name: 'Standard (30-60 min)' },
    { id: 'extended', name: 'Extended (1hr+)' },
  ];

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    const newFilters = { ...activeFilters, [type]: value };
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: 'all',
      priceRange: 'all',
      duration: 'all',
      search: '',
    };
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(activeFilters).some(value => value !== 'all' && value !== '');

  return (
    <div className="mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary" aria-hidden />
          <h3 className="font-heading font-semibold text-on-surface">Filter Services</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-small text-primary hover:text-accentDark transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search services..."
          value={activeFilters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="form-input"
        />
      </div>

      {/* Filter Options */}
      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Categories */}
        <div>
          <label className="block text-small font-medium text-text mb-2">Service Type</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange('category', category.id)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-small font-semibold transition-colors ${
                  activeFilters.category === category.id ? 'filter-pill-active' : 'filter-pill-inactive'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-small font-medium text-text mb-2">Price Range</label>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handleFilterChange('priceRange', range.id)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-small font-semibold transition-colors ${
                  activeFilters.priceRange === range.id ? 'filter-pill-active' : 'filter-pill-inactive'
                }`}
              >
                {range.name}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-small font-medium text-text mb-2">Duration</label>
          <div className="flex flex-wrap gap-2">
            {durations.map((duration) => (
              <button
                key={duration.id}
                onClick={() => handleFilterChange('duration', duration.id)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-small font-semibold transition-colors ${
                  activeFilters.duration === duration.id ? 'filter-pill-active' : 'filter-pill-inactive'
                }`}
              >
                {duration.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Expand/Collapse */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 px-4 py-3 filter-pill-inactive rounded-xl font-semibold min-h-[44px]"
        >
          {isExpanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
    </div>
  );
};

export default ServiceFilter; 