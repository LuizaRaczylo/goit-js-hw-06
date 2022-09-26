// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input)
// wstawia jego aktualną wartość do span#name - output.
// Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const newTextInput = (text) => {
    output.textContent = text.currentTarget.value;

    if (text.currentTarget.value === "") {
        output.textContent = `Anonymous`;
    };
};

textInput.addEventListener("input", newTextInput);
