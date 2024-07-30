import React from 'react';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci"; // Import the search icon
import TopCards from '@components/TopCards';
import Rectangle from '@components/Rectangle';

const invoiceData = [
  { invoiceId: 'INV-001', date: '2023-07-29', username: 'John Doe', email: 'john@gmail.com' },
  { invoiceId: 'INV-002', date: '2023-07-28', username: 'Jane Smith', email: 'jane@gmail.com' },
  { invoiceId: 'INV-003', date: '2023-08-01', username: 'Aaryan Khan', email: 'aaryank@gmail.com' },
  { invoiceId: 'INV-004', date: '2023-08-01', username: 'Bob Herein', email: 'bobher@gmail.com' },
  { invoiceId: 'INV-005', date: '2023-07-29', username: 'John Doe', email: 'john@gmail.com' },
  { invoiceId: 'INV-006', date: '2023-07-28', username: 'Jane Smith', email: 'jane@gmail.com' },
  { invoiceId: 'INV-007', date: '2023-08-01', username: 'Aaryan Khan', email: 'aaryank@gmail.com' },
  { invoiceId: 'INV-008', date: '2023-08-01', username: 'Bob Herein', email: 'bobher@gmail.com' },
  { invoiceId: 'INV-009', date: '2023-07-29', username: 'John Doe', email: 'john@gmail.com' },
];

function Page() {
  return (
    <div className="p-4">
      {/* Top Cards and Search Bar */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-10">
            <TopCards icon={FaFileInvoiceDollar} number={253} label="Total Invoices" />
            <TopCards icon={HiMiniReceiptRefund} number={75} label="Process Refund Requests" />
          </div>
          {/* Search Bar Container */}
          <div className="relative w-search-bar">
            {/* Container for search bar and icon */}
            <div className="flex items-center border rounded-full overflow-hidden bg-custom-togglegray shadow-md">
              <CiSearch className="text-white absolute left-3" />
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-10 py-2 text-white bg-custom-togglegray border-none rounded-full outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Invoice Details */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-7xl">
          <div className="w-full h-auto rounded-full bg-custom-togglegray cursor-pointer mb-2 p-2">
            <div className="grid grid-cols-4 gap-4">
              <p className="text-left font-bold text-white pl-4">Invoice ID</p>
              <p className="text-left font-bold text-white">Date</p>
              <p className="text-left font-bold text-white">Username</p>
              <p className="text-left font-bold text-white">Email</p>
            </div>
          </div>
          {/* Render the Rectangle component with all invoice details */}
          <div className="mb-4">
            <Rectangle
              isDetailBox={true}
              projectDetailsList={invoiceData.map(invoice => ({
                projectName: invoice.invoiceId,
                date: invoice.date,
                userName: invoice.username,
                email: invoice.email
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;