import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PomodoroTimer = ({ onBackgroundChange }) => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            setIsRunning(false);
            toast('Time is up!', { type: 'success' });
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    onBackgroundChange('bg-green-500');
  };

  const stopTimer = () => {
    setIsRunning(false);
    onBackgroundChange('bg-red-500');
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
    onBackgroundChange('bg-blue-500');
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-6xl font-bold mb-4">{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer} className="bg-green-600 text-white px-6 py-3 m-2 rounded">Start</button>
        <button onClick={stopTimer} className="bg-red-600 text-white px-6 py-3 m-2 rounded">Stop</button>
        <button onClick={resetTimer} className="bg-blue-600 text-white px-6 py-3 m-2 rounded">Reset</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PomodoroTimer;
