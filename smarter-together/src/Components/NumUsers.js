import React, { useState } from 'react';
import './NumUsers.css';
import TaskCardContainer from './TaskCardContainer';

const NumUsers = ( contextList ) => {
  const [userNumber, setUserNumber] = useState('');

  // const [taskList, setTaskList] = useState([]);



  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    // num 1-9
    setUserNumber(value === '' ? '' : parseInt(value) || '');
  };

  const renderTaskCardContainer = () => {
    const taskCardContainers = [];
    for (let i = 1; i <= parseInt(userNumber); i++) {
        taskCardContainers.push(<TaskCardContainer key={i} />);
    }
    contextList = taskCardContainers;
    return taskCardContainers;
  };

  const generateTasksForUser = (userId) => {
    return [
    ];
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
      {renderTaskCardContainer()}
    </div>
  );
};

export default NumUsers;