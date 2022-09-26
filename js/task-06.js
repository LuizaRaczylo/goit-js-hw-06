// Napisz skrypt, który przy utracie fokusu na polu input(zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

const textInput = document.querySelector("#validation-input");

const inputBlur = (border) => {
    const borderColor = border.currentTarget;
    const inputLength = Number(borderColor.dataset.length);
    if (borderColor.value.length === inputLength) {
        borderColor.classList.remove("invalid");
        borderColor.classList.add("valid");
    } else {
        borderColor.classList.remove("valid");
        borderColor.classList.add("invalid");
    }
};

textInput.addEventListener("blur", inputBlur);
