import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-2 bg-custom-purple text-white flex justify-between items-center p-4 rounded-lg h-24 lg:h-32 w-full'>
        <div className='bg-custom-gray h-12 w-12 flex items-center justify-center text-white p-3 rounded-full'>
          <FaUserAlt className='w-6 h-6' />
        </div>
        <div className='flex flex-col w-full items-end'>
          <div className='ml-3 text-5xl font-bold'>62</div>
          <div>System Users</div>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-custom-purple text-white flex justify-between items-center p-4 rounded-lg h-24 lg:h-32 w-full'>
        <div className='flex flex-col w-full items-end'>
          <div className='ml-3 text-5xl font-bold'>10</div>
          <div>Teams</div>
        </div>
      </div>
      <div className='bg-custom-purple text-white flex justify-between items-center p-4 rounded-lg h-24 lg:h-32 w-full'>
        <div className='flex flex-col w-full items-end'>
          <div className='ml-3 text-5xl font-bold'>5</div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
}

export default TopCards;