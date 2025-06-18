"use strict";

const removeElement = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1);
            i-- // avoid missing any elements
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);