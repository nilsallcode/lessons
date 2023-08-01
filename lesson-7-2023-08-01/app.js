let form = document.querySelector('form');
let taskInput = document.querySelector('#task-input');
let submitBtn = document.querySelector('#submit-button');
let taskList = document.querySelector('#task-list');
let errorMessage = document.querySelector('#error-message');
let noTasksText = document.querySelector('#no-tasks-text');

submitBtn.addEventListener("click", function () {
    if (taskInput.value === '') {
        errorMessage.innerHTML = 'Please enter a task';
        errorMessage.classList.add('p-2', 'bg-red-500', 'text-white');
    } else {
        const newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value;
        newTask.classList.add('p-2', 'm-2', 'bg-white');

        taskList.appendChild(newTask);

        noTasksText.innerHTML = '';
        
        errorMessage.innerHTML = '';
        errorMessage.classList.remove('p-2', 'bg-red-500', 'text-white');
    }
});