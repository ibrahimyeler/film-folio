import { useState } from 'react';
import { Star, SlidersHorizontal, Search } from 'lucide-react';

interface FilterState {
  year: string;
  rating: string;
  duration: string;
  sortBy: string;
  category: string;
  searchQuery: string;
}

export default function DiscoverFilters({ onFilterChange }: { onFilterChange: (filters: FilterState) => void }) {
  const [filters, setFilters] = useState<FilterState>({
    year: 'Any Year',
    rating: 'Any Rating',
    duration: 'Any Duration',
    sortBy: 'Popularity',
    category: 'All Movies',
    searchQuery: ''
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    'All Movies',
    'Action',
    'Drama',
    'Comedy',
    'Sci-Fi',
    'Horror',
    'Romance'
  ];

  return (
    <div className="space-y-4">
      {/* Search and Filter Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => document.getElementById('advanced-filters')?.classList.toggle('hidden')}
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-300">Filters</span>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex items-center space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              filters.category === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => handleFilterChange('category', category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      <div id="advanced-filters" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
              value={filters.year}
              onChange={(e) => handleFilterChange('year', e.target.value)}
            >
              <option>Any Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
            >
              <option>Any Rating</option>
              <option>8+ Stars</option>
              <option>7+ Stars</option>
              <option>6+ Stars</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option>Any Duration</option>
              <option>Under 90 min</option>
              <option>90-120 min</option>
              <option>Over 120 min</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sort By</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option>Popularity</option>
              <option>Rating</option>
              <option>Release Date</option>
              <option>Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 