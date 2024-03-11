import React, { useState, useEffect } from 'react'
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const TrendingCoin = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint
    const url = 'https://api.coingecko.com/api/v3/search/trending';

    // Make the GET request
    fetch(url)
    .then(response => {
      // Check if the response is successful
      if(!response.ok) {
        throw new Error('Failed to fetch trending coins from Coingecko API');
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Extract top 3 trending coins
      const top3TrandingCoins = data.coins.slice(0,3);
      // Set trending coins data
      setTrendingCoins(top3TrandingCoins);
    })
    .catch(error => {
      // Set error
      setError(error.message);
    });
  },[]);

  return (
    <div className="bg-[#ffffff] p-5 my-5 rounded-xl max-w-screen-lg flex flex-col gap-5">
      {error && <p>{error}</p>}
      <h2 className="text-xl mb-3"><strong>Trending Coins (24h)</strong></h2>
      <ul className='flex flex-col gap-2'>
        {trendingCoins.map((coin, index) => (
          <li className='flex justify-start items-center gap-2' key={index}>
            <img className='w-6 h-6 rounded-full' src={coin.item.small} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol})</p>
            {
              (coin.item.data.price_change_percentage_24h.usd).toFixed(2) >= 2 ?
              <p className='flex items-center bg-green-100 text-green-600 px-1 py-0.5 text-sm rounded-md ml-auto'><GoTriangleUp fontSize="1.2rem"/>{(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
              :
              <p className='flex items-center bg-red-100 text-red-600 px-1 py-0.5 text-sm rounded-md ml-auto'><GoTriangleDown fontSize="1.2rem"/>
                {
                  (coin.item.data.price_change_percentage_24h.usd).toFixed(2) < 0 ? 
                  (coin.item.data.price_change_percentage_24h.usd).toFixed(2).slice(1) 
                  : 
                  (coin.item.data.price_change_percentage_24h.usd).toFixed(2)
                }%
              </p>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendingCoin