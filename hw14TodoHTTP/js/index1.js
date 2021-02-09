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
            const id = 'todo id: ' + todo.id;
            const title = 'title: ' + todo.title;
            const completed = 'completed: ' + todo.completed;
            const li = (`<li class="li-todo ${todo.completed}">${id + ',  ' + title + ',  ' + completed + '.'} </li >`);
            document.querySelector('.ul-todo').innerHTML += li;
        });
    }
}

getTodos();

