import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CuisinePage from './pages/CuisinePage';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar cartCount={cartItems.length} onSearch={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indian" element={<CuisinePage cuisine="indian" addToCart={addToCart} />} />
          <Route path="/japanese" element={<CuisinePage cuisine="japanese" addToCart={addToCart} />} />
          <Route path="/italian" element={<CuisinePage cuisine="italian" addToCart={addToCart} />} />
          <Route path="/thai" element={<CuisinePage cuisine="thai" addToCart={addToCart} />} />
          <Route path="/chinese" element={<CuisinePage cuisine="chinese" addToCart={addToCart} />} />
          <Route path="/korean" element={<CuisinePage cuisine="korean" addToCart={addToCart} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart items={cartItems} onRemove={removeFromCart} />} />
        </Routes>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
  </Router>
);
};

export default App;