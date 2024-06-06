import React from 'react';
import ReactStars from "react-rating-stars-component";
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: "Aisha Sharma", rating: 5, text: "The biryani from Asian Bites is out of this world! It's like a flavor explosion in my mouth. Delivery was super quick too!" },
  { id: 2, name: "Kenji Nakamura", rating: 4, text: "I'm picky about my sushi, but their Sushi Platter is top-notch. Fresh fish, perfect rice. A little pricey, but worth it." },
  { id: 3, name: "Maria Rossi", rating: 5, text: "As an Italian, I can say their pasta is authentic! The Carbonara is creamy and delicious. Bravo!" },
  { id: 4, name: "Ravi Gupta", rating: 4, text: "The Rogan Josh is almost as good as my grandma's! Rich, flavorful, and the lamb is so tender. Will order again." },
  { id: 5, name: "Priya Kapoor", rating: 3, text: "The food is great, but sometimes the delivery is late. Still, their Palak Paneer is worth the wait!" },
  { id: 6, name: "James Thompson", rating: 5, text: "I tried their Pad Thai on a whim, and now I'm hooked! Perfect balance of sweet, sour, and savory." },
];

const Reviews = () => {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Customers Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              {review.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
              <ReactStars
                count={5}
                value={review.rating}
                edit={false}
                size={20}
                activeColor="#fbbf24"
              />
            </div>
          </div>
          <p className="text-gray-700">{review.text}</p>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;