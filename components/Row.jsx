import React from 'react';

const Row = ({ row }) => {
  return (
    <div>
      {row.map((item) => (
        <div key={item.email} className="rowdiv flex justify-between items-center">
          <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full mr-4" />
          <p className="text-left flex-1">{item.name}</p>
          <p className="text-right flex-1">{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Row;