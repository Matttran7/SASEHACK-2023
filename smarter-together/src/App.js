import React, { useState, useRef } from 'react';
import NumUsers from './Components/NumUsers';
import TaskCardContainer from './Components/TaskCardContainer';
import { sortHighLow } from './ProcessData/SortComponents';
import './App.css';

function App() {
  const [numUsers, setNumUsers] = useState(1);
  const taskCardContainerRefs = useRef([]);

  const logAllTaskData = () => {
    const newData = [];
    // if default 1
    if (numUsers < 1){
      const taskCardContainerInstance = taskCardContainerRefs.current[0];
      if (taskCardContainerInstance) {
        const taskCardContainerData = taskCardContainerInstance.getData();
        newData.push(taskCardContainerData);
      }
    } else { // meaning the user actually input a number
    for (let i = 0; i < numUsers; i++) {
      const taskCardContainerInstance = taskCardContainerRefs.current[i];
      if (taskCardContainerInstance) {
        const taskCardContainerData = taskCardContainerInstance.getData();
        newData.push(taskCardContainerData);
      }
    }
  } // else
    
    const sortedData = sortHighLow(newData);
    console.log(sortedData);
  };

  return (
    <div className='NumberUsersInput'>
      {/* get NumUsers input*/}
      <NumUsers setNumUsers={setNumUsers} />
      {/* dynamic TaskCardContainer based on numUsers*/}
      <div className="task-card-container-list">
      {[...Array(numUsers || 1)].map((_, index) => (
        <TaskCardContainer key={index} id={`taskCardContainer${index}`} ref={(ref) => (taskCardContainerRefs.current[index] = ref)} />
      ))}
      </div>
      <button onClick={logAllTaskData}>Log All Task Data</button>
    </div>
  );
}

export default App;
