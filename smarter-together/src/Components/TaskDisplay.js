import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard'; 
import './TaskDisplay.css'

const TaskDisplay = ({ sortedLists, setSortedLists }) => {
    const deleteTask = (id) => {

      const updatedSortedLists = sortedLists.map((sortedData) =>
        sortedData.filter((task) => task.id !== id)
      );

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
                  {/* sse the TaskCard component to display each task */}
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