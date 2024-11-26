"use client";

import React, { useState, useEffect } from 'react';
import Row from '@components/Row';
import Button from '@components/Button';

function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const registeredUsers = [
    { 'name': 'Micheal Carlon', 'email': 'micheal@gmail.com', 'image': '/assets/images/user1.webp' },
    { 'name': 'Samree Mathun', 'email': 'samree@gmail.com', 'image': '/assets/images/user2.png' },
    { 'name': 'Liza Perera', 'email': 'liza@gmail.com', 'image': '/assets/images/user3.jpg' },
    { 'name': 'Hayath Sareej', 'email': 'hayasareej@gmail.com', 'image': '/assets/images/user1.webp' },
    { 'name': 'Lavishankar Shanmugaraj', 'email': 'hayasareej@gmail.com', 'image': '/assets/images/user2.png' },
    { 'name': 'Micheal Carlon', 'email': 'micheal@gmail.com', 'image': '/assets/images/user3.jpg' },
    { 'name': 'Samree Mathun', 'email': 'samree@gmail.com', 'image': '/assets/images/user1.webp' },
    { 'name': 'Liza Perera', 'email': 'liza@gmail.com', 'image': '/assets/images/user2.png' },
    { 'name': 'Hayath Sareej', 'email': 'hayasareej@gmail.com', 'image': '/assets/images/user3.jpg' },
    { 'name': 'Lavishankar Shanmugaraj', 'email': 'hayasareej@gmail.com', 'image': '/assets/images/user1.webp' }
  ];

  const proUsers = [
    { 'name': 'Hamsayini Snethilrasa', 'email': 'hamsasenthil@gmail.com', 'image': '/assets/images/user3.jpg' },
    { 'name': 'Naheedha Maryam', 'email': 'mary@gmail.com', 'image': '/assets/images/user1.webp' },
    { 'name': 'Amrah safwan', 'email': 'amrah@gmail.com', 'image': '/assets/images/user3.jpg' },
    { 'name': 'Shuraifa Rafeek', 'email': 'shuraif@gmail.com', 'image': '/assets/images/user2.png' },
    { 'name': 'Afrose Nazeer', 'email': 'afrose@gmail.com', 'image': '/assets/images/user1.webp' }
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
        <span
          className={`absolute w-1/2 h-full transition-all duration-500 flex items-center justify-center font-bold text-white ${
            isChecked ? 'left-0' : 'left-1/2'
          }`}
        >
          {isChecked ? 'Registered Users' : 'Pro Users'}
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

      <div className="flex justify-end w-full max-w-xl mt-4">
        <Button label="Download PDF" />
      </div>
    </div>
  );
}

export default Page;