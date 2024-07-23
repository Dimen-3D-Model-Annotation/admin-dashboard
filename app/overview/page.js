import React from 'react';
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

function Overview() {
  return (
    <div className='grid lg:grid-cols-3 gap-20 mb-15 ml-5 mr-5'>
      {/* First Card */}
      <div className='rounded bg-custom-purple h-30 shadow-sm flex items-center'>
        <div className='bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5'>
          <FaUserAlt className='w-10 h-10' />
        </div>
        <div className='ml-10'>
          <div className='flex flex-col justify-center text-7xl font-bold mb-2'>62</div>
          <div className='text-lg'>System Users</div>
        </div>
      </div>

      {/* Second Card */}
      <div className='rounded bg-custom-purple h-40 shadow-sm flex items-center'>
        <div className='bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5'>
          <FaUsers className='w-12 h-12'/>
        </div>
        <div className='ml-10'>
          <div className='flex flex-col justify-center text-7xl font-bold mb-2 mr-10'>154</div>
          <div className='text-lg'>Teams</div>
        </div>
      </div>

      {/* Third Card */}
      <div className='rounded bg-custom-purple h-40 shadow-sm flex items-center'>
        <div className='bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5'>
          <GoProjectSymlink className='w-10 h-10' />
        </div>
        <div className='ml-10'>
          <div className='flex flex-col justify-center text-7xl font-bold mb-2 mr-10'>235</div>
          <div className='text-lg'>Projects</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
