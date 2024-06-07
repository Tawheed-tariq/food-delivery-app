import React from 'react'
import { motion } from 'framer-motion'
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({review}) => {
    return(
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
    )
}

export default ReviewCard;