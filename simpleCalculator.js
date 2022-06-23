// A program for a simple calculator

// Take operator input
const operator = prompt("Enter operator (either +, -, *,  or /");

// Take the operand input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

var result;

// using if...else if... els
if (operator == '+')
{
    result = num1 + num2;
}
else if (operator == '-')
{
    result = num1 - num2;
}
else if (operator == '*')
{
    result = num1 * num2;
}
else {
result = num1 / num2;
}

// display the result
console.log(`${num1} ${operator} ${num2} = ${result}`);