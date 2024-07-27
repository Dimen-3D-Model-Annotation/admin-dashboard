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
        className="relative w-80 h-10 rounded-full bg-custom-togglegray cursor-pointer mb-4"
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
            isChecked ? 'bg-custom-gray left-1/2' : 'bg-custom-gray left-0'
          }`}
        >
          {isChecked ? 'Pro Users' : 'Registered Users'}
        </span>
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