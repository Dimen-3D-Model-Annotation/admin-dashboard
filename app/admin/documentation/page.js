import React from 'react';
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci"; // Import the search icon
import TopCards from '@components/TopCards';
import Rectangle from '@components/Document';

const invoiceData = [
  { invoiceId: 'DOC-001', username: 'John Doe' },
  { invoiceId: 'DOC-002',  username: 'Jane Smith' },
  { invoiceId: 'DOC-003',  username: 'Aaryan Khan' },
  { invoiceId: 'DOC-004', username: 'Bob Herein' },
  { invoiceId: 'DOC-005', username: 'John Doe' },
  { invoiceId: 'DOC-006', username: 'Jane Smith' },
  { invoiceId: 'DOC-007', username: 'Aaryan Khan' },
  { invoiceId: 'DOC-008',username: 'Bob Herein' },
  { invoiceId: 'DOC-009', username: 'John Doe' },
];

function Page() {
  return (
    <div className="p-4">
      {/* Top Cards and Search Bar */}
      
      
      {/* Invoice Details */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-7xl">
          <div className="w-full h-auto rounded-full bg-custom-togglegray cursor-pointer mb-2 p-2">
            <div className="grid grid-cols-2 gap-2">
              <p className="text-left font-bold text-white pl-4">Document ID</p>
              <p className="text-left font-bold text-white">Username</p>
            </div>
          </div>
          {/* Render the Rectangle component with all invoice details */}
          <div className="mb-4">
            <Rectangle
              isDetailBox={true}
              projectDetailsList={invoiceData.map(invoice => ({
                projectName: invoice.invoiceId,
                userName: invoice.username,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;