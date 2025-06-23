"use strict";

const _array = [1, 2, 3, 3];
const _string = 'Hello world, world!';

//indexOf
const IndexOf = (array, value) => {
    if(typeof array === "string") {
        if(array.length < value.length) return -1;
        if(typeof value !== "string") return -1;

        for (let i = 0; i <= array.length - value.length; i++) {
            let found = true;
            for (let j = 0; j < value.length; j++) {
                if(array[i + j] !== value[j]) {
                    found = false;
                    break;
                }
            }
            if(found) return i;
        }
    }
    else if(Array.isArray(array)) {
       for(let i = 0; i < array.length; i++) {
           if(array[i] === value) {
               return i;
           }
       }
    }
    return -1;
}

console.log(IndexOf(_string, 'world'));
console.log(IndexOf(_array, 3));

//lastIndexOf
const LastIndexOf = (array, value) => {
    if(typeof array === "string") {
        if(array.length < value.length) return -1;
        if(typeof value !== "string") return -1;

        for (let i = array.length - value.length; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < value.length; j++) {
                if(array[i + j] !== value[j]) {
                    found = false;
                    break;
                }
            }
            if(found) return i;
        }
    }
    else if(Array.isArray(array)) {
        for(let i = array.length - 1 ; i >= 0 ; i--) {
            if(array[i] === value) {
                return i;
            }
        }
    }
    return -1;
}

console.log(LastIndexOf(_string, 'world'));
console.log(LastIndexOf(_array, 3));

//find
const Find = (array, condition) => {
    for(let i = 0; i < array.length; i++) {
        if(condition(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

console.log(Find(_array, number => number % 2 === 0));

//findIndex
const FindIndex = (array, condition) => {
    for(let i = 0; i < array.length; i++) {
        if(condition(array[i])) {
            return i;
        }
    }
    return -1;
}

console.log(FindIndex(_array, number => number % 2 === 0));

//includes
const Includes = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(Includes(_array, 3));

//every
const Every = (array, condition) => {
    for(let i = 0; i < array.length; i++) {
        if(!condition(array[i])) {
            return false;
        }
    }
    return true;
}

console.log(Every(_array, number => number > 1));

//some
const Some = (array, condition) => {
    for(let i = 0; i < array.length; i++) {
        if(condition(array[i])) {
            return true;
        }
    }
    return false;
}

console.log(Some(_array, number => number % 2 === 0));