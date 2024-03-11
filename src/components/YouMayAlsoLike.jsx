import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const YouMayAlsoLike = () => {
  const [mayLikeCoins, setMayLikeCoins] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch trending coins from the API
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = () => {
    // Fetch trending coins from the Coingecko API
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
        // Extract the list of trending coins
        data.coins.filter(coin => {
          if(coin.item.id === 'pepe') {
            coin.item.data.price = (coin.item.data.price).replace(/<sub[^>]*>.*?<\/sub>/g, '')
          }
        })
        const coins = [...data.coins.reverse()];
        const reverseCoins = [...data.coins.reverse()]
        setTrendingCoins(reverseCoins);
        setMayLikeCoins(coins);
      })
      .catch(error => {
        console.log('Error fetching trending coins:', error);
      });
  };

  return (
    <div className='bg-white border-gray-200 py-7'>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="text-xl mb-5"><strong>You May Also Like</strong></h2>
        <ul className='flex gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap no-scrollbar'>
          {mayLikeCoins.map((coin) => (
            <li className='inline-block' key={coin.item.id}>
              <Cards imgUrl={coin.item.small} name={coin.item.name} symbol={coin.item.symbol} pcp24h={coin.item.data.price_change_percentage_24h.usd} price={coin.item.data.price} sparklineUrl={coin.item.data.sparkline} />
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="text-xl mb-5"><strong>Tranding Coins</strong></h2>
        <ul className='flex gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap no-scrollbar'>
          {trendingCoins.map((coin) => (
            <li className='inline-block' key={coin.item.id}>
              <Cards imgUrl={coin.item.small} name={coin.item.name} symbol={coin.item.symbol} pcp24h={coin.item.data.price_change_percentage_24h.usd} price={coin.item.data.price} sparklineUrl={coin.item.data.sparkline} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default YouMayAlsoLike