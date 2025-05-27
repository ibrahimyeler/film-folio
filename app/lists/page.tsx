import Link from "next/link";
import { Star, Heart, Clock, Calendar, Plus, Settings, Trash2, Edit2 } from "lucide-react";

export default function Lists() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-bold logo-text">
                FilmFolio
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Lists</h1>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
              <Plus className="w-5 h-5" />
              <span>Create New List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Default Lists */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Default Lists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Favorites", count: 24, icon: Heart, color: "bg-red-500" },
              { title: "Watchlist", count: 15, icon: Clock, color: "bg-blue-500" },
              { title: "Watched 2024", count: 8, icon: Calendar, color: "bg-green-500" },
              { title: "Best of All Time", count: 12, icon: Star, color: "bg-yellow-500" }
            ].map((list) => (
              <div key={list.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-2 ${list.color}`}></div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <list.icon className="w-5 h-5 text-gray-400" />
                      <h3 className="font-medium text-gray-900 dark:text-white">{list.title}</h3>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{list.count} movies</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700" />
                    ))}
                    {list.count > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-xs text-gray-600 dark:text-gray-300">+{list.count - 3}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Lists */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Custom Lists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Action Movies", count: 18, description: "Best action movies of all time" },
              { title: "Comedy Classics", count: 12, description: "Must-watch comedy movies" },
              { title: "Sci-Fi Collection", count: 15, description: "My favorite sci-fi movies" },
              { title: "Oscar Winners", count: 20, description: "Best picture winners" }
            ].map((list) => (
              <div key={list.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">{list.title}</h3>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{list.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{list.count} movies</p>
                    <Link href={`/lists/${list.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-blue-500 hover:text-blue-600">
                      View List
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Create Your First List</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Start organizing your favorite movies into custom lists
          </p>
          <button className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
            <Plus className="w-5 h-5" />
            <span>Create New List</span>
          </button>
        </div>
      </main>
    </div>
  );
} 