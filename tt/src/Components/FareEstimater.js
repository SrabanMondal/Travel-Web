import React, { useState } from 'react';

const FareEstimator = () => {
  const [from, setfrom] = useState('');
  const [to, setto] = useState('');
  const [distance, setdistance] = useState('');
  const [time, settime] = useState('');
  const [fuel, setfuel] = useState('');
  const [mileage, setmileage] = useState(''); 
  const [cost, setcost] = useState(''); 
  return (
    <section className="text-center h-fit">
      <h2 className="text-3xl font-bold">Your Estimated Fare:</h2>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
          <div className="flex mb-4">
            <input type="text" placeholder="From" value={from} onChange={(e)=>setfrom(e.target.value)} className="p-2 rounded border w-1/2" />
            <input type="text" placeholder="To" value={to} onChange={(e)=>setto(e.target.value)} className="p-2 rounded border w-1/2" />
          </div>
          <div className="flex mb-4">
            <input type="text" placeholder="Distance" value={distance} onChange={(e)=>setdistance(e.target.value)} className="p-2 rounded border w-1/3" />
            <input type="text" placeholder="Time" value={time} onChange={(e)=>settime(e.target.value)} className="p-2 rounded border w-1/3" />
            <input type="text" placeholder="Fuel Price" value={fuel} onChange={(e)=>setfuel(e.target.value)} className="p-2 rounded border w-1/3" />
          </div>
          <div className="flex mb-4">
            <input type="text" placeholder="Mileage" value={mileage} onChange={(e)=>setmileage(e.target.value)} className="p-2 rounded border w-full" />
          </div>
          <div className="flex">
            <input type="text" placeholder="Expected Cost" value={cost} onChange={(e)=>setcost(e.target.value)} className="p-2 rounded border w-1/2" />
            <button className="p-2 bg-yellow-500 text-white rounded w-1/2">Modify Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareEstimator;
