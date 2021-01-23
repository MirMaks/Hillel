document.querySelector('.button-js').addEventListener('click', onAddButtonClick);
const valuesFromInput = document.querySelector('.input-js');
function onAddButtonClick() {
    if (valuesFromInput.value !== '') {
        document.querySelector('.empty-js').hidden = true;
        document.querySelector('.text-output-ul-js').innerHTML += `<li>${valuesFromInput.value}</li>`;
        valuesFromInput.value = '';
    }
}
