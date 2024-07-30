import React from 'react';
import Button from '@components/Button';

const Box = ({ box, isDetailBox = false, isPremiumPlan = false }) => {
  const width = "w-120"; // Updated width for both heading and details
  const height = isDetailBox ? "h-auto" : "h-10";
  const borderRadius = isDetailBox ? "rounded-lg" : "rounded-full";

  return (
    <div className={`relative ${width} ${height} ${borderRadius} bg-custom-togglegray cursor-pointer mb-4 flex flex-col justify-center p-4`}>
      {isDetailBox ? (
        <>
          {box.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-6 m-3">
              <p className="text-left font-bold text-white">{item.name}</p>
              <div className="w-32 h-8 flex items-center justify-center bg-custom-gray text-white rounded-full">
                {isPremiumPlan ? (
                  <span className="font-bold">{item.number}</span>
                ) : (
                  <>
                    <span className="mr-3">-</span>
                    <span className="font-bold">{item.number}</span>
                    <span className="ml-3">+</span>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-center w-full mt-4 mb-4">
            <Button label={isPremiumPlan ? "$9.99 / Monthly" : "$0.00 / Monthly"} />
          </div>
        </>
      ) : (
        <p className="text-center font-bold text-white">{box[0].name}</p>
      )}
    </div>
  );
};

export default Box;