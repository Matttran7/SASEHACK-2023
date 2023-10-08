import React, { useState } from 'react';

const NumUsers = ({ setNumUsers }) => {
  const [userNumber, setUserNumber] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setUserNumber(value === '' ? '' : parseInt(value) || '');
    setNumUsers(value === '' ? 0 : parseInt(value) || 0);
  };

  return (
    <div>
      <header>
        <div className='UserInputBox'>
          <input
            type="text"
            id="userNumber"
            value={userNumber}
            onChange={handleInputChange}
            pattern="[1-9]*"
            maxLength="1"
          />
        </div>
      </header>
    </div>
  );
};

export default NumUsers;
