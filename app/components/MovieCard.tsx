import Image from "next/image";
import { Star } from "lucide-react";

interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  imageUrl: string;
  onFavoriteClick: (id: number) => void;
  isFavorite: boolean;
}

export default function MovieCard({
  id,
  title,
  rating,
  year,
  duration,
  genres,
  imageUrl,
  onFavoriteClick,
  isFavorite
}: MovieCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <button 
            className="p-2 bg-black/50 rounded-full hover:bg-black/70"
            onClick={() => onFavoriteClick(id)}
          >
            <Star className={`w-4 h-4 ${isFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-white'}`} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        <div className="flex items-center mt-2 space-x-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{rating}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{duration}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {genres.map((genre) => (
            <span 
              key={genre}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 