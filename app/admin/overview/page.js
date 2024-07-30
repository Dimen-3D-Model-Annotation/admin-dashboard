"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Overview() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lineChartData = [
    { name: "Jan", 2022: 400, 2023: 450 },
    { name: "Feb", 2022: 350, 2023: 500 },
    { name: "Mar", 2022: 550, 2023: 630 },
    { name: "Apr", 2022: 620, 2023: 400 },
    { name: "May", 2022: 560, 2023: 480 },
    { name: "Jun", 2022: 600, 2023: 590 },
    { name: "Jul", 2022: 650, 2023: 700 },
    { name: "Aug", 2022: 500, 2023: 800 },
    { name: "Sep", 2022: 950, 2023: 900 },
    { name: "Oct", 2022: 1000, 2023: 960 },
    { name: "Nov", 2022: 1200, 2023: 1500 },
    { name: "Dec", 2022: 1100, 2023: 1200 },
  ];

  const pieChartData = [
    { name: "Free Plan Users", value: 400 },
    { name: "Premium Plan Users", value: 300 },
  ];

  const COLORS = ["rgba(160, 32, 255, 0.15)", "#0080FF", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen flex flex-row overflow-hidden">
      <div className="flex-grow bg-[#121316] text-white p-4 overflow-y-auto">
        <div className="grid lg:grid-cols-3 gap-20 mt-5 mb-15 ml-5 mr-5">
          {/* First Card */}
          <div className="rounded-2xl bg-custom-purple h-30 shadow-sm flex items-center">
            <div className="bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5">
              <FaUserAlt className="w-10 h-10" />
            </div>
            <div className="ml-10">
              <div className="flex flex-col justify-center text-7xl font-bold mb-2">
                62
              </div>
              <div className="text-lg">System Users</div>
            </div>
          </div>

          {/* Second Card */}
          <div className="rounded-2xl bg-custom-purple h-40 shadow-sm flex items-center">
            <div className="bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5">
              <FaUsers className="w-12 h-12" />
            </div>
            <div className="ml-10">
              <div className="flex flex-col justify-center text-7xl font-bold mb-2 mr-10">
                154
              </div>
              <div className="text-lg">Teams</div>
            </div>
          </div>

          {/* Third Card */}
          <div className="rounded-2xl bg-custom-purple h-40 shadow-sm flex items-center">
            <div className="bg-custom-gray h-20 w-20 flex items-center justify-center text-white p-3 rounded-full ml-5">
              <GoProjectSymlink className="w-10 h-10" />
            </div>
            <div className="ml-10">
              <div className="flex flex-col justify-center text-7xl font-bold mb-2 mr-10">
                235
              </div>
              <div className="text-lg">Projects</div>
            </div>
          </div>
        </div>

        {isClient && (
          <div className="flex flex-col lg:flex-row items-center shadow-md mr-5 mt-4 gap-10">
            <ResponsiveContainer width="60%" height={400}>
              <RechartsLineChart
                width={300}
                height={100}
                data={lineChartData}
                margin={{
                  top: 30,
                  right: 30,
                  left: 5,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="2022"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="2023" stroke="#82ca9d" />
              </RechartsLineChart>
            </ResponsiveContainer>

            <div className="flex flex-col items-center">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2" style={{ backgroundColor: COLORS[0] }}></span>
                    Free Plan Users
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2" style={{ backgroundColor: COLORS[1] }}></span>
                    Premium Plan Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overview;