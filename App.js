import React, { useState, useEffect } from 'react';

const PriceGuessingGame = () => {
  // State variables to manage game data
  const [selectedProduct, setSelectedProduct] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [actualPrices, setActualPrices] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Product categories for the game
  const products = [
    'Water Heater',
    'Water Heater Repair Kit',
    'Pipe Insulation'
  ];

  // Sample product data (since we can't directly connect to Lowe's API in frontend)
  const mockProductData = {
    'Water Heater': [449.99, 499.99, 599.99, 699.99],
    'Water Heater Repair Kit': [29.99, 39.99, 49.99, 59.99],
    'Pipe Insulation': [4.99, 6.99, 8.99, 12.99]
  };

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFeedback('');
    setUserGuess('');
    // Simulate API call to get prices
    fetchPrices(product);
  };

  // Function to simulate fetching prices from API
  const fetchPrices = (product) => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setActualPrices(mockProductData[product]);
      setIsLoading(false);
    }, 1000);
  };

  // Function to handle user's guess submission
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (!userGuess) return;

    const guess = parseFloat(userGuess);
    const averagePrice = actualPrices.reduce((a, b) => a + b, 0) / actualPrices.length;

    // Calculate price difference percentage
    const difference = Math.abs(guess - averagePrice) / averagePrice;

    // Provide feedback based on how close the guess was
    if (difference <= 0.15) { // Within 15% of actual average
      setFeedback("Wow! That was a great guess. You are very price conscious!");
    } else {
      setFeedback("Oops, looks like you need more practice in pricing experience.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Home Improvement Price Guess
        </h1>

        {/* Product Selection Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => handleProductSelect(product)}
              className={`px-4 py-2 rounded-md ${
                selectedProduct === product
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {product}
            </button>
          ))}
        </div>

        {/* Guessing Form */}
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
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                Submit Guess
              </button>
            </div>
          </form>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-gray-600">
            Loading prices...
          </div>
        )}

        {/* Feedback Display */}
        {feedback && (
          <div className={`mt-6 p-4 rounded-md text-center ${
            feedback.includes('great') 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {feedback}
          </div>
        )}

        {/* Price Display After Guess */}
        {feedback && (
          <div className="mt-6">
            <h3 className="text-center font-semibold mb-2">Actual Prices:</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {actualPrices.map((price, index) => (
                <div key={index} className="bg-gray-100 px-4 py-2 rounded-md">
                  ${price.toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceGuessingGame;