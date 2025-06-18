"use strict";

const checkArray = (array) => {
    if(!Array.isArray(array)) {
        return "it is not array";
    }

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== 'number') {
            return `Element at index "${i}" not a number`;
        }
    }
    return true;
}

const positiveNumbers = (array) => {
    const check = checkArray(array);
    if(check !== true) return check;

    if(array.length === 0) return "array is empty";

    let exampleArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            exampleArr.push(array[i]);
        }
    }

    return exampleArr.length === 0 ? null : exampleArr;
}


const arr = [1, 2, 3, -1, -2, -3];

console.log(positiveNumbers(arr));