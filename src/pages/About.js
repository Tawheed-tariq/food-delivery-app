import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_r0b2njf', 'template_wojkgow', {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'tawheedtariq090@gmail.com',
    }, '65zomD0AwmoDIo_M_')
    .then(() => {
      toast.success('Thank you for your feedback!');
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      toast.error('Error sending message. Please try again.');
      console.log(error.text);
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">About Asian Bites</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 mb-4">
          Welcome to Asian Bites, your gateway to the vibrant and diverse flavors of Asia! Our passion is to bring the authentic tastes of India, Japan, Thailand, China, and beyond right to your doorstep. We believe that food is not just sustenance; it's an experience that connects people across cultures.
        </p>
        <p className="text-gray-700 mb-4">
          Our journey began in the bustling streets of Mumbai, the serene gardens of Kyoto, and the vibrant markets of Bangkok. We work directly with local chefs who have honed their craft through generations, ensuring that every dish you order is a true representation of its origin.
        </p>
        <p className="text-gray-700">
          Whether you're craving the rich, creamy textures of a North Indian curry, the delicate balance of a Japanese sushi platter, or the aromatic spices of a Thai stir-fry, Asian Bites has got you covered. We're more than just a food delivery service; we're your passport to Asia's culinary wonders.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">We'd Love to Hear from You!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name='from_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              name='from_email'
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
              name='message'
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-md hover:from-yellow-500 hover:to-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;