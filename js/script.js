"use strict";

//task 1

const averageNumber = (array) => {
    let sumOfNumbers = 0;
    let numOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sumOfNumbers += array[i];
            numOfNumbers++;
        }
    }

    return numOfNumbers !== 0 ? `average number is ${sumOfNumbers/numOfNumbers}` : "this array don't have any numbers";
}

const arrayForFirstFunction = ['cat', 2, 8, 'Ukraine', true];
console.log(averageNumber(arrayForFirstFunction));

//task 2

const doMath = (x, znak, y) =>{
    if(isNaN(x) || isNaN(y)) return "some element is not a number";
    if(znak === '+'){
        return x + y;
    }
    else if(znak === '-'){
        return x - y;
    }
    else if(znak === '*'){
        return x * y;
    }
    else if(znak === '/'){
        return y !== 0 ? x/y : "you can't divide by zero.";
    }
    else if (znak === '^'){
        return x ** y;
    }
    else if(znak === '%'){
        return y !== 0 ? x%y : "you can't divide by zero.";
    }
    else{
        return "error with operator";
    }
}
const firstNumber = +prompt('write first number');
const operator = prompt('write operator');
const secondNumber = +prompt('write second number');
console.log(doMath(firstNumber,operator,secondNumber));

//task 3

const userData = (numberOfExternalArray, numberOfInnerArray) =>{

    if(isNaN(numberOfExternalArray) || isNaN(numberOfInnerArray)) return "some element is not a number";

    let result = [];

    let data;

    for (let i = 0; i < numberOfExternalArray; i++) {

        data = prompt(`insert data using only ${numberOfInnerArray} elements, dividing by ","`);

        let innerArray = data.split(',');

        if(innerArray.length > numberOfInnerArray){
            innerArray = innerArray.slice(0, numberOfInnerArray);
        }

        while(innerArray.length < numberOfInnerArray) {
            innerArray.push('*empty*')
        }

        result.push(innerArray);
    }

    return result;
}
const numberOfExternalArray = +prompt('number of external array');
const numberOfInnerArray = +prompt('number of inner array');
console.log(userData(numberOfExternalArray,numberOfInnerArray));

//task 4

const removeSymbols = (text, array) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (!array.includes(text[i])) {
            result += text[i];
        }
    }
    return result;
}

const inputText = prompt('write any text');
const inputArrayOfSymbols = prompt('write array of symbols dividing ","');
const arrayOfSymbols = inputArrayOfSymbols.split(',');
console.log(removeSymbols(inputText, arrayOfSymbols));