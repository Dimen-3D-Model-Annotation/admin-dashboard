import React from 'react';

const Rectangles = () => {
  // Define dynamic styles based on props
  const width = "w-3/4"; // 75% width
  const height = "h-auto"; // Dynamic height
  const borderRadius = "rounded-lg"; // Rounded corners

  return (
    <div
      className={`relative ${width} ${height} ${borderRadius} bg-custom-togglegray cursor-pointer p-4`}
    >
      {/* User Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/assets/images/user1.webp"
          alt="User"
          className="w-40 h-40 rounded-full border-4 border-white"
        />
      </div>
  
      {/* User Details */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-white text-left">User Name</h2>
          <div className="bg-white rounded-lg p-2 text-black w-80 text-left">John Doe</div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-white text-left">Email</h2>
          <div className="bg-white rounded-lg p-2 text-black w-80 text-left">john.doe@example.com</div>
        </div>
        
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-blue-400 text-left">Change Password</h2>
        </div>
      </div>
    </div>
  );
};

export default Rectangles;