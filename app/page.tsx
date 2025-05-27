import Image from "next/image";
import { Star, Heart, MessageCircle, User, Search, Bell, Clock, Calendar, ThumbsUp, Share2, Bookmark } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FilmFolio</h1>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Discover</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">My Lists</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Community</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Movie */}
        <div className="mb-8">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/featured-movie.jpg"
              alt="Featured movie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Featured Movie</h2>
                <p className="text-gray-200 mb-4">Director: Christopher Nolan</p>
                <div className="flex items-center space-x-4">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100">
                    Watch
                  </button>
                  <button className="bg-black/50 text-white px-6 py-2 rounded-full font-medium hover:bg-black/70">
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending Movies Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Trending Movies</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  This Week
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  This Month
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((movie) => (
                <div key={movie} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={`/movie-placeholder-${movie}.jpg`}
                      alt="Movie poster"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                        <Bookmark className="w-4 h-4 text-white" />
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
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Movie description will appear here. This section will be limited to two lines and will be truncated if longer.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Activity Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((activity) => (
                  <div key={activity} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-900 dark:text-white">
                          <span className="font-medium">User {activity}</span> reviewed a movie
                        </p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
                      </div>
                      <div className="mt-1 flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="ml-1 text-xs text-gray-600 dark:text-gray-300">4.5</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Movie Title</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        Amazing movie! The visual effects and acting were incredible...
                      </p>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-red-500">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="ml-1 text-xs">12</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-blue-500">
                          <MessageCircle className="w-4 h-4" />
                          <span className="ml-1 text-xs">3</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Lists Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Lists</h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Create New List
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Favorites", count: 24, icon: Heart },
              { title: "Watchlist", count: 15, icon: Clock },
              { title: "Watched 2024", count: 8, icon: Calendar },
              { title: "Best of All Time", count: 12, icon: Star }
            ].map((list) => (
              <div key={list.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">{list.title}</h3>
                  <list.icon className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{list.count} movies</p>
                <div className="mt-4 flex -space-x-2">
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
            ))}
          </div>
        </div>

        {/* Social Feed */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Social Feed</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Following
              </button>
              <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                Popular
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">User {post}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        •••
                      </button>
                    </div>
                    <div className="mt-2 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={`/movie-placeholder-${post}.jpg`}
                        alt="Movie poster"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Just watched an amazing movie! The visual effects and acting were incredible. Highly recommended!
                    </p>
                    <div className="mt-3 flex items-center space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-red-500">
                        <Heart className="w-4 h-4" />
                        <span className="ml-1 text-sm">24</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="ml-1 text-sm">8</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="text-blue-500 hover:text-blue-600">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
