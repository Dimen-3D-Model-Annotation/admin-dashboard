import React from 'react';
import ProjectRectangle from '@components/ProjectRectangle'; // Adjust the import path as necessary
import TeamRectangle from '@components/TeamRectangle'; // Adjust the import path as necessary

const Database = () => {
  // Static project details for demonstration
  const projectDetailsList = [
    {
      projectName: 'Project Gamma',
      userName: 'Micheal Carlon, Robert Wilson, Carles Edmond',
      date: 'August 21, 2024'
    },
    {
      projectName: 'Project Terac',
      userName: 'Lavishankar Shanmugaraj, Richard Stephen, Tyson',
      date: 'April 30, 2024'
    },
    {
      projectName: 'Project Teclora',
      userName: 'Hayath Sareej, Liza Perera, Herath Perera, Richard',
      date: 'August 30, 2024'
    },
    {
      projectName: 'Project Fineque',
      userName: 'Laugen, Rimon Paul, Mike Tyson',
      date: 'June 30, 2024'
    },
    {
      projectName: 'Project Tele',
      userName: 'Laura, Tom Holland, Herath Perera, Richard',
      date: 'December 30, 2024'
    },
    {
      projectName: 'Project Tele',
      userName: 'Zendeyah, Andrew, Rihana, Jack, Richard',
      date: 'November 30, 2024'
    },
    {
      projectName: 'Project Alpha',
      userName: 'Alice Johnson, John Doe, Jane Smith',
      date: 'September 5, 2024'
    }
    // Add more projects as needed
  ];

  // Static team details for demonstration
  const teamDetailsList = [
    {
      team: 'Team 11',  
      projectName: 'Project Gamma',
      userName: 'Micheal Carlon, Robert Wilson, Carles Edmond'
    },
    {
      team: 'Team 31', 
      projectName: 'Project Terac',
      userName: 'Lavishankar Shanmugaraj, Richard Stephen, Tyson'
    },
    {
      team: 'Team 19', 
      projectName: 'Project Teclora',
      userName: 'Hayath Sareej, Liza Perera, Herath Perera, Richard'
    }
    // Add more teams as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Project Details</h1>
      <div className="max-h-98 overflow-y-auto">
        <ProjectRectangle
          projectName="Project"
          userName="Users"
          date="Date"
          isHeaderBox={true} // Set to true for header box
        />
        <div className="max-h-48 overflow-y-auto">
          <ProjectRectangle
            projectDetailsList={projectDetailsList}
            isDetailBox={true} // Set to true to show detailed view
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-6">Team Details</h1>
      <div className="max-h-98 overflow-y-auto">
        <TeamRectangle
          team="Team"
          projectName="Project"
          userName="Users"
          isHeaderBox={true} // Set to true for header box
        />
        <div className="max-h-48 overflow-y-auto">
          <TeamRectangle
            teamDetailsList={teamDetailsList}
            isDetailBox={true} // Set to true to show detailed view
          />
        </div>
      </div>
    </div>
  );
};

export default Database;
