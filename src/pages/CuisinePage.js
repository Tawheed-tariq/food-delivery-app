import React from 'react';
import FoodItem from '../components/FoodItem';
import { foodItems } from '../data/foodData';

const CuisinePage = ({ cuisine, addToCart }) => {
  const cuisineItems = foodItems.filter(item => item.cuisine === cuisine);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 capitalize">{cuisine} Cuisine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cuisineItems.map(item => (
          <FoodItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default CuisinePage;