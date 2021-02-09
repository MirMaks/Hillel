// С помощью GET запроса получаем список
// https://jsonplaceholder.typicode.com/todos
// Ответ рендерим как список тудушек, с учетом тайтла и состояния(сделано / не сделано)

function getTodos() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

    xhr.send();

    xhr.onload = function () {
        const jsonTodos = xhr.response;
        const todos = JSON.parse(jsonTodos);
        const todoElemets = todos.map((todo) => {
            return todo;
        });
        document.querySelector('.container').innerHTML = (`<ul class="ul-todo"><h1>Todos</h1></ul>`);
        todoElemets.forEach(todo => {
            document.querySelector('.ul-todo').innerHTML += (`<li class="li-todo ${todo.completed}">${'userId: ' + todo.userId + ', ' + 'id: ' + todo.id + ', ' + 'title: ' + todo.title + ', ' + 'completed: ' + todo.completed + '.'} </li > `);
        });
    }
}

getTodos();
