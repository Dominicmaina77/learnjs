// conditional statements run different code depending on a true or false condition
// conditional styatments include :

// 1. if statement
// 2.if ... else statement
// 3.if ... else if ... else statement
// 4.switch statement
// 5.ternary operator (?:)

// when to use  conditions 
// use if to specify a code block to be excuted if a specified condition is true
// use else to specify a code block to be excuted if the same condition is false
// use else if to specify a new condition to test if the first condition is false
// use switch to specify many alternative blocks of code to be excuted
// use the ternary operator as a shortcut for the if statement

// 1. if statement
// if syntax
// if (condition) {
//     // code to be excuted if condition is true
// }
let time = 20;
if (time < 18) {
    console.log("Good day.");
}

// 2. if ... else statement
// if ... else syntax
// if (condition) {
//     // code to be excuted if condition is true
// } else {
//     // code to be excuted if condition is false
// }
let hour = 20;
if (hour < 18) {
    console.log("Good day.");
} else {
    console.log("Good evening.");
}

// 3. if ... else if ... else statement
// if ... else if ... else syntax
// if (condition1) {
//     // code to be excuted if condition1 is true
// } else if (condition2) {
//     // code to be excuted if condition2 is true
// } else {
//     // code to be excuted if both condition1 and condition2 are false
// }
let hrs = 22;
if (hrs < 10) {
    console.log("Good morning.");
} else if (hrs < 20) {
    console.log("Good day.");
} else {
    console.log("Good evening.");
}

// 4. switch statement
// switch syntax
// switch (expression) {
//     case value1: 
//         // code to be excuted if expression === value1
//         break;
//     case value2: 
//         // code to be excuted if expression === value2
//         break;
//     ...
//     default:
//         // code to be excuted if expression doesn't match any case
// }
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;  
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log("Today is " + day);

// 5. ternary operator (?:)
// ternary operator syntax
// condition ? expression1 : expression2
// if condition is true, expression1 is executed
// if condition is false, expression2 is executed
// it is a shortcut for the if...else statement
let age = 17;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
