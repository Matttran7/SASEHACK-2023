import React from 'react';

const TaskCard = ({ task }) => {
    const { name, difficulty, urgency } = task; // str , int , int

    return (
        <div className="task-card">
            <h3>{name}</h3>
            <p> Difficulty: {difficulty} </p>
            <p> Urgency: {urgency} </p>
        </div>
    );
};

export default TaskCard;
