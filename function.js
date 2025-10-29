// functions are declared with the function keyword
function greet() {
  console.log("Hello, World!");
  document.getElementById("demo1").innerHTML = "Hello, World!";
}
greet(); // calling the function

// function with parameters and arguments
function add(a, b) {
  return a + b;
}       
let sum = add(5, 10); // calling the function with arguments
console.log(sum);
// you can use a function declaration or  function expression to define a function
// function declaration
function multiply(x, y) {
  return x * y;
}
let product = multiply(5, 10);
console.log(product);
document.getElementById("demo2").innerHTML = product;
// function declaration are not execcuted immediately they are saved for later use when called for

// function expression/anonymous function
// a function expression is a function that is assigned to a variable
const divide = function (x, y) {
  return x / y;
}
let quotient = divide(10, 5);
console.log(quotient);
document.getElementById("demo3").innerHTML = quotient;
// functions stored in variables do not need function names they are anonymous functions and are 
// called using the variable name

// function hoisting
// function declarations are hoisted to the top of the code and can be called before they are defined
console.log(subtract(10, 5)); // calling the function before it is defined
function subtract(x, y) {
  return x - y;
}
document.getElementById("demo4").innerHTML = subtract(10, 5);

// function expressions are not hoisted and cannot be called before they are defined


// self-invoking functions
// a self-invoking function is a function that is executed immediately after it is defined
// you cannot self-invoke a function declaration
// you have to add parentheses around the function expression
(function () {
  console.log("This is a self-invoking function");
  document.getElementById("demo5").innerHTML = "This is a self-invoking function";
})();

// arrow functions
// arrow functions are a shorter syntax for writing function expressions
// you do not need the fucntion keyword the return keyword or curly braces
const square = (x) => x * x;
let squaredValue = square(5);
console.log(squaredValue);
document.getElementById("demo6").innerHTML = squaredValue;
// if the function has only one parameter you can omit the parentheses if you have more than one parameter you need to use parentheses
const cube = x => x * x * x;
let cubedValue = cube(3);
document.getElementById("demo7").innerHTML = cubedValue;

// if the function has more than one statement you need to use curly braces and the return keyword
const power = (x, y) => {
  return x ** y;
}
let powerValue = power(2, 3);
document.getElementById("demo8").innerHTML = powerValue;

// default parameters
// you can set default values for parameters in case no arguments are passed
function greetUser(name = "Guest") {
  return "Hello, " + name + "!";
}
let greeting1 = greetUser(); // no argument passed
let greeting2 = greetUser("Alice"); // argument passed
console.log(greeting1);
console.log(greeting2);
document.getElementById("demo9").innerHTML = greeting1 + "<br>" + greeting2;

// rest parameters
// you can use rest parameters to pass an arbitrary number of arguments to a function
function sumAll(...numbers) { 
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total = sumAll(1, 2, 3, 4, 5);
console.log(total);
document.getElementById("demo10").innerHTML = total;