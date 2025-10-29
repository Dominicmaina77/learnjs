// variables are container that store value
// variables = data containers
// variables are declared using keeywords i.e var,let,const
// var is the old way of declaring variable
// let and const are the new way of declaring variable
// variables are identified by unique names
// rules for naming variables
// 1. variable name can contain letters,digits,underscore and $ sign
// 2. variable name must begin with a letter,underscore or $ sign
// 3. variable names are case sensitive i.e name and Name are two different variables
// 4. variable names cannot be a reserved keyword
// 5. numbers are not allowed at the beginning of variable name
// let keyword is used to declare variables that can be reassigned
let name = "John";
// console.log(name);
document.getElementById("demo").innerHTML = name;
name = "Doe";
// console.log(name);
document.getElementById("trial").innerHTML = name;
// const keyword is used to declare variables that cannot be reassigned
const pi = 3.14;
console.log(pi);
// document.getElementById('try').innerHTML=pi;
// pi = 3.15; // this will give an error
// console.log(pi);

// let,const are block scoped
// let variable is only accessible within the block it is defined
{
  let city = "New York";
  console.log(city); // New York
}

// console.log(city); // error: city is not defined

// const variable is also only accessible within the block it is defined
{
  const country = "USA";
  console.log(country); // USA
}
// console.log(country); // error: country is not defined

const $city ="Nairobi";
console.log($city);
document.getElementById("city").innerHTML=$city;
// const 1city="Nairobi"; // error: variable name cannot start with a number
// console.log(1city);
