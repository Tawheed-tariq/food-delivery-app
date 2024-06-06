import React from 'react';
import { toast } from 'react-toastify';

const FoodItem = ({ item, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(item);
    toast.success(`Added ${item.name} to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <img src={`https://source.unsplash.com/400x300/?${item.name}`} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-2 h-12">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-orange-500">₹{item.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md hover:from-yellow-500 hover:to-orange-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;