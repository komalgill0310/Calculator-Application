const display = document.getElementById('display');

let firstOperand="";
let operator="";
let secondOperand="";

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {    
    if(!operator){
      firstOperand += e.target.value;
      display.value = firstOperand;
    }
    else{
      secondOperand += e.target.value;     
      display.value = secondOperand;
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
      if(firstOperand && secondOperand){
        calculate();
        }
      else{
        operator = e.target.value;
        display.value = operator;
      }          
  });
});

const equalButton = document.querySelector('#equalSign');
equalButton.addEventListener('click', () => calculate());
    
const resetButton = document.querySelector('#clearButton');
resetButton.addEventListener('click', () => {
  display.value = "0";
});

function calculate(){
  let result;
   switch(operator){
    case"+":
     result=parseInt(firstOperand)+parseInt(secondOperand);
    break;
   case"-":
     result=parseInt(firstOperand)-parseInt(secondOperand);
    break;
   case"X":
     result=parseInt(firstOperand)*parseInt(secondOperand);
    break;
   default:
     result=parseInt(firstOperand)/parseInt(secondOperand);
    break;
   }        
    firstOperand = result;
    secondOperand = "";
    display.value = result;
}

