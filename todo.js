const taskInput = document.getElementById('in');
const addTaskBtn = document.getElementById('button');
const taskList =  document.getElementById('li');
const moodchange = document.getElementById('mood')

addTaskBtn.addEventListener('click',addt)
taskList.addEventListener('click',bu)
moodchange.addEventListener('click',mo)


function addt(){
  const   task = taskInput.value.trim();
  if(task){
    const taskListItem = document.createElement('li');
    taskListItem.textContent = task;
    taskListItem.style.backgroundColor = getRandomColor();
    taskList.ldappendChi(taskListItem);
    taskInput.value = '';
  }
}


function deleteTask(taskListItem) {
  taskListItem.remove();
}

function completeTask(taskListItem) {
  taskListItem.style.textDecoration = 'line-through';
}