import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <div className='flex flex-col justify-center items-center h-24 mt-10 mb-5'>
        <Image src="/assets/images/logo.svg" alt="Logo" width={70} height={70} />
        <Image src="/assets/images/logoName.svg" alt="Logo Name" width={120} height={120} />
      </div>

      <ul className='mt-2 text-white flex-grow flex flex-col'>
        <li className='py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/overview" className='px-3 flex items-center'>
            <GrOverview className='w-4 h-4 mr-2' />
            Overview
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/users"  className='px-3 flex items-center'>
            <FaRegUser className='w-4 h-4 mr-2' />
            Users
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/subscription"  className='px-3 flex items-center'>
            <MdOutlineSubscriptions className='w-4 h-4 mr-2' />
            Subscription
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/payments"  className='px-3 flex items-center'>
            <AiOutlineDollarCircle className='w-4 h-4 mr-2' />
            Payments
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/settings"  className='px-3 flex items-center'>
            <IoSettingsOutline className='w-4 h-4 mr-2' />
            Settings
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/documentation"  className='px-3 flex items-center'>
            <HiOutlineClipboardDocumentList className='w-4 h-4 mr-2' />
            Documentation
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/reports"  className='px-3 flex items-center'>
            <TbReportSearch className='w-4 h-4 mr-2' />
            Reports
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/support"  className='px-3 flex items-center'>
            <MdOutlineContactSupport className='w-4 h-4 mr-2' />
            Support
          </Link>
        </li>

        <li className='mb-1 py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/database"  className='px-3 flex items-center'>
            <GoDatabase className='w-4 h-4 mr-2' />
            Database
          </Link>
        </li>

        <li className='mt-auto py-1 hover:shadow hover:bg-custom-gray rounded'>
          <Link href="/admin/logout"  className='px-3 flex items-center'>
            <RiLogoutCircleLine className='w-4 h-4 mr-2' />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;