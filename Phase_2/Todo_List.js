const TodoList = [];
var htmlcode = '';
function addTasks(){
    const TaskField = document.querySelector('.js-TasksField');
    const Task = TaskField.value;
    TodoList.push(Task);
    htmlcode += `<p>${Task}</p>`;
    renderTasks();
    TaskField.value = '';
}

function renderTasks(){
    document.querySelector('.js-render-div')
        .innerHTML = `${htmlcode}`;
}