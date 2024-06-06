import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/foodData';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Discover the Flavors of Asia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
          >
            <img src={`https://source.unsplash.com/600x400/?${category}+food`} alt={category} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{category}</h2>
              <p className="text-gray-600 mt-2">Explore our delicious {category.toLowerCase()} dishes.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;