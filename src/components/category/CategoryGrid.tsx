import React from 'react';
import { Grid } from 'lucide-react';
import CategoryCard from './CategoryCard';
import type { Category } from '../../types';

interface CategoryGridProps {
  categories: Category[];
  onDelete: (id: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onDelete }) => {
  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <Grid className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">No categories yet</h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Get started by adding a new category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;