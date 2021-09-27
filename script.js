const display = document.getElementById('display');

let firstOperand;
let operator;
let secondOperand;

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {    
    if(operator===undefined){
      firstOperand = e.target.value;
      display.value = display.value + firstOperand ;
      console.log(display.value);
    }
    else{
      secondOperand = e.target.value;
      display.value = secondOperand;
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    operator = e.target.value;
    display.value = operator;
  });
});

const equalButton = document.querySelector('#equalSign');
equalButton.addEventListener('click', (e) => {
  if(operator==="+"){
    display.value = parseInt(firstOperand)+parseInt(secondOperand);
  } 
});

const resetButton = document.querySelector('#clearButton');
resetButton.addEventListener('click', () => {
  display.value = "0";
});


