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
