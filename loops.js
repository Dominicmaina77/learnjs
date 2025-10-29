// loops execute a block of code a number of times
// There are different kinds of loops in JavaScript

// 1. for loop  
// Syntax: for (initialization; condition; increment) { // code to be executed }
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// 2. while loop
// Syntax: while (condition) { // code to be executed }
// This loop continues as long as the condition is true
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// 3. do...while loop
// Syntax: do { // code to be executed } while (condition);
// This loop executes the code block once before checking the condition
let k = 10;
do {
    console.log("Do...While Loop iteration: " + k);
    k++;
} while (k < 15);

