/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/
// Option 1
function keysInObject(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

// Example 1
let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]

// ***************************************
// Option 2
function keysInObject(obj) {
    return Object.keys(obj);
}

// Example 2
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]
