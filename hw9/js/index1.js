document.querySelector('.button-js').onclick = onAddButtonClick;
let valuesFromInput = document.querySelector('.input-js');
function onAddButtonClick() {
    document.querySelector('.text-output-js').innerHTML += ' ' + valuesFromInput.value;
    function clearInput() {
        valuesFromInput.value = '';
    }
    clearInput();
}
