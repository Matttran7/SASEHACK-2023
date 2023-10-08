import React from 'react';
import './TaskCard.css';
const TaskCard = ({ task, onDelete }) => {
    const { id, taskName, difficulty, urgency } = task; // str , int , int

    return (
        <div className="task-card">
            <h3>{taskName}</h3>
            <p> Difficulty: {difficulty} </p>
            <p> Urgency: {urgency} </p>
            <span onClick={() => onDelete(id)} className="material-symbols-outlined">Delete</span>
        </div>
    );
};

export default TaskCard;
