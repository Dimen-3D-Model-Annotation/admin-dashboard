"use client";

import React, { useState, useEffect } from 'react';
import Row from '@components/Row';

function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const registeredUsers = [
    { 'name': 'Micheal Carlon', 'email': 'micheal@gmail.com' },
    { 'name': 'Samree Mathun', 'email': 'samree@gmail.com' },
    { 'name': 'Liza Perera', 'email': 'liza@gmail.com' },
    { 'name': 'Hayath Sareej', 'email': 'hayasareej@gmail.com' },
    { 'name': 'Lavishankar Shanmugaraj', 'email': 'hayasareej@gmail.com' },
    { 'name': 'Micheal Carlon', 'email': 'micheal@gmail.com' },
    { 'name': 'Samree Mathun', 'email': 'samree@gmail.com' },
    { 'name': 'Liza Perera', 'email': 'liza@gmail.com' },
    { 'name': 'Hayath Sareej', 'email': 'hayasareej@gmail.com' },
    { 'name': 'Lavishankar Shanmugaraj', 'email': 'hayasareej@gmail.com' }
  ];

  const proUsers = [
    { 'name': 'Maryam', 'email': 'mary@gmail.com' },
    { 'name': 'Amrah', 'email': 'amrah@gmail.com' },
    { 'name': 'Shuraifa', 'email': 'shuraif@gmail.com' },
    { 'name': 'Afrose', 'email': 'afrose@gmail.com' }
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
        className="flex bg-custom-togglegray cursor-pointer relative w-80 h-10 rounded-full items-center mb-4"
      >
        <input
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <span className="absolute left-2 text-white font-bold">
          Registered Users
        </span>
        <span className="absolute right-2 text-white font-bold">
          Pro Users
        </span>
        <span
          className={`absolute w-1/2 h-3/4 bg-custom-gray rounded-full transition-all duration-500 ${
            isChecked ? 'left-1/2' : 'left-0'
          }`}
        />
      </label>
      <div className="w-full max-w-xl">
        {isChecked ? (
          <>
            <div className="text-center text-white mb-4"></div>
            <Row row={proUsers} />
          </>
        ) : (
          <Row row={registeredUsers} />
        )}
      </div>
    </div>
  );
}

export default Page;