// a map object to store key-value pairs
//  where keys can be of any data type
// Maps are useful when you need to associate values with keys and retrieve them efficiently.

// Creating a Map
// 1. passing an array of key-value pairs to the Map constructor eg: new Map()
// 2. using the set() method to add key-value pairs to the Map

// Example 1: Creating a Map from an array of key-value pairs
let myMap = new Map([
    ['name', 'John'],   
    ['age', 30],
    ['city', 'New York']
]);
console.log(myMap); // Output: Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'New York' }

// Example 2: Adding key-value pairs to a Map
let anotherMap = new Map();
anotherMap.set('country', 'USA');
anotherMap.set('language', 'English');
console.log(anotherMap); // Output: Map(2) { 'country' => 'USA', 'language' => 'English' }