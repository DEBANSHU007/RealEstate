import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  onDelete: (id: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onDelete(category.id)}
            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Added on {category.createdAt.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;