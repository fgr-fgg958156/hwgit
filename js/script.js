"use strict";

const Shift = (array) => {
    if(array.length === 0) return array;

    let result = [];
    const firstVariable = array[0];

    for(let i = 1; i < array.length; i++){
        result[result.length] = array[i];
    }

    for(let i = 0; i < result.length; i++){
        array[i] = result[i];
    }
    array.length = result.length;

    return firstVariable;
}

let array = ['1', 2, '3', 4, '5'];
let variable = Shift(array);

console.log(variable);
console.table(array);

const Reverse = (array) => {
    if(array.length === 0) return array;

    let reverseArray = [];

    for(let i = array.length - 1; i >= 0; i--){
        reverseArray[reverseArray.length ] = array[i];
    }

    for(let i = 0; i < reverseArray.length; i++){

        array[i] = reverseArray[i];
    }

    return array;
}

Reverse(array);

console.table(array);