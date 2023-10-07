import React from 'react';
import NumUsers from './Components/NumUsers';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]); // Initialize the taskList state here

  const testBtn = () => {
    console.log(taskList)
  }

  return (
      <div className='NumberUsersInput'>
        <NumUsers />
        <TaskForm taskList={taskList} setTaskList={setTaskList} />
        <button onClick={testBtn}>dd</button>
      </div>
  );
}

export default App;
