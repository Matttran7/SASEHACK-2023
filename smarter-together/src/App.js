import React from 'react';
import NumUsers from './Components/NumUsers';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';
import TaskCardContainer from './Components/TaskCardContainer';

function App() {
  // const [taskList, setTaskList] = useState([]); // Initialize the taskList state here
  const [contextList, setContextList] = useState([]);
  const testBtn = () => {
    console.log(contextList)
  }

 



  return (
      <div className='NumberUsersInput'>
        <NumUsers contextList={contextList}/>
        {/* <TaskForm taskList={taskList} setTaskList={setTaskList} /> */}
        {/* <TaskCardContainer/> */}
        <button onClick={testBtn}>Testing</button>
      </div>
  );
}

export default App;
