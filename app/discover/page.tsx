"use client";

import { useState } from "react";
import Link from "next/link";
import DiscoverFilters from "../components/DiscoverFilters";
import MovieCard from "../components/MovieCard";

// Sample movie data
const sampleMovies = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    genres: ["Action", "Sci-Fi", "Thriller"],
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    id: 2,
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    duration: "2h 32m",
    genres: ["Action", "Crime", "Drama"],
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  // Add more sample movies as needed
];

interface FilterState {
  year: string;
  rating: string;
  duration: string;
  sortBy: string;
  category: string;
  searchQuery: string;
}

export default function Discover() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    year: "",
    rating: "",
    duration: "",
    sortBy: "",
    category: "",
    searchQuery: ""
  });

  const handleFavoriteClick = (movieId: number) => {
    setFavorites(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // Filter movies based on current filters
  const filteredMovies = sampleMovies.filter(movie => {
    if (filters.searchQuery && !movie.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.category && !movie.genres.includes(filters.category)) {
      return false;
    }
    if (filters.year && movie.year !== parseInt(filters.year)) {
      return false;
    }
    if (filters.rating && movie.rating < parseFloat(filters.rating)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold logo-text">
              FilmFolio
            </Link>
         
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DiscoverFilters onFilterChange={handleFilterChange} />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onFavoriteClick={handleFavoriteClick}
              isFavorite={favorites.includes(movie.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 