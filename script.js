const display = document.getElementById('display');

let firstOperand="";
let operator="";
let secondOperand="";

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {    
    if(!operator){
      let firstNumber = e.target.value;
      firstOperand = firstNumber;
      display.value = firstOperand;
      console.log(display.value);
    }
    else{
      let secondNumber = e.target.value;
      secondOperand = secondNumber;      
      display.value += secondOperand;
      console.log(display.value);
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    operator = e.target.value;
    display.value += operator;
    console.log(display.value);
  });
});

const equalButton = document.querySelector('#equalSign');
equalButton.addEventListener('click', (e) => {
    if(operator==="+"){
      display.value = parseInt(firstOperand) + parseInt(secondOperand);
    } 
    else if(operator==="-"){
      display.value = parseInt(firstOperand) - parseInt(secondOperand);
    }
    else if(operator==="X"){
      display.value = parseInt(firstOperand) * parseInt(secondOperand);
    }
    else{
      let divisionNumber = parseInt(firstOperand)/parseInt(secondOperand);
      display.value = divisionNumber.toFixed(3);
    }
  }

});

const resetButton = document.querySelector('#clearButton');
resetButton.addEventListener('click', () => {
  display.value = "0";
});

function calculate(){
  if(firstOperand !==null && operator !==null && secondOperand !==null){
    if(operatorButtons.clicked == true || equalButton.clicked == true){

    }
}
