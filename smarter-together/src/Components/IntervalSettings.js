import React from 'react';
import InputSlider from 'react-input-slider';

const IntervalSettings = ({ breakInterval, studyInterval, onBreakIntervalChange, onStudyIntervalChange }) => {
  return (
    <div>
      <h2>Study Interval</h2>
      <InputSlider
        axis='x'
        x={studyInterval}
        xmin={0.1}
        xmax={90}
        onChange={({ x }) => {
          onStudyIntervalChange(x);
        }}
      />
      <p>Minutes: {studyInterval }</p>

      <h2>Break Interval</h2>
      <InputSlider
        axis='x'
        x={breakInterval}
        xmin={1}
        xmax={20}
        onChange={({ x }) => {
          onBreakIntervalChange(x);
        }}
      />
      <p>Minutes: {breakInterval}</p>

    </div>
  );
};

export default IntervalSettings;