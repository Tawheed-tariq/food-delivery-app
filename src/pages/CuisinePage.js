import React from 'react';
import FoodItem from '../components/FoodItem';
import { foodItems } from '../data/foodData';
import { motion } from 'framer-motion';

const CuisinePage = ({ cuisine, addToCart }) => {
  const cuisineItems = foodItems.filter(item => item.cuisine === cuisine);

  return (
    <div className="container mx-auto py-8">
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center text-gray-800 capitalize"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
          {cuisine} Cuisine
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cuisineItems.map((item, index) => (
          <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FoodItem  item={item} onAddToCart={addToCart} />
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CuisinePage;