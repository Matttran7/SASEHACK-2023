function sortHighLow(listOfTasks){
    const sortedData = listOfTasks.map((currentTaskList) => {
      return currentTaskList.slice().sort((taskA, taskB) => {
        const sumA = taskA.difficulty + taskA.urgency;
        const sumB = taskB.difficulty + taskB.urgency;
        return sumB - sumA; // sort in descending order
      });
    });
    return sortedData;
  }
  
  export { sortHighLow };