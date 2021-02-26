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
        this.init();
        this.createEventListener();

    }
    init() {
        const bodys = this.list.querySelectorAll('.body');
        const titles = this.list.querySelectorAll('.title');

        for (let i = 0; i < this.list.children.length; i++) {
            this.list.children[i].className += ('accordion-section');
        }

        const accordionSection = document.querySelectorAll('.accordion-section');

        for (let i = 0; i < bodys.length; i++) {
            bodys[i].classList = ('accordion-body');
        }

        for (let i = 0; i < titles.length; i++) {
            titles[i].classList = ('accordion-title');
        }
        this.accordionSection = accordionSection;
    }

    createEventListener() {
        this.accordionSection.forEach((section) => {
            section.addEventListener('click', (event) => {
                document.querySelectorAll('.accordion-section').forEach(function (section) {
                    section.classList.remove('active');
                })
                event.target.closest('.accordion-section').classList.add('active');
            })
        })
    }
}

