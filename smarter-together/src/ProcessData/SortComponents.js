function sortHighLow(listOfTasks){
    for (let i = 0; i < listOfTasks.length; i++) {
        const currentTaskList = listOfTasks[i];
        currentTaskList.sort((taskA, taskB) => {
            const sumA = taskA.difficulty + taskA.urgency;
            const sumB = taskB.difficulty + taskB.urgency;
            return sumB - sumA; // sort in descending order
        });
    } // for i
}