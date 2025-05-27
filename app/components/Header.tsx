"use client";

import Link from "next/link";
import { User, Search, Bell } from "lucide-react";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProfileClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-bold logo-text">
                FilmFolio
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/discover" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Discover
                </Link>
                <Link href="/lists" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">My Lists</Link>
                <Link href="/community" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Community</Link>
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
              <Link 
                href="/profile" 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={handleProfileClick}
              >
                <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
} 