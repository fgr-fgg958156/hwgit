"use strict";

const _function = () =>{
    //Created a 'for' loop with 1 iteration
    for(let i = 0; i < 1; i++){
        var _varValue = i;// value var
        let _letValue = i * 2;// value let
        const _constValue = i * 3;// value const

        //announced in loop
        console.log("*loop*");
        console.log(`var in loop ${_varValue}`);
        console.log(`let in loop ${_letValue}`);
        console.log(`const in loop ${_constValue}`);
    }


    //announced without loop
    console.log("*without loop*");
    console.log(_varValue);

    try{
        console.log(_letValue);
    }
    catch(err){
        console.log("_letValue:", err);
    }

    try{
        console.log(_constValue);
    }
    catch(err){
        console.log("_constValue:", err);
    }
}
_function();

/*
created function "_function"
called a function

created a loop
added to loop 3 value (var, let, const)
announced 3 value in loop
ended loop

announced 3 value without loop

var give value because it is a "function scope" or "Функціональна область визначення"
in hosting "var" is raised to the beginning of the function and "var" works anywhere in the function

let give error "is not defined" because it is a "block scope" or "Блочна область визначення"
in hosting "let" is in Temporal Dead Zone and "let" works only in the loop

const give error "is not defined" because it is a "block scope" or "Блочна область визначення"
in hosting "const" is in Temporal Dead Zone and "const" works only in the loop

*/
