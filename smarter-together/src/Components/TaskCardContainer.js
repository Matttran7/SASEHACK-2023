import React from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import { useState, useEffect } from 'react';

const TaskCardContainer = ({  }) => {

  const [taskList, setTaskList] = useState([])
  
  const testBtn = () => {
    console.log(taskList)
  }


  return (
    <div>
      {/* <div>
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          <div className="task-list">
            {tasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>

        )}
      </div> */}

      <div>
        {taskList && taskList.map((task) => (
            <TaskCard key={task.taskName} task={task} />
        ))}
      </div>

      <TaskForm taskList={taskList} setTaskList={setTaskList} />

      <button onClick={testBtn}>Test</button>

    </div>

    


  );
};

export default TaskCardContainer;
