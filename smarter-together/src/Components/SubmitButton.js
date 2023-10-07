import React from 'react';

const SubmitButton = ({ onClick, label, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default SubmitButton;
