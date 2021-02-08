// С помощью GET запроса получаем список
// https://jsonplaceholder.typicode.com/todos
// Ответ рендерим как список тудушек, с учетом тайтла и состояния(сделано / не сделано)
function Todo() {
    this.getTodos = function () {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

        xhr.send();

        xhr.onload = function () {
            const jsonTodos = xhr.response;
            const todos = JSON.parse(jsonTodos);
            console.log(todos.length);
            // for (let i = 0; i < todos.length; i++) {
            //     let element = todos[i];
            //     console.log('WWW', element);
            // }
            todos.map((todo) => {
                console.log(todo);
            });


        }
    }
    this.createTodoList = function () {
        const ulTodo = document.querySelector('.container').innerHTML = ('<ul class="ul-todo"></ul>');



    }
}

const todoList = new Todo();
todoList.getTodos();
todoList.createTodoList();