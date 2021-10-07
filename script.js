const display = document.getElementById('display');

let firstOperand="";
let operator="";
let secondOperand="";

const numberButtons = document.querySelectorAll('.buttonNumber');
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {    
    if(!operator){
      firstOperand = e.target.value;
      display.value += firstOperand;
      console.log(display.value);
    }
    else{
      secondOperand = e.target.value;     
      display.value += secondOperand;
      console.log(display.value);
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
     if(!operator){
       operator = e.target.value;
       display.value += operator;
       console.log(display.value);
     }
     else{
       switch(operator){
       case"+":
       display.value = parseInt(firstOperand) + parseInt(secondOperand);
       break;
       case"-":
       display.value = parseInt(firstOperand) - parseInt(secondOperand);
       break;
       case"X":
       display.value = parseInt(firstOperand) * parseInt(secondOperand);
       break;
       default:
       display.value = parseInt(firstOperand) / parseInt(secondOperand);
       display.value = divisionNumber.toFixed(3);
       break;
      }
      let newOperator = e.target.value;
      display.value += newOperator;
      console.log(display.value); 
     }
  });

const equalButton = document.querySelector('#equalSign');
equalButton.addEventListener('click', () => {
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

// return (operator==="+")? display.value = parseInt(firstOperand) + parseInt(secondOperand):
// (operator==="-")?display.value = parseInt(firstOperand) - parseInt(secondOperand):
// operator==="X"? console.log(parseInt(firstOperand)*
// parseInt(secondOperand)) :
// display.value = parseInt(firstOperand) / parseInt(secondOperand);

    // if(!operator){
    //   operator = e.target.value;
    //   display.value += operator;
    //   console.log(display.value);
    // }
  
    // if(firstOperand,operator,secondOperand!=0) {
    //   if(!!operator){
    //     if(operator==="-"){
    //       display.value = parseInt(firstOperand) -parseInt(secondOperand);
    //       display.value += operator;
    //       console.log(display.value);
    //     } 
    //   }
    // }   
    // else{
    //   operator = e.target.value;
    //   display.value += operator;
    //   console.log(display.value); 
    // }   
    
    // if(firstOperand && secondOperand){
    //   //calculate
    //   if(operator==="+"){
    //     display.value = parseInt(firstOperand) + parseInt(secondOperand);
    //   } 
    //   else if(operator==="-"){
    //     display.value = parseInt(firstOperand) - parseInt(secondOperand);
    //   }
    //   else if(operator==="X"){
    //     display.value = parseInt(firstOperand) * parseInt(secondOperand);
    //   }
    //   else{
    //     let divisionNumber = parseInt(firstOperand)/
    //     parseInt(secondOperand);
    //     display.value = divisionNumber.toFixed(3);
    //   }
    //   }
    //   else{
    //     operator = e.target.value;
    //     display.value += operator;
    //     console.log(display.value);
    //   }  
  });