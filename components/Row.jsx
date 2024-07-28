import React from 'react';

const Row = ({ row }) => {
  return (
    <div>
      {row.map((item) => (
        <div key={item.email} className="row-container flex items-center">
          <img
            src={item.image} 
            alt={item.name} 
            className="w-10 h-10 rounded-full mr-4 flex-shrink-0"
          />
          <div className="rowdiv flex-1 flex justify-between items-center">
            <p className="text-left">{item.name}</p>
            <p className="text-right">{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Row;