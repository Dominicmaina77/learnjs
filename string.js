// strings are for stroing text data
// strings are written inside quotes
// single or double quotes
let name = "Jynne";
document.getElementById('demo1').innerHTML = name;
let city = 'Nairobi';
document.getElementById('demo2').innerHTML = city;

// you can use quotes inside a string as long as they don't match the quotes surrounding the string
let message = "It's a beautiful day";
document.getElementById('demo3').innerHTML = message;
let quote = 'He said, "Hello!"';
document.getElementById('demo4').innerHTML = quote;


// TEMPLATE LITERALS/STRING INTERPOLATION
// templates are strings enclosed in backticks ` `
// templates allow single and double quotes inside a string
let template = `It's a beautiful day in "Nairobi"`;
document.getElementById('demo5').innerHTML = template;

// interpolation
// syntax ${expression}
// variable substitution
let firstName = "Jynne";
let lastName = "Kariuki";
let fullName = `${firstName} ${lastName}`;
document.getElementById('demo6').innerHTML = fullName;

// expression substitution
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}`;
document.getElementById('demo7').innerHTML = sum;

// string methods
let str = "Hello, World!";
document.getElementById('demo8').innerHTML = str.length; // length of string
document.getElementById('demo9').innerHTML = str.toUpperCase(); // to uppercase
document.getElementById('demo10').innerHTML = str.toLowerCase(); // to lowercase
document.getElementById('demo11').innerHTML = str.slice(7); // slice
document.getElementById('demo12').innerHTML = str.replace("World", "JavaScript"); // replace 
