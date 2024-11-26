import React from 'react';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { CiEdit, CiSearch } from "react-icons/ci"; // Import the search icon
import TopCards from '@components/TopCards';
import Rectangle from '@components/Document';

const invoiceData = [
  { invoiceId: 'DOC-001', username: 'John Doe', date: 'Edit'},
  { invoiceId: 'DOC-002', username: 'Jane Smith', date: 'Edit' },
  { invoiceId: 'DOC-003', username: 'Aaryan Khan', date: 'Edit' },
  { invoiceId: 'DOC-004', username: 'Bob Herein', date: 'Edit' },
  { invoiceId: 'DOC-005', username: 'John Doe', date: 'Edit' },
  { invoiceId: 'DOC-006', username: 'Jane Smith', date: 'Edit' },
  { invoiceId: 'DOC-007', username: 'Aaryan Khan', date: 'Edit' },
  { invoiceId: 'DOC-008', username: 'Bob Herein', date: 'Edit' },
  { invoiceId: 'DOC-009', username: 'John Doe', date: 'Edit' },
];


function Page() {
  return (
    <div className="p-4">
      {/* Invoice Details */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-7xl">
          {/* Header Row */}
          <div className="w-full h-auto rounded-lg bg-custom-togglegray cursor-pointer mb-2 p-2">
            <div className="grid grid-cols-3 gap-4">
              <p className="text-left font-bold text-white pl-4">Document ID</p>
              <p className="text-left font-bold text-white">Username</p>
              <p className="text-left font-bold text-white"></p>
            </div>
          </div>

          {/* Render Rows */}
          <div className="mb-4 space-y-2">
            {invoiceData.map((invoice, index) => (
              <div
                key={index}
                className="grid grid-cols-3 bg-custom-togglegray text-white p-2 rounded-lg"
              >
                <p className="text-left pl-4">{invoice.invoiceId}</p>
                <p className="text-left">{invoice.username}</p>
                <p className="text-left">{invoice.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
