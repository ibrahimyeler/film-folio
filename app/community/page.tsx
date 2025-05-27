import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, Star, Filter, Search, ThumbsUp } from "lucide-react";

export default function Community() {
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
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Creation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts about movies..."
                    className="w-full h-24 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-blue-500">
                        <Image src="/placeholder.jpg" alt="Add image" width={24} height={24} />
                      </button>
                      <button className="text-gray-500 hover:text-green-500">
                        <Star className="w-6 h-6" />
                      </button>
                    </div>
                    <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">User {post}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                          •••
                        </button>
                      </div>
                      <div className="mt-4 relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={`/movie-placeholder-${post}.jpg`}
                          alt="Movie poster"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-900 dark:text-white">Movie Title {post}</h4>
                        <div className="flex items-center mt-1 space-x-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">4.5</span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Just watched this amazing movie! The visual effects and acting were incredible. 
                          The storyline kept me engaged throughout the entire film. Highly recommended!
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-6">
                        <button className="flex items-center text-gray-500 hover:text-red-500">
                          <Heart className="w-5 h-5" />
                          <span className="ml-1 text-sm">24</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-blue-500">
                          <MessageCircle className="w-5 h-5" />
                          <span className="ml-1 text-sm">8</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="border-t border-gray-100 dark:border-gray-700 p-4">
                  <div className="space-y-4">
                    {[1, 2].map((comment) => (
                      <div key={comment} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Commenter {comment}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Great review! I completely agree with your points about the visual effects.
                          </p>
                          <div className="mt-2 flex items-center space-x-4">
                            <button className="flex items-center text-gray-500 hover:text-red-500">
                              <ThumbsUp className="w-4 h-4" />
                              <span className="ml-1 text-xs">5</span>
                            </button>
                            <button className="text-xs text-gray-500 hover:text-blue-500">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="text-blue-500 hover:text-blue-600 text-sm">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trending Topics</h2>
              <div className="space-y-4">
                {[
                  "Oscar Winners 2024",
                  "Marvel Cinematic Universe",
                  "Christopher Nolan",
                  "Animated Movies",
                  "Classic Films"
                ].map((topic) => (
                  <div key={topic} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{topic}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2.5k posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Users */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Users</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((user) => (
                  <div key={user} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">User {user}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Last active 5m ago</p>
                    </div>
                    <button className="ml-auto text-sm text-blue-500 hover:text-blue-600">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 