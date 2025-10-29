// array is a list of values known as elements
let fruits = ["apple", "banana", "cherry"];
// syntax for arrays : let arrayName = [element1, element2, element3, ...];
// reminder pass the elements as strings if they are words

// you can also create an empty array and add elements later
let vegetables = [];
// vegetables.push("carrot");
// vegetables.push("broccoli");
// vegetables.push("spinach");

vegetables[0]="carrot";
vegetables[1]="broccoli";
vegetables[2]="spinach";

// you can also create an array using the Array constructor
let grains = new Array("rice", "wheat", "corn");

// accessing array elments
// you can access elements using their index (position in the array)
console.log(fruits[0]); // outputs "apple"
console.log(vegetables[1]); // outputs "broccoli"
console.log(grains[2]); // outputs "corn"   

// changing array elements
fruits[1] = "blueberry"; // changes "banana" to "blueberry"
console.log(fruits); // outputs ["apple", "blueberry", "cherry"]

// array properties and methods
// length property gives the number of elements in the array
console.log("Number of fruits: " + fruits.length); // outputs 3
// push() method adds a new element to the end of the array
fruits.push("date");
console.log(fruits); // outputs ["apple", "blueberry", "cherry", "date"]

// pop() method removes the last element from the array
let lastFruit = fruits.pop();
console.log("Removed fruit: " + lastFruit); // outputs "date"
console.log(fruits); // outputs ["apple", "blueberry", "cherry"]

// shift() method removes the first element from the array
let firstFruit = fruits.shift();
console.log("Removed first fruit: " + firstFruit); // outputs "apple"
console.log(fruits); // outputs ["blueberry", "cherry"]

// unshift() method adds a new element to the beginning of the array
fruits.unshift("avocado");
console.log(fruits); // outputs ["avocado", "blueberry", "cherry"] 

// indexOf() method returns the index of a specified element
let index = fruits.indexOf("cherry");
console.log("Index of cherry: " + index); // outputs 2

// splice() method can be used to add or remove elements from an array
// removing elements
fruits.splice(1, 1); // removes 1 element at index 1
console.log(fruits); // outputs ["avocado", "cherry"]

// adding elements
fruits.splice(1, 0, "banana", "blueberry"); // adds "banana" and "blueberry" at index 1
console.log(fruits); // outputs ["avocado", "banana", "blueberry", "cherry"]