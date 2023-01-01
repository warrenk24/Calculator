const prevOperand = document.querySelector("[data-prevOperand]");
const currentOperand = document.querySelector("[data-currentOperand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButtons = document.querySelector("[data-delete]");
deleteButtons.addEventListener("click", deleted);
const decimalButtons = document.querySelector("[data-decimal]");
decimalButtons.addEventListener("click", decimal);
const clearButtons = document.querySelector("[data-clear]");
clearButtons.addEventListener("click", clear);
const equalsButtons = document.querySelector("[data-equals]");
equalsButtons.addEventListener("click", () => {
  if (currentNumber !== "" && prevNumber !== "") {
    operate();
  } else {
    return;
  }
});

let currentNumber = "";
let prevNumber = "";
let currentOp = "";

function add(num, num2) {
  prevOperand.innerText = `${prevNumber} ${currentOp} ${currentNumber} =`;
  prevNumber = num + num2;
  currentOperand.innerText = prevNumber;
}

function subtract(num, num2) {
  prevOperand.innerText = `${prevNumber} ${currentOp} ${currentNumber} =`;
  prevNumber = num - num2;
  currentOperand.innerText = prevNumber;
}

function multiply(num, num2) {
  prevOperand.innerText = `${prevNumber} ${currentOp} ${currentNumber} =`;
  prevNumber = num * num2;
  currentOperand.innerText = prevNumber;
}

function divide(num, num2) {
  if (num2 !== 0) {
    prevOperand.innerText = `${prevNumber} ${currentOp} ${currentNumber} =`;
    prevNumber = num / num2;
    currentOperand.innerText = prevNumber;
  } else {
    currentOperand.innerText = "Cannot be divided by Zero";
  }
}

function operate() {
  prevNumber = Number(prevNumber);
  currentNumber = Number(currentNumber);

  switch (currentOp) {
    case "+":
      add(prevNumber, currentNumber);
      break;

    case "-":
      subtract(prevNumber, currentNumber);
      break;

    case "x":
      multiply(prevNumber, currentNumber);
      break;

    case "÷":
      divide(prevNumber, currentNumber);
      break;

    default:
      console.log("ERROR");
  }

  prevNumber = prevNumber.toString();
  currentNumber = currentNumber.toString();
}

function storeNumber(number) {
  if (currentNumber.length <= 12) {
    currentNumber += number;
    currentOperand.innerText = currentNumber;
  }
}
function clear() {
  currentNumber = "";
  prevNumber = "";
  currentOp = "";
  currentOperand.innerText = currentNumber;
  prevOperand.innerText = prevNumber;
}
function deleted() {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
    currentOperand.innerText = currentNumber;
  }
}

function storeOperators(operator) {
  if (prevNumber == "") {
    currentOp = operator;
    prevNumber = currentNumber;
    prevOperand.innerText = `${currentNumber} ${operator}`;
    currentNumber = "";
    currentOperand.innerText = "";
  } else {
    currentOp = operator;
    prevOperand.innerText = `${currentNumber} ${operator}`;
    currentNumber = "";
  }
}
function decimal() {
  if (!currentNumber.includes(".")) {
    currentOperand.innerText = currentNumber += ".";
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    storeNumber(e.target.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    storeOperators(e.target.innerText);
  });
});
