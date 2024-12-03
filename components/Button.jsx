import React from 'react';

const Button = ({ label }) => {
  return (
    <div>
      <button
        className="bg-[#6A00FF] text-white py-1 px-7 rounded-full"
      >
        <p>{label}</p>
      </button>
    </div>
  );
};

export default Button;