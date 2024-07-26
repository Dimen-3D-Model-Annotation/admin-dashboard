"use client";

import SidePanel from "@components/SidePanel";
import Header from "@components/Header";
// Ensure this path is correct and the file exists
import "../../styles/globals.css"; // Adjust the path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional head elements here */}
      </head>
      <body className="flex min-h-screen">
        <div className="w-1/6 bg-[#0F1014]">
          <SidePanel />
        </div>
        <div className="flex-grow bg-[#121316] text-white p-4 overflow-y-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}