"use strict";

let _array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const operationArray = (array, mainNumber, firstCondition, secondCondition, text, isVisibleCount = false) =>{
    let operation = mainNumber;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if(firstCondition(array[i])) {
            operation = secondCondition(operation, array[i]);
            if(isVisibleCount) count ++;
        }
    }
    return isVisibleCount ? `${text} ${operation};\ncount ${count};` : `${text} ${operation};`;
}

const extremumArray = (array, condition, text, removeExtra = false) => {
    const extremum = condition(...array);
    let index = array.indexOf(extremum);
    if(removeExtra) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] !== extremum) array[i] = 0;
        }
    }
    return `${text} ${extremum};\nindex ${index};`;
}

const numberArray = (array, condition, text) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(condition(array[i])) {
            count ++;
        }
    }
    return `${text} ${count}`;
}

//task1
console.log(operationArray(_array,0, num => num > 0, (op, num) => op + num, "Sum of positive numbers is", true));
//task7
console.log(operationArray(_array,0, num => num > 0 && num % 2 === 0, (op, num) => op + num, "Sum of even positive numbers is"));
//task8
console.log(operationArray(_array,0, num => num > 0 && num % 2 !== 0, (op, num) => op + num, "Sum of odd positive numbers is"));
//task9
console.log(operationArray(_array,1, num => num > 0, (op, num) => op * num, "Product of positive numbers is"));
//task2
console.log(extremumArray(_array, Math.min, "Min element is"));
//task3
console.log(extremumArray(_array, Math.max, "Max element is"));
//task4
console.log(numberArray(_array, num => num < 0, "Number of negative numbers is"));
//task5
console.log(numberArray(_array, num => num > 0 && num % 2 === 0, "Number of even positive numbers is"));
//task6
console.log(numberArray(_array, num => num > 0 && num % 2 !== 0, "Number of odd positive numbers is"));
//task10
console.log(extremumArray(_array, Math.max, "(remove extra numbers) Max element is", true));
console.table(_array);