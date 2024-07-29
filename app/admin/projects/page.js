import React from 'react';
import Rectangle from '@components/Rectangle'; // Adjust the import path as necessary

const Page = () => {
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Project Details</h1>
      <Rectangle
        projectName="Project"
        userName="Users"
        date="Date"
        isHeaderBox={true} // Set to true for header box
      />
      <Rectangle
        projectDetailsList={projectDetailsList}
        isDetailBox={true} // Set to true to show detailed view
      />
    </div>
  );
};

export default Page;
