// src/components/Crypto.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(loading){
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
          }
        });
        setCryptoData(response.data);
        //console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch cryptocurrency data.');
        setLoading(false);
      }
    };

    fetchCryptoData();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=' w-screen h-fit md:w-96 bg-pink-500 border-2 border-pink-900 rounded-xl'>
      <h2 className='text-2xl font-bold p-3 bg-pink-600'>Top 10 Cryptocurrencies by Market Cap</h2>
      <ul>
        {cryptoData.map(coin => (
          <li key={coin.id} className='flex flex-row gap-3 mx-3'>
            <img src={coin.image} alt={coin.name} width="30" height="30" />
            <span>{coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crypto;
