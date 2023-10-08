import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard'; // Import the TaskCard component
import './TaskDisplay.css'

const TaskDisplay = ({ sortedLists, setSortedLists }) => {
    const deleteTask = (id) => {
      // Filter tasks from the sortedLists prop
      const updatedSortedLists = sortedLists.map((sortedData) =>
        sortedData.filter((task) => task.id !== id)
      );
  
      // You can optionally set the state here if needed
      setSortedLists(updatedSortedLists);
    };
  
    return (
      <div className='boxContainingContainers'>
        <div className='taskDisplayContainer'>
          {sortedLists.map((sortedData, index) => (
            <div key={index} className='sortedListBoxDisplay'>
              <p className='titleOfSortedListBeingDisplayed'>List {index + 1}</p>
              {sortedData.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {/* Use the TaskCard component to display each task */}
                  <TaskCard key={item.id} task={item} onDelete={deleteTask} />
                </div>
              ))}
            </div>
          ))}
        </div>
    </div>
    );
  };
  
  export default TaskDisplay;