import React from 'react';

const TeamMember = ({ name }) => {
  return (
    <div className="flex flex-col h-fit w-fit px-32 items-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Contact Now
      </button>
    </div>
  );
};

export default TeamMember;