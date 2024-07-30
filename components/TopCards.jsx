import React from 'react';

const TopCards = ({ icon: Icon, number, label }) => {
  return (
    <div className="rounded-2xl bg-custom-purple h-35 w-60 shadow-sm flex items-center">
      <div className="bg-custom-gray h-15 w-15 flex items-center justify-center text-white p-3 rounded-full ml-5">
        <Icon className="w-8 h-8" />
      </div>
      <div className="ml-10">
        <div className="flex flex-col justify-center text-6xl font-bold mb-2">
          {number}
        </div>
        <div className="text-sm mb-2">{label}</div>
      </div>
    </div>
  );
};

export default TopCards;