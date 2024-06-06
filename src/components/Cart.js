import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({ items, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    toast.success("Order placed successfully! Enjoy your meal!");
    items.forEach((item) => onRemove(item.id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Your Cart
      </h1>
      {items.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-700 mb-4">Your cart is empty.</p>
          <Link
            to="/indian"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-md hover:from-yellow-500 hover:to-orange-600 transition duration-300"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between mb-4 pb-4 border-b"
                initial={{
                  opacity: 0,
                  height: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginBottom: 16,
                  paddingBottom: 16,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-semibold">{item.name}</span>
                <div className="flex items-center">
                  <span className="mx-4 font-bold text-orange-500">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="text-xl font-bold mt-6 text-right text-gray-800">
            Total: ₹{total}
          </div>
          <div className="mt-8 text-right">
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
