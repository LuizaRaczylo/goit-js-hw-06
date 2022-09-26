// Napisz skrypt, który reaguje na zmianę wartości input#font - size - control(zdarzenie input)
// i zmienia styl inline span#text aktualizując właściwość font - size.
// W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

const controlInput = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
const fontSizeInput = (font) => {
    text.style.fontSize = `${font.target.value}px`;
};

controlInput.addEventListener("input", fontSizeInput);