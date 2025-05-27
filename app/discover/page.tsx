import Image from "next/image";
import Link from "next/link";
import { Star, SlidersHorizontal, Search } from "lucide-react";

export default function Discover() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Search and Filters */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-3xl font-bold logo-text">
                  FilmFolio
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Discover</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">Filters</span>
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Filter Categories */}
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 whitespace-nowrap">
                All Movies
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Action
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Drama
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Comedy
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Sci-Fi
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Horror
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 whitespace-nowrap">
                Romance
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Advanced Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
              <select className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                <option>Any Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
              <select className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                <option>Any Rating</option>
                <option>8+ Stars</option>
                <option>7+ Stars</option>
                <option>6+ Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration</label>
              <select className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                <option>Any Duration</option>
                <option>Under 90 min</option>
                <option>90-120 min</option>
                <option>Over 120 min</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sort By</label>
              <select className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                <option>Popularity</option>
                <option>Rating</option>
                <option>Release Date</option>
                <option>Title</option>
              </select>
            </div>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((movie) => (
            <div key={movie} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src={`/movie-placeholder-${movie}.jpg`}
                  alt="Movie poster"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Star className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Movie Title {movie}</h3>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">4.5</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2h 15m</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    Action
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    Adventure
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              Previous
            </button>
            <button className="px-3 py-1 rounded-lg bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              2
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              3
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              Next
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
} 