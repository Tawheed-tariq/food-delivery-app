import React from 'react';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/constants';


const Reviews = () => {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Customers Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;