const todoForm = document.querySelector('form');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();
  
  // Получаем значение из поля ввода
  const todoText = todoInput.value.trim();
  
  // Создаем новый элемент списка
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;
  
  // Добавляем новый элемент списка в список дел
  todoList.appendChild(todoItem);
  
  // Очищаем поле ввода
  todoInput.value = '';
});