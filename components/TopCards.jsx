import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-custom-purple text-white flex justify-between items-center w-full p-4 rounded-lg h-24 lg:h-32'>
        <div className='bg-custom-gray h-12 w-12 flex items-center justify-center text-white p-2 rounded-lg'>
          <FaUserAlt className='w-7 h-7' />
        </div>
        <div className='flex flex-col w-full'>
          <div>System users</div>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-custom-purple text-white flex justify-between items-center w-full p-4 rounded-lg h-24 lg:h-32'>
        Teams
      </div>
      <div className='bg-custom-purple text-white flex justify-between items-center w-full p-4 rounded-lg h-24 lg:h-32'>
        Projects
      </div>
    </div>
  )
}

export default TopCards;