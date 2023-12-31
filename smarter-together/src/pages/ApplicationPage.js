import React, { useState, useRef } from 'react';
import NumUsers from '../Components/NumUsers';
import TaskCardContainer from '../Components/TaskCardContainer';
import { sortHighLow } from '../ProcessData/SortComponents';
import './ApplicationPage.css';
import IntervalSettings from '../Components/IntervalSettings';
import Timer from '../Components/Timer';
import TaskDisplay from '../Components/TaskDisplay';
import { Link } from 'react-router-dom';

function ApplicationPage() {
  const [numUsers, setNumUsers] = useState(1);
  const [sortedLists, setSortedLists] = useState([]);
  const [breakInterval, setBreakInterval] = useState(10);
  const [studyInterval, setStudyInterval] = useState(30);
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
    setSubmitClicked(true); // set submitClicked to true to indicate that data has been logged.
  };

  return (

    <div className='AppContainer'>


      <div className='NumberUsersInput'>
      <header className="header">
        <div className="line1">
          {!submitClicked && <NumUsers className="numusers" setNumUsers={setNumUsers} />}
          {!submitClicked && <div className="interval-settings-container">
            <IntervalSettings  className="intervalsettings" 
                breakInterval={breakInterval}
                studyInterval={studyInterval}
                onBreakIntervalChange={setBreakInterval}
                onStudyIntervalChange={setStudyInterval}
              /> </div>
          }
          {!submitClicked && <button className="SubmitBtn" onClick={logAllTaskData}>sort tasks</button>}
        </div>
        </header>
        <div className='line2'>
          <div className="task-card-container-list">    
            {!submitClicked && [...Array(numUsers || 1)].map((_, index) => (
              <TaskCardContainer key={index} id={`taskCardContainer${index}`} ref={(ref) => (taskCardContainerRefs.current[index] = ref)} />
            ))}
          </div>
        </div>

        {submitClicked && <Link to="/"><button className='goBackLandingBtn'>home</button></Link>}
        {submitClicked && <Timer breakInterval={breakInterval} studyInterval={studyInterval}/>}

        <div className='displayTasks'>
          {submitClicked && <TaskDisplay sortedLists={sortedLists} setSortedLists={setSortedLists}/>}
        </div>

      </div>
    </div>

  );
}

export default ApplicationPage;