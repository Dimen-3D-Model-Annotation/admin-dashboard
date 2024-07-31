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
      <div className="absolute inset-y-14 left-0 flex items-left justify-center w-1/2">
        <img
          src="/assets/images/user1.webp"
          alt="User"
          className="w-48 h-48 rounded-full border-4 border-white"
        />
      </div>
  
      {/* User Details */}
      <div className="ml-40 mb-15 flex flex-col space-y-4 text-right">
        <div>
          <h2 className=" ml-60 text-white text-left">User Name</h2>
          <div className="ml-60 bg-white rounded-lg p-2 text-black text-left w-80">John Doe</div> {/* Decreased width */}
        </div>
        <div>
          <h2 className=" ml-60 text-white text-left">Email</h2>
          <div className="ml-60 bg-white rounded-lg p-2 text-black text-left w-80">john.doe@example.com</div> {/* Decreased width */}
        </div>
        <div>
          <h2 className="ml-60 text-white text-left">Bio</h2>
          <div className="ml-60 bg-white rounded-lg p-2 text-black text-left w-80">I'm a passionate 3D Designer.</div> {/* Decreased width */}
        </div>
        <div>
          <h2 className="ml-96 text-blue-400 text-left">Change Password?</h2>
         </div>

      </div>
    </div>
  );
};

export default Rectangles;
