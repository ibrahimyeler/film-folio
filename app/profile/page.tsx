import Image from "next/image";
import { Star, Heart, MessageCircle, Calendar, Clock, Settings, Edit2, Bookmark } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin</h1>
                  <p className="text-gray-500 dark:text-gray-400">@admin123</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Film enthusiast and movie critic. Love exploring different genres and sharing my thoughts with the community.
              </p>
              <div className="mt-4 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Joined January 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Last active 2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Movies Watched</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Bookmark className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reviews Written</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4.2</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lists Created</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((activity) => (
              <div key={activity} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-28 rounded-lg overflow-hidden">
                    <Image
                      src={`/movie-placeholder-${activity}.jpg`}
                      alt="Movie poster"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">Movie Title {activity}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2 days ago</span>
                    </div>
                    <div className="mt-1 flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">4.5</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Amazing movie! The visual effects and acting were incredible. Highly recommended for anyone who loves sci-fi.
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 