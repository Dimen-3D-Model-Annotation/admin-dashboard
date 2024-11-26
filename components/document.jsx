import React from 'react';

const Rectangle = ({ projectName, date, userName, isDetailBox = false, isHeaderBox = false, projectDetailsList = [] }) => {
  // Define dynamic styles based on props
  const width = "w-full"; // Full width
  const height = "h-auto"; // Dynamic height
  const borderRadius = "rounded-lg"; // Rounded corners

  return (
    <div
      className={`relative ${width} ${height} ${borderRadius} bg-custom-togglegray cursor-pointer mb-4 p-4`}
    >
      {isHeaderBox ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="text-left font-bold text-white">Document ID</div>
          <div className="text-left font-bold text-white">Username</div>
        </div>
      ) : isDetailBox ? (
        <div className="grid grid-cols-2 gap-2">
          {projectDetailsList.map((project, index) => (
            <React.Fragment key={index}>
              <div className="text-left text-white pl-4">{project.projectName}</div>
             
              <div className="text-left text-white">{project.userName}</div>
             
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-white">
          {projectName}
        </div>
      )}
    </div>
  );
};

export default Rectangle;