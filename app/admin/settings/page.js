import React from 'react';
import Rectangle from '@components/SettingsRectangle'; // Adjust the import path as necessary

const Page = () => {
  return (
    <div className="flex flex-col items-center h-screen p-6">
      <div className="w-3/4 text-left mb-4">
        <h1 className="text-2xl font-bold">General Details</h1>
      </div>
      <Rectangle />
    </div>
  );
};

export default Page;
