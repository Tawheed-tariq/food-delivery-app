import React from "react";
import { categories } from "../data/foodData";
import { motion } from "framer-motion";
import FoodCategory from "../components/FoodCategory";

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover the Flavors of Asia
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <FoodCategory
            category={category}
            index={index}
            key={category}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
