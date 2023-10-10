import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Timer.css';

const Timer = ({ studyInterval, breakInterval }) => {
  const [currentTime, setCurrentTime] = useState(studyInterval * 60); // tnitial time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [intervalType, setIntervalType] = useState('Study');
  const [showBreakTimeModal, setShowBreakTimeModal] = useState(false);
  const [showStudyTimeModal, setShowStudyTimeModal] = useState(false);
  useEffect(() => {
    let timer;

    if (isRunning && currentTime > 0) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (currentTime === 0) {
      if (intervalType === 'Study') {
        setCurrentTime(breakInterval * 60);
        setIntervalType('Break');
        setShowBreakTimeModal(true); // Show the break time modal
        setIsRunning(false); // pause the timer after transitioning to break
      } else {
        setCurrentTime(studyInterval * 60);
        setIntervalType('Study');
        setShowStudyTimeModal(true)
        setIsRunning(false); // pause the timer after transitioning to study
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, currentTime, studyInterval, breakInterval, intervalType]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTime(studyInterval * 60);
    setIntervalType('Study');
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const closeBreakTimeModal = () => {
    setShowBreakTimeModal(false);
  };
  const closeStudyTimeModal = () => {
    setShowStudyTimeModal(false);
  };
  return (
    <div className='timer-container'>
      <h2>{intervalType} Time</h2>
      <div>
        <p>{formatTime(currentTime)}</p>
      </div>
      <div>
        <button onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? 'pause' : 'start'}
        </button>
      </div>
      {showBreakTimeModal && (
        <Modal isOpen={true} onClose={closeBreakTimeModal} isBreak={true} />
      )}
      {showStudyTimeModal && (
        <Modal isOpen={true} onClose={closeStudyTimeModal} isBreak={false} />
      )}
    </div>
  );
};

export default Timer;