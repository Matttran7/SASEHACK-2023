import { v4 as uuidv4 } from 'uuid'
import InputSlider from 'react-input-slider';
import React, { useState } from 'react';

const TaskForm = ({ taskList, setTaskList }) => {
    const [taskName, setTaskName] = useState('');
    const [difficulty, setDifficulty] = useState(50);
    const [urgency, setUrgency] = useState(50);
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
        setDifficulty(50);
        setUrgency(50);
        setEmptyFields([]);
    };

    return (
        <form className="create" onSubmit={handleAddTask}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className={emptyFields.includes('taskName') ? 'error' : ''}
            />

            <label>Task Difficulty:</label>
            <InputSlider
                axis="x"
                x={difficulty}
                xmin={0}
                xmax={100}
                onChange={({ x }) => setDifficulty(x)}
            />

            <label>Task Urgency:</label>
            <InputSlider
                axis="x"
                x={urgency}
                xmin={0}
                xmax={100}
                onChange={({ x }) => setUrgency(x)}
            />

            <button type="submit">Add A Task</button>
        </form>
    );
};

export default TaskForm;