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
    if(operator.clicked)
        operator = e.target.value;
        display.value += operator;
        console.log(display.value);     
        console.log(operator.clicked);        
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
      let divisionNumber = parseInt(firstOperand)/
      parseInt(secondOperand);
      display.value = divisionNumber.toFixed(3);
    }
});

const resetButton = document.querySelector('#clearButton');
resetButton.addEventListener('click', () => {
  display.value = "0";
});


// function calculate(firstOperand, operator, secondOperand){
//   let result; 

//   switch(operator){
//     case"+":
//     result = parseInt(firstOperand) + parseInt(secondOperand);
//     break;
//   }
//   console.log(result);
//   return result;
// }

