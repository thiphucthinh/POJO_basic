/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// Option 1
function valuesInObject(obj) {
    let arr = [];
    for(let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

// Example 1
let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]


// Option 2
function valuesInObject(obj) {
    return Object.values(obj);
}

// Example 2
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]
