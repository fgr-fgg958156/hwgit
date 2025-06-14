"use strict";

function padString(mainString, mainNumber, extraSymbol, sideBoolean = true){
    if(mainString === undefined) return 'some error with "mainString", it is undefined';
    if(typeof mainString !== 'string') return 'some error with "mainString", it is not a string';

    if(mainNumber === undefined) return 'some error with "mainNumber", it is undefined';
    if(typeof mainNumber !== 'number') return 'some error with "mainNumber", it is not a number';

    if(typeof sideBoolean !== 'boolean') return 'some error with "sideBoolean", it is not a boolean';

    let result = mainString;

    if(result.length < mainNumber){
        let difference = mainNumber - result.length;
        let gaps = extraSymbol.repeat(difference);
        result = sideBoolean ? result + gaps : gaps + result ;

        if(extraSymbol.length > 1) return 'some error with "extraSymbol", it more than 1 symbols';
        if(typeof extraSymbol !== 'string') return 'some error with "extraSymbol", it is not a string';
    }
    else if (result.length > mainNumber){
        result = result.substr(0, mainNumber);
    }

    return result;
}

const text1 = padString('hello', 8, '*');
const text2 = padString('hello', 6, '*', false);
const text3 = padString('hello', 2);
console.log(`task1 = ${text1}, task2 = ${text2}, task3 = ${text3}`);