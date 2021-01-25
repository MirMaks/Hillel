document.querySelector('.button-js').addEventListener('click', onAddButtonClick);
const valuesFromInput = document.querySelector('.input-js');
function onAddButtonClick() {
    if (valuesFromInput.value !== '') {
        document.querySelector('.empty-js').hidden = true;
        document.querySelector('.text-output-ul-js').innerHTML += `<li class ="list-item-js">${valuesFromInput.value}<button type="button" class="btn btn-secondary btn-sm button-del-js">Delete</button></li>`;
        valuesFromInput.value = '';
    }
}
const list = document.querySelector('.text-output-ul-js');
list.addEventListener('click', (deleteTheList) => {
    const listItem = deleteTheList.target.closest('.list-item-js');
    if (deleteTheList.target.closest('.button-del-js')) {
        listItem.remove();
    }
    if (list.firstChild === null) {
        document.querySelector('.empty-js').hidden = false;
    }

})
list.addEventListener('click', (changeСolor) => {
    const listItemColor = changeСolor.target.closest('.list-item-js');
    if (changeСolor.target.closest('.list-item-js')) {
        listItemColor.classList.toggle('green');
    }
})

