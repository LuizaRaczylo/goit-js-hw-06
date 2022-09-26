// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.

let counterValue = 0;
const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
const buttonValue = document.querySelector("#value");

const valueMinus = () => {
    counterValue -= 1;
    buttonValue.textContent = counterValue;
};

const valuePlus = () => {
    counterValue += 1;
    buttonValue.textContent = counterValue;
};

buttonMinus.addEventListener("click", valueMinus);
buttonPlus.addEventListener("click", valuePlus);