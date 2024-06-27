"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';

const HomePage = () => {
  const [bgColor, setBgColor] = useState('bg-white');

  const handleBackgroundChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`${bgColor} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <PomodoroTimer onBackgroundChange={handleBackgroundChange} />
      </div>
    </div>
  );
};

export default HomePage;
