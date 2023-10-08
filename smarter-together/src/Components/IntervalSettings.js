import React from 'react';
import InputSlider from 'react-input-slider';

const IntervalSettings = ({ breakInterval, studyInterval, onBreakIntervalChange, onStudyIntervalChange }) => {
  return (
    <div>
      <h2>Study Interval</h2>
      <InputSlider
        axis='x'
        x={studyInterval}
        xmin={300}
        xmax={5400}
        onChange={({ x }) => {
          onStudyIntervalChange(x);
        }}
      />
      <p>Minutes: {Math.floor(studyInterval / 60)}</p>
      <p>Seconds: {studyInterval % 60}</p>

      <h2>Break Interval</h2>
      <InputSlider
        axis='x'
        x={breakInterval}
        xmin={60}
        xmax={1200}
        onChange={({ x }) => {
          onBreakIntervalChange(x);
        }}
      />
      <p>Minutes: {Math.floor(breakInterval / 60)}</p>
      <p>Seconds: {breakInterval % 60}</p>
    </div>
  );
};

export default IntervalSettings;