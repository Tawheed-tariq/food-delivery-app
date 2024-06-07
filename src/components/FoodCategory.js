import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const FoodCategory = ({category, index}) => {
    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/${category.toLowerCase()}`}
              className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition duration-300"
            >
              <img
                src={`https://source.unsplash.com/600x400/?${category}+food`}
                alt={category}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {category}
                </h2>
                <p className="text-gray-600 mt-2">
                  Explore our delicious {category.toLowerCase()} dishes.
                </p>
              </div>
            </Link>
          </motion.div>
    )
}

export default FoodCategory;