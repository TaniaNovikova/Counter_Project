const COUNTER = document.querySelector(".counter-display");
const COUNTER_BYNARY = document.querySelector(".counter-display-binary-system");
const PLUS = document.querySelector(".onPlus");
const MINUS = document.querySelector(".onMinus");

let counter = 0;

const plusFunction = () => {
  if (counter < 10) {
    counter++;
    COUNTER.textContent = counter;
    COUNTER_BYNARY.textContent = counter.toString(2);
  }
};

const minusFunction = () => {
  if (counter > -10) {
    counter--;
    COUNTER.textContent = counter;
    COUNTER_BYNARY.textContent = counter.toString(2);
  }
};

PLUS.addEventListener("click", plusFunction);
MINUS.addEventListener("click", minusFunction);
