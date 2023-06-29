function calculate(expression) {
  const tokens = expression.split(" ");
  const stack = [];

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];

    if (!isNaN(token)) {
      // If the token is a number, push it to the stack
      stack.push(parseFloat(token));
    } else {
      // If the token is an operator, perform the operation
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
      }
    }
  }

  return stack[0]; // Return the final result from the stack
}

module.exports = { calculate };
