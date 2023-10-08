import React from 'react';
import './TaskCard.css';
const TaskCard = ({ task, onDelete }) => {
    const { id, taskName, difficulty, urgency } = task; // str , int , int

    return (
        <div className="task-card">
            <h3>{taskName}</h3>
            <p> Difficulty: {difficulty} </p>
            <p> Urgency: {urgency} </p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default TaskCard;
