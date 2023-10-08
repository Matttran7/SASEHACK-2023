import React, { useState } from 'react';
import './NumUsers.css';

const NumUsers = ({ setNumUsers }) => {
  const [userNumber, setUserNumber] = useState(1);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value.trim());
    setUserNumber(value);
    setNumUsers(value);
  };

  return (
    <div>
      <header>
        <div className='UserInputBox'>
          <h2>Group Size</h2>
          <input
            type="range"
            id="userNumber"
            min="1"
            max="8"
            value={userNumber}
            onChange={handleInputChange}
          />
          <p>{userNumber}</p>
        </div>
      </header>
    </div>
  );
};

export default NumUsers;
