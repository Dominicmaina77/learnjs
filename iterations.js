// js loops repeat executing a block of code a number ot fimes
// loops are fundamental for tasks like:
// iterating over values
// performing repetitive operations
// processing data collections

// for...in loop
// iterates over the enumerable properties of an object
// it is typically used to loop through the properties of an object/ object keys
let person = {fname: "John", lname: "Doe", age: 25};
let text = "";
for (let x in person) {
    text += person[x] + " ";
};
document.getElementById("demo1").innerHTML = "for...in loop: " + text;

// for...of loop
// iterates over iterable objects like arrays, strings, maps, sets
// it is typically used to loop through the values of an iterable object
let cars = ["BMW", "Volvo", "Mini"];
let carText = "";
for (let car of cars) {
    carText += car + " ";
};
document.getElementById("demo2").innerHTML = "for...of loop: " + carText;

// itearting means looping over a sequence of elements
// iterating over a string
let str = "Hello";
let strText = "";
for (let char of str) {
    strText += char + " ";
};
document.getElementById("demo3").innerHTML = "Iterating over a string: " + strText;

// iterating over an array
let fruits = ["Apple", "Banana", "Cherry"];
let fruitText = "";
for (let fruit of fruits) {
    fruitText += fruit + " ";
};
document.getElementById("demo4").innerHTML = "Iterating over an array: " + fruitText;

// iterating over a set
let mySet = new Set(["a", "b", "c"]);
let setText = "";
for (let item of mySet) {
    setText += item + " ";
};
document.getElementById("demo5").innerHTML = "Iterating over a set: " + setText;

// iterating over a map
let myMap = new Map();
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
let mapText = "";
for (let [key, value] of myMap) {
    mapText += key + "=>" + value + " ";
};
document.getElementById("demo6").innerHTML = "Iterating over a map: " + mapText;