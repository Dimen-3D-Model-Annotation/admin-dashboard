import React from 'react';

const Row = ({ row }) => {
  return (
    <div>
      {row.map((item) => (
        <div key={item.email} className="rowdiv flex justify-between items-center">
          <p className="text-left">{item.name}</p>
          <p className="text-right">{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Row;