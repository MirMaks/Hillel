// На странице находится инпут и кнопка.
// Пользователь может ввести что - то в инпут и нажать на кнопку, после этого в списке ниже должна отобразится строка с тем что было введено в инпуте.Инпут очищается
// Каждое дела в списке может быть в двух состояниях(нужно сделать - желтый фон и сделано - зеленый фон).По умолчанию, дело в список добавляется в статусе нужно сделать.При клике на него, состояние меняется на противоположное.
// Пользователь может удалять любые дела.
// Все данные берем с сервера, и управление тоже через сервер
// https://jsonplaceholder.typicode.com/todos

const input = document.querySelector('.inputField input');
const inputButton = document.querySelector('.inputField button');
const todoListUl = document.querySelector('.todolist');

function sendTodosRequest() {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
}

const responseTodos = sendTodosRequest();

function renderTodos() {
    responseTodos.then((response) => {
        const todos = response.map(item => {
            return item;
        });
        for (key in todos) {
            todoListUl.innerHTML += (`<li class=${todos[key].completed}> ${todos[key].title} <span><i class="fas fa-trash"></i></span></li>`);
        }
    });
}
renderTodos();

function addTodos() {
    inputButton.addEventListener('click', () => {
        if (input.value !== '') {
            todoListUl.innerHTML += `<li>${input.value}<span><i class="fas fa-trash"></i></span></li>`;
            input.value = '';
        }
    })
}
addTodos();

function removeTodos() {
    todoListUl.addEventListener('click', (event) => {
        const todosRemove = event.target.closest('.todolist li');
        if (event.target.closest('.todolist li span')) {
            todosRemove.remove();
        }
    })
}
removeTodos();

function changeCompletedTodos() {
    todoListUl.addEventListener('click', (event) => {
        const todosCompleted = event.target.closest('.todolist li');
        if (event.target.closest('.todolist li')) {
            todosCompleted.classList.toggle('true');
        }
    })
}
changeCompletedTodos();