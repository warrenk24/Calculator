const prevOperand = document.querySelector('[data-prevOperand]')
const currentOperand = document.querySelector('[data-currentOperand]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const clearButtons = document.querySelectorAll('[data-clear]')
const equalsButtons = document.querySelectorAll('[data-equals]')
let currentNumber = ""
let prevNumber= ""
let currentOp = ""


function add(num, num2) {
  return num + num2;
}

function subtract(num, num2) {
  return num - num2;
}

function multiply(num, num2) {
  return num * num2;
}

function divide(num, num2) {
  return num / num2;
}

function operate(num, operand, num2) {
  switch (operand) {
    case "+":
      return add(num, num2);
      break;

    case "-":
      return subtract(num, num2);
      break;

    case "*":
      return multiply(num, num2);
      break;

    case "/":
      return divide(num, num2);
      break;

    default:
      console.log("error");
  }
}

function storeNumber(number) {
    
    if(currentNumber.length <= 12){
        currentNumber += number
        currentOperand.innerText = currentNumber 
        
    }
    
    
    
}


function storeOperators(operator){
    currentOp = operator
    prevNumber = currentNumber
    prevOperand.innerText = currentNumber + " " + operator
    
}

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        storeNumber(e.target.innerText)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        storeOperators(e.target.innerText)
    })
})