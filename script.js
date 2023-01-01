const prevOperand = document.querySelector('[data-prevOperand]')
const currentOperand = document.querySelector('[data-currentOperand]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButtons = document.querySelector('[data-delete]')
const clearButtons = document.querySelector('[data-clear]')
clearButtons.addEventListener('click', clear)
const equalsButtons = document.querySelector('[data-equals]')
equalsButtons.addEventListener('click', operate)
let currentNumber = ""
let prevNumber= ""
let currentOp = ""


function add(num, num2) {
    
    prevNumber  =  num + num2;
    currentOperand.innerText = prevNumber
}

function subtract(num, num2) {
    prevNumber =  num - num2;
    currentOperand.innerText = prevNumber
}

function multiply(num, num2) {
    prevNumber =  num * num2;
    currentOperand.innerText = prevNumber

}

function divide(num, num2) {
    prevNumber =  num / num2;
    currentOperand.innerText = prevNumber
}

function operate() {
    prevNumber = Number(prevNumber)
    currentNumber = Number(prevNumber)
    
  switch (currentOp) {
    case "+":
      return add(prevNumber, currentNumber);
      break;

    case "-":
      return subtract(prevNumber, prevNumber);
      break;

    case "*":
      return multiply(prevNumber, prevNumber);
      break;

    case "/":
      return divide(prevNumber, prevNumber);
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
function clear() {

}

function storeOperators(operator){
   
    currentOp = operator
    console.log(currentOp)
    prevNumber = currentNumber
    prevOperand.innerText = currentNumber + " " + operator
    currentNumber = ""
    currentOperand.innerText = ""
    
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