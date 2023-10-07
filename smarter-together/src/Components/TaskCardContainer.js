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

  return (
    <div id={id}>
      <div>
        {taskList && taskList.map((task) => (
          <TaskCard key={task.taskName} task={task} />
        ))}
      </div>
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default forwardRef(TaskCardContainer);
