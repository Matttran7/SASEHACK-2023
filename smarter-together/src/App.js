import React from 'react';
import NumUsers from './Components/NumUsers';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';
import SubmitButton from './Components/SubmitButton';
import {sortHighLow} from './ProcessData/SortComponents';

function App() {
  const [taskList, setTaskList] = useState([]); 
  const [isSorted, setSorted] = useState(false);

  const testBtn = () => {
    console.log(taskList)
  }
  const handleToggleSort = () => {
    if (!isSorted) {
      setSorted(true);
    }
  };

  return (
      <div className='NumberUsersInput'>
        {!isSorted && <NumUsers />}
        <TaskForm taskList={taskList} setTaskList={setTaskList} />
        <button onClick={testBtn}>dd</button>
        {!isSorted && <SubmitButton onClick={handleToggleSort} label="Sort" />}
      </div>
  );
}

export default App;
