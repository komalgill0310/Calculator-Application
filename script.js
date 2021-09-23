// const number = document.getElementById('one');
// number.addEventListener('click', (e) =>{
// console.log(e.target.value);
// });
const display = document.getElementById('display');

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    display.value += e.target.value;
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    display.value += e.target.value;
  });
});

const equalButton = document.querySelector('#equalSign');
equalButton.addEventListener('click', (e) => {
  display.value += e.target.value;
});

const resetButton = document.querySelector('#clearButton');
resetButton.addEventListener('click', () => {
  display.value = "";
});
