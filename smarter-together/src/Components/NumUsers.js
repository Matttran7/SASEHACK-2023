import React, { useState } from 'react';

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
        <label htmlFor="userNumber">Select Number of Users:</label>
          <input
            type="range"
            id="userNumber"
            min="1"
            max="8"
            value={userNumber}
            onChange={handleInputChange}
          />
          <span>{userNumber}</span>
        </div>
      </header>
    </div>
  );
};

export default NumUsers;
