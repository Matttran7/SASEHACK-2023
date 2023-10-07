import React, { useState } from 'react';

const NumUsers = () => {
  const [userNumber, setUserNumber] = useState('');

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // num 1-99
    setUserNumber(value);
    console.log(value + "<-----");
  };

  return (
    <div>
    <header style={{ background: '#333', padding: '10px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
        <label htmlFor="userNumber"></label>
        <input
            type="text"
            id="userNumber"
            value={userNumber}
            onChange={handleInputChange}
            pattern="[0-9]*"
            maxLength="2"
        />
        <p> Number: {parseInt(userNumber) || 0}</p>
        </div>
      </header>
    </div>
  );
};

export default NumUsers;