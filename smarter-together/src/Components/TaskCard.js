import React from 'react';

const TaskCard = ({ task, onDelete }) => {
    const { taskName, difficulty, urgency } = task; // str , int , int

    return (
        <div className="task-card">
            <h3>{taskName}</h3>
            <p> Difficulty: {difficulty} </p>
            <p> Urgency: {urgency} </p>
            <button onClick={() => onDelete(taskName)}>Delete</button>
        </div>
    );
};

export default TaskCard;