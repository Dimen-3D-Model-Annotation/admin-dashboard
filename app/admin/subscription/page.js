"use client";

import React, { useState, useEffect } from "react";
import Box from "@components/Box"; // Correctly import the Box component

function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const freePlan = [
    {
      name: "Free Plan"
    },
  ];

  const prePlan = [
    {
      name: "Premium Plan"
    },
  ];

  const freePlanDetails = [
    {
      name: "Max Individual Projects",
      number: 5
    },
    {
      name: "Max Pages Per Project",
      number: 5
    },
    {
      name: "Number of Team",
      number: 1
    },
    {
      name: "Max Projects Per Team",
      number: 5
    },
  ];

  const prePlanDetails = [
    {
      name: "Max Individual Projects",
      number: "Unlimited"
    },
    {
      name: "Max Pages Per Project",
      number: "Unlimited"
    },
    {
      name: "Number of Team",
      number: "Unlimited"
    },
    {
      name: "Max Projects Per Team",
      number: "Unlimited"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  if (!mounted) {
    // Render a placeholder to avoid hydration errors
    return <div className="p-8"></div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <label
        htmlFor="check"
        className="relative w-80 h-10 rounded-full bg-custom-togglegray cursor-pointer mb-10"
      >
        <input
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <span
          className={`absolute w-1/2 h-full rounded-full transition-all duration-500 flex items-center justify-center font-bold text-white ${
            isChecked ? "bg-custom-gray left-1/2" : "bg-custom-gray left-0"
          }`}
        >
          {isChecked ? "Premium Plan" : "Free Plan"}
        </span>
        <span
          className={`absolute w-1/2 h-full transition-all duration-500 flex items-center justify-center font-bold text-white ${
            isChecked ? "left-0" : "left-1/2"
          }`}
        >
          {isChecked ? "Free Plan" : "Premium Plan"}
        </span>
      </label>

      <div className="w-full max-w-5xl flex justify-center">
        {isChecked ? (
          <Box box={prePlan} />
        ) : (
          <Box box={freePlan} />
        )}
      </div>

      <div className="w-full max-w-5xl flex justify-center">
        {isChecked ? (
          <Box box={prePlanDetails} isDetailBox={true} isPremiumPlan={true} />
        ) : (
          <Box box={freePlanDetails} isDetailBox={true} isPremiumPlan={false} />
        )}
      </div>
    </div>
  );
}

export default Page;