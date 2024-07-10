import React from 'react';
import { GrOverview } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { RiLogoutCircleLine } from "react-icons/ri";

import '../styles/globals.css';

const SidePanel = () => {
  return (
    <div className='flex flex-col h-full'>
      <div>
        <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
        <img src=''/>
      </div>

      <ul className='mt-2 text-white flex-grow'>
        <li className='py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <GrOverview className='w-4 h-4 mr-2' />
            Overview
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <FaRegUser className='w-4 h-4 mr-2' />
            Users
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <MdOutlineSubscriptions className='w-4 h-4 mr-2' />
            Subscription
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <AiOutlineDollarCircle className='w-4 h-4 mr-2' />
            Payments
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <IoSettingsOutline className='w-4 h-4 mr-2' />
            Settings
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <HiOutlineClipboardDocumentList className='w-4 h-4 mr-2' />
            Documentation
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <TbReportSearch className='w-4 h-4 mr-2' />
            Reports
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <MdOutlineContactSupport className='w-4 h-4 mr-2' />
            Support
          </a>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <a href='#' className='px-3 flex items-center'>
            <GoDatabase className='w-4 h-4 mr-2' />
            Database
          </a>
        </li>
      </ul>

      <div className='mt-auto mb-1 py-5 hover:shadow hover:bg-custom-gray rounded'>
        <a href='#' className='px-3 flex items-center'>
          <RiLogoutCircleLine className='w-4 h-4 mr-2' />
          Logout
        </a>
      </div>
    </div>
  );
}

export default SidePanel;