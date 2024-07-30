import React from 'react';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import TopCards from '@components/TopCards';
import Box from '@components/Box';

const invoiceData = [
  { invoiceId: 'INV-001', date: '2023-07-29', username: 'John Doe', email: 'john@example.com' },
  { invoiceId: 'INV-002', date: '2023-07-28', username: 'Jane Smith', email: 'jane@example.com' },
  // Add more data as needed
];

function Page() {
  return (
    <div>
      <div className="flex space-x-10 mb-10">
        <TopCards icon={FaFileInvoiceDollar} number={253} label="Total Invoices" />
        <TopCards icon={HiMiniReceiptRefund} number={75} label="Process Refund Requests" />
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-5xl h-12 rounded-full bg-custom-togglegray cursor-pointer flex items-center justify-between p-2">
          <p className="text-left font-bold text-white">Invoice ID</p>
          <p className="text-left font-bold text-white">Date</p>
          <p className="text-left font-bold text-white">Username</p>
          <p className="text-left font-bold text-white">Email</p>
        </div>
      </div>
      <Box box={invoiceData} />
    </div>
  );
}

export default Page;