/************************************************************************
This is how we count elements in an array, and store them in an object


 * **********************************************************************/

function countEl(arr) {
    let count = {};

    for (let el of arr) {
        if (count[el] === undefined) { // or if(!count[el])
            count[el] = 1;
        }
        else {
            count[el]++;
        }
    }
    return count;
}

// Example

console.log(countEl(["apple", "apple", "coconut", "orange", "blueberry", "coconut", "apple"]));
