import React from 'react';
import TaskCard from './TaskCard';

const TaskCardContainer = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <div className="task-list">
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskCardContainer;
