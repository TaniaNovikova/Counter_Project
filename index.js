const COUNTER = document.querySelector(".counter");
const MINUS = document.querySelector(".onMinus");
const PLUS = document.querySelector(".onPlus");

let count = 0;

const changeCount = () => {
    COUNTER.textContent = count;
  };

  MINUS.addEventListener ("click", (event) => {
  
    if (count > -100) {
      count -= 10;
      changeCount();
    }
  });

  PLUS.addEventListener("click", (event)=>{
    if (count<100){
      count+=10;
      changeCount();
    }
  })
