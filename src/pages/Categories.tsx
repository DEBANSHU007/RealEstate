import React, { useState } from 'react';
import CategoryForm from '../components/CategoryForm';
import CategoryGrid from '../components/category/CategoryGrid';
import type { Category } from '../types';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddCategory = (categoryData: Omit<Category, 'id' | 'createdAt'> & { customId: string }) => {
    const newCategory: Category = {
      ...categoryData,
      id: categoryData.customId,
      createdAt: new Date(),
    };
    setCategories([newCategory, ...categories]);
    setShowForm(false);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Categories</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add New Category'}
        </button>
      </div>

      {showForm && (
        <div className="mb-6">
          <CategoryForm onSubmit={handleAddCategory} />
        </div>
      )}

      <CategoryGrid
        categories={categories}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
};

export default Categories;