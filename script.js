const newTodoInput =document.getElementById('newTodo');
const addBtn = document. getElementById('addBtn')
const todoList = document.getElementById('todoList')

function addTodo(){

    const newTodoText = newTodoInput.value;
    newTodoInput.value= '';

    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span')
    const deleteBtn = document.createElement('button')

    completeCheckbox.type ='Checkbox';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';

    todoList.appendChild(listItem);
}

addBtn.addEventListener('click',addTodo)