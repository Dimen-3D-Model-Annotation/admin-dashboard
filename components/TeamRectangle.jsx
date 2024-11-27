import React from 'react';

const TeamRectangle = ({ team, projectName, userName, isDetailBox = false, isHeaderBox = false, teamDetailsList = [] }) => {
  // Define dynamic styles based on props
  const width = "w-full"; // Full width
  const height = "h-auto"; // Dynamic height
  const borderRadius = "rounded-lg"; // Rounded corners

  return (
    <div
      className={`relative ${width} ${height} ${borderRadius} bg-custom-togglegray cursor-pointer mb-4 p-4`}
    >
      {isHeaderBox ? (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-left font-bold text-white">
            {team}
          </div>
          <div className="text-left font-bold text-white">
            {projectName}
          </div>
          <div className="text-left font-bold text-white">
            {userName}
          </div>
        </div>
      ) : isDetailBox ? (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-left text-white">
            {teamDetailsList.map((team, index) => (
              <p key={index} className="mb-4">{team.team}</p>
            ))}
          </div>

          <div className="text-left text-white">
            {teamDetailsList.map((team, index) => (
              <p key={index} className="mb-4">{team.projectName}</p>
            ))}
          </div>
          
          <div className="text-left text-white">
            {teamDetailsList.map((team, index) => (
              <p key={index} className="mb-4">{team.userName}</p> 
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center font-bold text-white">
          {projectName}
        </div>
      )}
    </div>
  );
};

export default TeamRectangle;