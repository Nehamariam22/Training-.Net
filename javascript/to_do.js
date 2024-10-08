function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;
    return li;
}
function addTask(task) {
    if (task.trim() === '') return; 
    const list = document.getElementById('task-list');
    const taskElement = createTaskElement(task);
    list.appendChild(taskElement);
    document.getElementById('task-input').value = '';
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function toggleTaskCompletion(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle('task-completed', checkbox.checked);
}

document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    addTask(taskInput.value);
});

document.getElementById('task-list').addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('task-checkbox')) {
        toggleTaskCompletion(target);
    }
    
    if (target.classList.contains('delete-btn')) {
        const taskElement = target.parentElement;
        deleteTask(taskElement);
    }
});