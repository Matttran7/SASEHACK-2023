import React, { useState, useRef } from 'react';
import NumUsers from './Components/NumUsers';
import TaskCardContainer from './Components/TaskCardContainer';
import { sortHighLow } from './ProcessData/SortComponents';
import IntervalSettings from './Components/IntervalSettings';

function App() {
  const [numUsers, setNumUsers] = useState(0);
  const [breakInterval, setBreakInterval] = useState(300);
  const [studyInterval, setStudyInterval] = useState(1200);
  const handleBreakIntervalChange = (newBreakInterval) => {
    setBreakInterval(newBreakInterval);
  };
  const handleStudyIntervalChange = (newStudyInterval) => {
    setStudyInterval(newStudyInterval);
  };

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
    
    const sortedData = sortHighLow(newData);
    console.log(sortedData);
  };

  return (
    <div className='NumberUsersInput'>
      
      {/* get NumUsers input*/}
      <NumUsers setNumUsers={setNumUsers} />


      {/* dynamic TaskCardContainer based on numUsers*/}
      {[...Array(numUsers)].map((_, index) => (
        <TaskCardContainer key={index} id={`taskCardContainer${index}`} ref={(ref) => (taskCardContainerRefs.current[index] = ref)} />
      ))}
      <button onClick={logAllTaskData}>Log All Task Data</button>

      <IntervalSettings 
        breakInterval={breakInterval}
        studyInterval={studyInterval}
        onBreakIntervalChange={handleBreakIntervalChange}
        onStudyIntervalChange={handleStudyIntervalChange}
        
      />
      
    </div>
  );
}

export default App;
