//Выбираем элементы DOM
const display = document.querySelector(".counter-display");
const displayBinary = document.querySelector(".counter-display-binary-system");
const plusButton = document.querySelector(".onPlus");
const minusButton = document.querySelector(".onMinus");

let counter = 0

const updateDisplay = () => {
    display.textContent = counter;
    displayBinary.textContent = counter.toString(2);
}

const plusFunction = () => {
    counter++;
    updateDisplay();
};

const minusFunction = () => {
    counter--
    updateDisplay();
};

plusButton.addEventListener("click", plusFunction);
minusButton.addEventListener("click", minusFunction);