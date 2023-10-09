import React from 'react';
import InputSlider from 'react-input-slider';
import './IntervalSettings.css';

const IntervalSettings = ({ breakInterval, studyInterval, onBreakIntervalChange, onStudyIntervalChange }) => {
  return (
<div className="interval-settings">
  <div className="interval-group">
    <h2>Study Interval</h2>
    <input
      type="range"
      min={5}
      max={90}
      value={studyInterval}
      onChange={(e) => onStudyIntervalChange(e.target.value)}
    />
    <p>{studyInterval} min</p>
  </div>

  <div className="interval-group">
    <h2>Break Interval</h2>
    <input
      type="range"
      min={1}
      max={20}
      value={breakInterval}
      onChange={(e) => onBreakIntervalChange(e.target.value)}
    />
    <p>{breakInterval} min</p>
  </div>
</div>

  );
};

export default IntervalSettings;
