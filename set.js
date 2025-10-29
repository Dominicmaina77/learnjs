// a js set is a collection of values where each value must be unique.
//  It is similar to an array but does not allow duplicate values.
//  Sets are useful when you need to store a list of items and ensure that each item appears only once.

// Creating a Set
// 1. passing an array to the Set constructor eg: new Set()
// 2. using the add() method to add values to the Set

// Example 1: Creating a Set from an array
let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Output: Set(5) { 1, 2, 3, 4, 5 }

// Example 2: Adding values to a Set
let anotherSet = new Set();
anotherSet.add(10);
anotherSet.add(20);
anotherSet.add(30);
console.log(anotherSet); // Output: Set(3) { 10, 20, 30 }

// Example 3: Demonstrating uniqueness in a Set
let uniqueSet = new Set();
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.add(3); // duplicate value
uniqueSet.add(4);
console.log(uniqueSet); // Output: Set(3) { 1, 2, 3 }       
