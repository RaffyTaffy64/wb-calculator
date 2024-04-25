function add(x, y) {
  return x + y
}

// define add

function subtract(x ,y) {
  return x - y
}

// define subtract

function multiply(x ,y) {
  return x * y
}

// define multiply

function divide(x ,y) {
  return x / y
}

// define divide

function power(x, y) {
  return x ** y
}

// define power

function mod(x, y) {
  return x % y
}

// define mod

function squareRoot(x) {
  return Math.sqrt(x)

}

// define sqrt

function calculate(expression) {
  expression = expression.split(` `)

  let num1
  let operator
  let num2

    if (expression.length === 3) {

   num1 = Number(expression[0])
   operator = expression[1]
   num2 = Number(expression[2])
    }else if(expression.length === 2) {
      operator = expression[0]
      num1 = Number(expression[1])
    }else {
      return alert(`You lose, sir! Good day!!`)
    }

if (Number.isNaN(num1) || Number.isNaN(num2)){
  alert(`Nah, ah, ah. That's not a number.`)
  return
}

if (operator === `+`) {
  return add(num1, num2)
  }else if (operator === `-`) {
    return subtract(num1, num2)
  }else if (operator === `*`) {
    return multiply(num1, num2)
  }else if (operator === `/`) {
      return divide(num1, num2)
  }else if (operator === `^`) {
      return power(num1, num2)
   }else if (operator === `%`) {
      return mod(num1, num2)
  }else if (operator === `sqrt`) {
      return squareRoot(num1)
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
