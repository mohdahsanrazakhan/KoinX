import React, {useState, useEffect} from 'react';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const CryptoFetch = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    // Define the API endpoint
    const url = 'https://api.coingecko.com/api/v3/simple/price';

    // Define parameters for the request
    const params = {
      ids: 'bitcoin',
      vs_currencies: 'usd,inr',
      include_24hr_change: 'true'
    };

    // Convert parameters to query string
    const queryString = new URLSearchParams(params).toString();

    // Make the GET request
    fetch(`${url}?${queryString}`)
      .then(response => {
        // Check if the response is successful
        if(!response.ok) {
          throw new Error('Failed to fetch data from Coingecko API');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Extract required data
        const bitcoinData = {
          name: 'Bitcoin',
          icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
          shortName: 'BTC',
          ranking: '#1',
          usdPrice: data.bitcoin.usd,
          inrPrice: data.bitcoin.inr,
          usd24hChange: data.bitcoin.usd_24h_change
        };
        // Set Crypto data
        setCryptoData(bitcoinData);
      })
      .catch(error => {
        // Set error
        setError(error.message)
      });
  }
  
  useEffect(() => {
    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 60000); // Fetch data every second
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {cryptoData && (
        <div>
          <div className='flex flex-row flex-wrap justify-start items-center gap-2'>
            <img className='w-9' src={cryptoData.icon} alt={cryptoData.name} />
            <h1 className='text-xl font-semibold'>{cryptoData.name}</h1>
            <p className='text-[#5d667b] text-sm'>{cryptoData.shortName}</p>
            <p className='bg-[#768396] text-white p-2 rounded-lg text-xs tracking-wide ml-3'>Rank {cryptoData.ranking}</p>
          </div>
          <div className='flex flex-wrap justify-start items-center gap-2 mt-5'>
            <p className='text-2xl font-semibold mr-5'>${parseFloat(cryptoData.usdPrice).toLocaleString()}</p>
            <div>
              {
                cryptoData.usd24hChange.toFixed(2) > 0 ? 
                <p className='flex items-center text-[#14B079] bg-[#14B079]/20 py-0.5 px-2 rounded-md'><GoTriangleUp fontSize="1.5rem"/>
                  {cryptoData.usd24hChange.toFixed(2)}%
                </p> : 
                <p className='flex items-center text-[#14B079] bg-[#14B079]/20 py-0.5 px-2 rounded-md'><GoTriangleDown fontSize="1.5rem"/>
                  {cryptoData.usd24hChange.toFixed(2)}%
                </p>
              }
            </div>
            <p className='text-gray-600'>(24H)</p>
          </div>
          <p className='text-lg mt-1'>₹{parseFloat(cryptoData.inrPrice).toLocaleString('en-IN')}</p>
        </div>
      )}
    </>
  )
}

export default CryptoFetch