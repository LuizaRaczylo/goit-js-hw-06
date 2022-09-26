function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Napisz skrypt, który zmienia kolor tła elementu < body > poprzez style inline po kliknięciu na button.change - color 
// i wprowadza wartość koloru do span.color.
// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

const newBody = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const randomColor = ()=> {
  colorSpan.textContent = newBody.style.backgroundColor=getRandomHexColor();
}
colorButton.addEventListener("click", randomColor);
