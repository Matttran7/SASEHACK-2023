function sortHighLow(listOfTasks){
    const sortedData = listOfTasks.map((currentTaskList) => {
      return currentTaskList.slice().sort((taskA, taskB) => {
        const sumA = taskA.difficulty + taskA.urgency;
        const sumB = taskB.difficulty + taskB.urgency;
        return sumA - sumB; // sort in ascending order
      });
    });
    return sortedData;
  }
  
  export { sortHighLow };