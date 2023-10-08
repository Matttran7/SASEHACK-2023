import { v4 as uuidv4 } from 'uuid'
import InputSlider from 'react-input-slider';
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ taskList, setTaskList }) => {
    const [taskName, setTaskName] = useState('');
    const [difficulty, setDifficulty] = useState(5);
    const [urgency, setUrgency] = useState(5);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();

        if (!taskName.trim()) {
            setEmptyFields(['taskName']);
            return;
        }

        const newTask = {
            id: uuidv4(),
            taskName,
            difficulty,
            urgency,
        };

        // Update the taskList in the parent component
        setTaskList((prevTaskList) => [...prevTaskList, newTask]);

        setTaskName('');
        setDifficulty(5);
        setUrgency(5);
        setEmptyFields([]);
    };

    return (
        <div className='formContainer'>
            <form className="create" onSubmit={handleAddTask}>
                <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className={emptyFields.includes('taskName') ? 'error' : ''}
                placeholder='Task'
                />

                <br></br>
                <span className='SpanWord'>Difficulty </span>
                <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={difficulty}
                onChange={(e) => setDifficulty(Number(e.target.value))}
                />
                <span className='SpanVal'>{difficulty}</span><br></br>


                <span className='SpanWord'>Urgency </span>
                <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={urgency}
                onChange={(e) => setUrgency(Number(e.target.value))}
                />
                <span className='SpanVal'>{urgency}</span>

                <div className="button-container">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>

    );
};

export default TaskForm;