const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);


function handleClick() {
  const newTodo = this.previousElementSibling.value.trim();

  if (newTodo) {
    // add todo
    createTodo(newTodo);
    saveToStorage(newTodo);
    this.previousElementSibling.value = '';
  } else {
    alert('input field is empty ');
  }
}

function saveToStorage(todo) {
  const todos = JSON.parse(localStorage.getItem('tasks')) || [];

  localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('tasks'));

  if (todos) {
    todos.forEach(todo => createTodo(todo))
  }
}

function createTodo(text) {
  const li = document.createElement('li');
  li.innerText = text;
  li.className = 'todo-item';
  li.addEventListener('click', removeTodo);

  list.appendChild(li);
}

function removeTodo(event) {
  this.removeEventListener('click', removeTodo);
  this.remove();

  //удаление из памяти
  deleteFromStorage(event);
}

//удаление из памяти
function deleteFromStorage(event)
{
   const valueOfLi = event.target.innerText;    //получаем даннные объекта на который нажали
   const todos = JSON.parse(localStorage.getItem('tasks'));     //получаем массив из локальной памяти
   localStorage.setItem('tasks', JSON.stringify(todos.filter(el => el !== valueOfLi)))  //пересоздаем массив, но уже без этого элемента
}
