import React from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import ReactStars from "react-rating-stars-component";

const reviews = [
  { id: 1, name: "Aisha Sharma", rating: 5, text: "The biryani from Asian Bites is out of this world! It's like a flavor explosion in my mouth. Delivery was super quick too!" },
  { id: 2, name: "Kenji Nakamura", rating: 4, text: "I'm picky about my sushi, but their Sushi Platter is top-notch. Fresh fish, perfect rice. A little pricey, but worth it." },
  { id: 3, name: "Maria Rossi", rating: 5, text: "As an Italian, I can say their pasta is authentic! The Carbonara is creamy and delicious. Bravo!" },
  { id: 4, name: "Ravi Gupta", rating: 4, text: "The Rogan Josh is almost as good as my grandma's! Rich, flavorful, and the lamb is so tender. Will order again." },
  { id: 5, name: "Priya Kapoor", rating: 3, text: "The food is great, but sometimes the delivery is late. Still, their Palak Paneer is worth the wait!" },
  { id: 6, name: "James Thompson", rating: 5, text: "I tried their Pad Thai on a whim, and now I'm hooked! Perfect balance of sweet, sour, and savory." },
];

const Reviews = () => {
  const getAvatarUrl = (seed) => {
    const avatar = createAvatar(lorelei, {
      seed: seed,
      backgroundColor: ['ffdfbf', 'ffd5dc', 'e0ffcd', 'd5f6ff'],
    });
    return avatar.toDataUriSync();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Customers Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img src={getAvatarUrl(review.name)} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;