import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PriceGuessingGame = () => {
  // Page navigation state
  const [currentPage, setCurrentPage] = useState('search'); // 'search' or 'game'


  // State variables for the game
  const [selectedProduct, setSelectedProduct] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [actualPrices, setActualPrices] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // Mock product data to simulate API responses
  const mockProductData = {
    'Water Heater': [539, 419, 599],
    'Water Heater Repair Kit': [19.99, 24.99, 15.49],
    'Pipe Insulation': [5.99, 7.49, 6.49],
  };


  // Valid product categories
  const products = Object.keys(mockProductData);


  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFeedback('');
    setUserGuess('');
    fetchPrices(product);
  };


  // Function to simulate fetching prices from an API
  const fetchPrices = (product) => {
    setIsLoading(true);
    setTimeout(() => {
      setActualPrices(mockProductData[product]);
      setIsLoading(false);
    }, 1000);
  };


  // Function to handle user's guess submission
  const handleGuessSubmit = (e) => {
    e.preventDefault();


    if (!userGuess) {
      setFeedback('Please enter a valid guess.');
      return;
    }


    const guess = parseFloat(userGuess);
    const averagePrice =
      actualPrices.reduce((total, price) => total + price, 0) / actualPrices.length;


    const difference = Math.abs(guess - averagePrice) / averagePrice;


    if (difference < 0.1) {
      setFeedback('Wow! That was a great guess!');
    } else if (difference < 0.25) {
      setFeedback('Not bad, but you’re a little off!');
    } else {
      setFeedback('That’s quite far off. Try again!');
    }


    // Redirect back to search page after a short delay
    setTimeout(() => {
      setCurrentPage('search');
    }, 1500);
  };


  // Search Page
  const renderSearchPage = () => (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Home Improvement Search
        </h1>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => {
                handleProductSelect(product);
                setCurrentPage('game'); // Switch to game page
              }}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    </div>
  );


  // Game Page
  const renderGamePage = () => (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Guess the Price
        </h1>
        {selectedProduct && !isLoading && (
          <form onSubmit={handleGuessSubmit} className="space-y-4">
            <div className="text-center">
              <label className="block text-gray-700 mb-2">
                What's your price guess for a {selectedProduct}?
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                className="w-40 px-3 py-2 border rounded-md"
                placeholder="Enter price"
                required
              />
            </div>
            <Link to ={"/Search"}> 
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
             Guess
            </button> 
            </Link>
          </form>
        )}
        {feedback && <p className="text-center text-gray-600 mt-4">{feedback}</p>}
        {isLoading && <p className="text-center text-gray-600">Loading prices...</p>}
      </div>
    </div>
  );


  // Render the appropriate page
  return currentPage === 'search' ? renderSearchPage() : renderGamePage();
};


export default PriceGuessingGame;




