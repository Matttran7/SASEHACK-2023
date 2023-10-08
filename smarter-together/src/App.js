import React, { useState, useRef } from 'react';
import NumUsers from './Components/NumUsers';
import TaskCardContainer from './Components/TaskCardContainer';
import { sortHighLow } from './ProcessData/SortComponents';
import './App.css';
import IntervalSettings from './Components/IntervalSettings';
import Timer from './Components/Timer';

function App() {
  const [numUsers, setNumUsers] = useState(1);
  const [sortedLists, setSortedLists] = useState([]);
  const [breakInterval, setBreakInterval] = useState(5);
  const [studyInterval, setStudyInterval] = useState(25);
  const [submitClicked, setSubmitClicked] = useState(false);
  const taskCardContainerRefs = useRef([]);

  const logAllTaskData = () => {
    const newData = [];

    if (numUsers < 1) {
      const taskCardContainerInstance = taskCardContainerRefs.current[0];
      if (taskCardContainerInstance) {
        const taskCardContainerData = taskCardContainerInstance.getData();
        newData.push(taskCardContainerData);
      }
    } else {
      for (let i = 0; i < numUsers; i++) {
        const taskCardContainerInstance = taskCardContainerRefs.current[i];
        if (taskCardContainerInstance) {
          const taskCardContainerData = taskCardContainerInstance.getData();
          newData.push(taskCardContainerData);
        }
      }
    }

    const sortedData = sortHighLow(newData);
    setSortedLists(sortedData);
    setSubmitClicked(true); // Set submitClicked to true to indicate that data has been logged.
  };

  return (
    <div className='NumberUsersInput'>

      {!submitClicked && <NumUsers setNumUsers={setNumUsers} />}

      
      <div className="task-card-container-list">    
      {!submitClicked && [...Array(numUsers || 1)].map((_, index) => (
        <TaskCardContainer key={index} id={`taskCardContainer${index}`} ref={(ref) => (taskCardContainerRefs.current[index] = ref)} />
      ))}
      </div>
      
      {!submitClicked && <IntervalSettings
            breakInterval={breakInterval}
            studyInterval={studyInterval}
            onBreakIntervalChange={setBreakInterval}
            onStudyIntervalChange={setStudyInterval}
          />}

      {!submitClicked && <button onClick={logAllTaskData}>Log All Task Data</button>}

      {submitClicked && <Timer breakInterval={breakInterval} studyInterval={studyInterval}/>}

      {submitClicked && (
        <div>
          
          <h2>Tasks TO-DO</h2>
          {sortedLists.map((sortedData, index) => (
            
            <div key={index}>
              {/* Render your sorted data here */}

              <p>List {index + 1}</p>
              {sortedData.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <p>Task Name: {item.taskName}</p>
                </div>
              ))}
            </div>
          ))}

          

          {/* <button onClick={() => {setSubmitClicked(!submitClicked)}}>Go Back</button> */}
        </div>
      )}
    </div>
  );
}

export default App;