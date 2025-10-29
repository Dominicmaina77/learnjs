// operators are mathematical symbols that perform operations on variables and values.
// operators are used to perform operations on variables and values
// operators are used to assign values to variables
// operators are used to compare values
// operators are used to perform arithmetic operations
// operators are used to perform logical operations

// types of operators
// 1. arithmetic operators
// 2. assignment operators
// 3. comparison operators
// 4. logical operators


// arithmetic operators
let a =10;
let b =5;
let sum = a + b; // addition
document.getElementById("demo1").innerHTML = "Sum: " + sum;
let diff = a-b; // subtraction
document.getElementById("demo2").innerHTML = "Difference: " + diff;
let prod = a*b; // multiplication
document.getElementById("demo3").innerHTML = "Product: " + prod;
let quot = a/b; // division
document.getElementById("demo4").innerHTML = "Quotient: " + quot;
let mod = a%b; // modulus
document.getElementById("demo5").innerHTML = "Modulus: " + mod;
let exp = a**b; // exponentiation
document.getElementById("demo6").innerHTML = "Exponentiation: " + exp;
let inc = ++a; // increment
document.getElementById("demo7").innerHTML = "Increment: " + inc;
let dec = --b; // decrement
document.getElementById("demo8").innerHTML = "Decrement: " + dec;



// ASSIGNMENT OPERATORS
// they assign values to javascript variables

// the = operator assigns the value on the right to the variable on the left
let x = 10; // assigns 10 to x
document.getElementById("demo9").innerHTML = "x: " + x;
let y = 5; // assigns 5 to y
let z = x + y; // assigns the sum of x and y to z
document.getElementById("demo10").innerHTML = "z: " + z;

// the += (addition assignment) operator adds the value on the right to the variable 
// on the left and assigns the result to the variable on the left
x += 5; // x = x + 5
document.getElementById("demo11").innerHTML = "x after += 5: " + x;

// the -= (subtraction assignment) operator subtracts the value on the right from the variable
// on the left and assigns the result to the variable on the left
y -= 2; // y = y - 2
document.getElementById("demo12").innerHTML = "y after -= 2: " + y;

// the *= (multiplication assignment) operator multiplies the variable on the left by the value
// on the right and assigns the result to the variable on the left
x *= 2; // x = x * 2
document.getElementById("demo13").innerHTML = "x after *= 2: " + x;

// the /= (division assignment) operator divides the variable on the left by the value on the right
y /= 2; // y = y / 2
document.getElementById("demo14").innerHTML = "y after /= 2: " + y;

// the **= (exponentiation assignment) operator raises the variable on the left to the power
// of the value on the right and assigns the result to the variable on the left
x **= 2; // x = x ** 2
document.getElementById("demo15").innerHTML = "x after **= 2: " + x;

// the %= (modulus assignment) operator divides the variable on the left by the value on the right
// and assigns the remainder to the variable on the left

y %= 3; // y = y % 3
document.getElementById("demo16").innerHTML = "y after %= 3: " + y;

// string assignment
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  
document.getElementById("demo17").innerHTML = "Full Name: " + fullName;
firstName += " Smith"; // firstName = firstName + " Smith"
document.getElementById("demo18").innerHTML = "First Name after += ' Smith': " + firstName;

// the logical and assignment (&&=) operator
// the logical and assignment operator (&&=) is used between two values
// if the value on the left is true the value on the right is assigned to the variable on the left
// if the first value is true the second value is assigned

// if the value on the left is false the value on the right is not assigned to the variable on the left
// if the first value is false the second value is ignored
let isT = true;
let isF = false;
isT &&= false; // isT = isT && false
document.getElementById("demo19").innerHTML = "isT after &&= false: " + isT;
isF &&= true; // isFalse = isF && true
document.getElementById("demo20").innerHTML = "isF after &&= true: " + isF;
let s = true;
let f= s &&= 10; 
document.getElementById("demo21").innerHTML = "f after s &&= 10: " + f;

// the logical or assignment (||=) operator
// the logical or assignment operator (||=) is used between two values
// if the value on the left is false the value on the right is assigned to the variable on the left
// if the first value is false the second value is assigned

// if the value on the left is true the value on the right is not assigned to the variable on the left
// if the first value is true the second value is ignored
let ist = true;
let isf = false;
ist ||= false; // ist = ist || false    
document.getElementById("demo22").innerHTML = "ist after ||= false: " + ist;
isf ||= true; // isf = isf || true
document.getElementById("demo23").innerHTML = "isf after ||= true: " + isf;
let st = false;
let ft= st ||= 20; 
document.getElementById("demo24").innerHTML = "ft after st ||= 20: " + ft;

// the logical nullish assignment (??=) operator
// the logical nullish assignment operator (??=) is used between two values
// if the value on the left is null or undefined the value on the right is assigned to the variable on the left
// if the first value is null or undefined the second value is assigned
// if the value on the left is not null or undefined the value on the right is not assigned to the variable on the left
// if the first value is not null or undefined the second value is ignored
let n = null;
let u; // undefined
n ??= "default"; // n = n ?? "default"
document.getElementById("demo25").innerHTML = "n after ??= 'default': " + n;
u ??= "default"; // u = u ?? "default"
document.getElementById("demo26").innerHTML = "u after ??= 'default': " + u;
let nn = "not null";
nn ??= "default"; // nn = nn ?? "default"
document.getElementById("demo27").innerHTML = "nn after ??= 'default': " + nn;
let uu = 0;
uu ??= "default"; // uu = uu ?? "default"
document.getElementById("demo28").innerHTML = "uu after ??= 'default': " + uu;

// comparison operators
// comparison operators are used to compare two values
// comparison operators return a boolean value (true or false)
// 1. equal to (==)
let compA = 10;
let compB = 9;
let isEqual = (compA == compB); // true
console.log("compA == compB: " + isEqual);

// 2. not equal to (!=)
let isNotEqual = (compA != compB);
console.log("compA != compB: " + isNotEqual);

// 3. strict equal to (===) 

let isStrictEqual = (compA === compB); // false
console.log("compA === compB: " + isStrictEqual);

// 4. strict not equal to (!==)
let isStrictNotEqual = (compA !== compB); // true
console.log("compA !== compB: " + isStrictNotEqual);

// 5. greater than (>)
let isGreaterThan = (compA > 5); // true
console.log("compA > 5: " + isGreaterThan);

// 6. less than (<)
let isLessThan = (compA < 5); // false
console.log("compA < 5: " + isLessThan);

// 7. greater than or equal to (>=)
let isGreaterThanOrEqual = (compA >= 10); // true
console.log("compA >= 10: " + isGreaterThanOrEqual);

// 8. less than or equal to (<=)
let isLessThanOrEqual = (compA <= 5); // false
console.log("compA <= 5: " + isLessThanOrEqual);








