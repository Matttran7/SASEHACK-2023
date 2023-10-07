import React, { useState, useRef } from 'react';
import NumUsers from './Components/NumUsers';
import TaskCardContainer from './Components/TaskCardContainer';

function App() {
  const [numUsers, setNumUsers] = useState(0);
  const taskCardContainerRefs = useRef([]);

  const logAllTaskData = () => {
    const newData = [];
    for (let i = 0; i < numUsers; i++) {
      const taskCardContainerInstance = taskCardContainerRefs.current[i];
      if (taskCardContainerInstance) {
        const taskCardContainerData = taskCardContainerInstance.getData();
        newData.push(taskCardContainerData);
      }
    }
    console.log(newData);
  };

  return (
    <div className='NumberUsersInput'>
      <NumUsers setNumUsers={setNumUsers} />
      {[...Array(numUsers)].map((_, index) => (
        <TaskCardContainer key={index} id={`taskCardContainer${index}`} ref={(ref) => (taskCardContainerRefs.current[index] = ref)} />
      ))}
      <button onClick={logAllTaskData}>Log All Task Data</button>
    </div>
  );
}

export default App;
