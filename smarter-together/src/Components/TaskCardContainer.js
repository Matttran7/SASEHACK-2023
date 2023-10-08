import React, { useState, useImperativeHandle, forwardRef } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const TaskCardContainer = ({ id }, ref) => {
  const [taskList, setTaskList] = useState([]);

  const getData = () => {
    return taskList;
  };
  useImperativeHandle(ref, () => ({
    getData,
  }));
  const deleteTask = (taskName) => {
    // Filter out the task to be deleted
    const updatedTaskList = taskList.filter((task) => task.taskName !== taskName);
    setTaskList(updatedTaskList);
  };

  return (
    <div id={id}>
      <div>
        {taskList && taskList.map((task) => (
          <TaskCard key={task.taskName} task={task} onDelete={deleteTask} />
        ))}
      </div>
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default forwardRef(TaskCardContainer);
