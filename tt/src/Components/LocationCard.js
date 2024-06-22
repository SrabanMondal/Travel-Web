import React from 'react';

const LocationCard = ({ image, name, rating, reviews, distance, location }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <div className="mt-2">
        <span className="text-yellow-500">★ {rating}</span>
        <span className="ml-2 text-gray-600">{reviews} reviews</span>
      </div>
      <div className="mt-2 text-gray-600">
        <span>{distance}</span> | <span>{location}</span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="p-2 bg-blue-500 text-white rounded">Visit Now</button>
        <button className="p-2 bg-purple-500 text-white rounded">Website</button>
      </div>
    </div>
  );
};

export default LocationCard;