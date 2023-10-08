import React, { useState, useImperativeHandle, forwardRef } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import './TaskCardContainer.css';

const TaskCardContainer = ({ id }, ref) => {
  const [taskList, setTaskList] = useState([]);

  const getData = () => {
    return taskList;
  };
  useImperativeHandle(ref, () => ({
    getData,
  }));
  const deleteTask = (id) => {
    // Filter out the task to be deleted
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <div id={id} className="task-card-container">
      <div className='task-card-content'>
        <div className='content-container'>
          {taskList && taskList.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div> 
      </div>
      <div className="banner"><p>Add Task</p></div>
      <div className="task-form">
        <TaskForm taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
};

export default forwardRef(TaskCardContainer);
