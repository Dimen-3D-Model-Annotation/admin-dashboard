import React from 'react';
import Rectangle from '@components/Rectangles'; // Adjust the import path as necessary

const Page = () => {
  // Static project details for demonstration
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
    },
    {
        team: 'Team 13', 
        projectName: 'Project Terac',
        userName: 'Lauren, Stephen, Richard Tyson'
      },
      {
        team: 'Team 23', 
        projectName: 'Project Teclora',
        userName: 'Heezath, Aleeza, Herath Perera, Richard'
      },
    {
      team: 'Team 45', 
      projectName: 'Project Alpha',
      userName: 'Alice Johnson, John Doe, Jane Smith'
    }
    // Add more projects as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Team Details</h1>
      <Rectangle
        team="Team"
        projectName="Project"
        userName="Users"
        isHeaderBox={true} // Set to true for header box
      />
      <Rectangle
        teamDetailsList={teamDetailsList}
        isDetailBox={true} // Set to true to show detailed view
      />
    </div>
  );
};

export default Page;
