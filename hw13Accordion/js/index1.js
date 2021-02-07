// Написать class Accordion.Начальная структура:
// index.html
//     < div class="list" >
//   <div>
//     <div class="title">Header 1</div>
//     <div class="body">Body 1</div>
//   </div>
//   <div>
//     <div class="title">Header 2</div>
//     <div class="body">Body 2</div>
//   </div>
//   <div>
//     <div class="title">Header 3</div>
//     <div class="body">Body 3</div>
//   </div>
//   </div >
// </body >
//     script.js
// new Accordeon(document.getElementById('list'));
// Классы можно использовать для определения хедеров и боди каждого элемента.
// Можно и нужно добавлять свои классы для стилизации и определения какой активный.
// По умолчанию всё содержимое должно быть скрыто.При клике на заголовок должен отобразиться соответсвующий body.Если сейчас открыт один элемент и мы нажали на другой header, то текущий закрывается, а новый открывается.Если всё время кликаем по существующему header то просто сменяем его состояние - открыт / закрыт.

class Accordion {
    constructor(list) {
        this.list = list;
        this.curreTabId = null;
        this.init();
        this.createEventListener();

    }
    init() {
        // Добавить класс id каждому элементу
        // Cкрыть body
        const tabs = this.list.querySelectorAll('.body');
        const titleClass = this.list.querySelectorAll('.title');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].className += 'item-' + i;
        }
        for (let i = 0; i < titleClass.length; i++) {
            titleClass[i].className += ' header-' + i;
        }
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.add('tab');
        }
        this.curreTabId = 0;
        this.tabs = tabs;

    }
    createEventListener() {
        this.list.addEventListener("click", (event) => {
            if (event.target.closest('.header-0')) {
                this.list.querySelector('.item-0').classList.toggle('tab');
                this.list.querySelector('.item-1').classList.add('tab');
                this.list.querySelector('.item-2').classList.add('tab');
            } else if (event.target.closest('.header-1')) {
                this.list.querySelector('.item-1').classList.toggle('tab');
                this.list.querySelector('.item-0').classList.add('tab');
                this.list.querySelector('.item-2').classList.add('tab');
            } else if (event.target.closest('.header-2')) {
                this.list.querySelector('.item-2').classList.toggle('tab');
                this.list.querySelector('.item-0').classList.add('tab');
                this.list.querySelector('.item-1').classList.add('tab');
            }
        });
    }
}