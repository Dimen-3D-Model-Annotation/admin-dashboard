import React from 'react';
import { TbMessageReportFilled } from "react-icons/tb"; // Updated icon
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci"; // Import the search icon
import TopCards from '@components/TopCards';
import Rectangle from '@components/Rectangle';

const reportData = [
  { reportId: 'RPT-001', date: '2023-07-29', email: 'john@gmail.com', message: "example message1" },
  { reportId: 'RPT-002', date: '2023-07-28', email: 'jane@gmail.com', message: "example message2" },
  { reportId: 'RPT-003', date: '2023-08-01', email: 'aaryank@gmail.com', message: "example message3" },
  { reportId: 'RPT-004', date: '2023-08-01', email: 'bobher@gmail.com', message: "example message4" },
  { reportId: 'RPT-005', date: '2023-07-29', email: 'john@gmail.com', message: "example message5" },
  { reportId: 'RPT-006', date: '2023-07-28', email: 'jane@gmail.com', message: "example message6" },
  { reportId: 'RPT-007', date: '2023-08-01', email: 'aaryank@gmail.com', message: "example message7" },
  { reportId: 'RPT-008', date: '2023-08-01', email: 'bobher@gmail.com', message: "example message8" },
  { reportId: 'RPT-009', date: '2023-07-29', email: 'john@gmail.com', message: "example message9" },
];

function Reports() {
  return (
    <div className="p-4">
      {/* Top Cards and Search Bar */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-10">
            <TopCards icon={TbMessageReportFilled} number={19} label="Total Reports" />
            {/* <TopCards icon={HiMiniReceiptRefund} number={75} label="Process Refund Requests" /> */}
          </div>
          {/* Search Bar Container */}
          <div className="relative w-64 mt-20"> {/* Updated width class */}
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
      
      {/* Report Details */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-7xl">
          <div className="w-full h-auto rounded-full bg-custom-togglegray cursor-pointer mb-2 p-2">
            <div className="grid grid-cols-4 gap-4">
              <p className="text-left font-bold text-white pl-4">Report ID</p>
              <p className="text-left font-bold text-white">Date</p>
              <p className="text-left font-bold text-white">Email</p>
              <p className="text-left font-bold text-white">Message</p>
            </div>
          </div>
          {/* Render the Rectangle component with all reports details */}
          <div className="mb-4">
            <Rectangle
              isDetailBox={true}
              projectDetailsList={reportData.map(invoice => ({
                projectName: invoice.reportId,
                date: invoice.date,
                userName: invoice.email,
                email: invoice.message
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
