// С помощью GET запроса получаем список
// https://jsonplaceholder.typicode.com/todos
// Ответ рендерим как список тудушек, с учетом тайтла и состояния(сделано / не сделано)

<<<<<<< HEAD
function getTodos() {
    const xhr = new XMLHttpRequest();
=======
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

        xhr.send();

        xhr.onload = function () {
            const jsonTodos = xhr.response;
            const todos = JSON.parse(jsonTodos);
            console.log(todos.length);
            
            todos.map((todo) => {
                console.log(todo);
            });


        }
    }
    this.createTodoList = function () {
        const ulTodo = document.querySelector('.container').innerHTML = ('<ul class="ul-todo"></ul>');
>>>>>>> fa60db80ec127e734087ef18759a63760cafee94

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

<<<<<<< HEAD
getTodos();

=======
const todoList = new Todo();
todoList.getTodos();
todoList.createTodoList();
>>>>>>> fa60db80ec127e734087ef18759a63760cafee94
