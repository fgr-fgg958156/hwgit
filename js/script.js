'use strict';

const user = {
    firstName: 'Walter',
    lastName: 'White',
    age: 50,
    job: 'teacher',
    location: 'Albuquerque'
}

function userInfo(greetingMessage){
    console.log(`${greetingMessage}
    \nYour name is ${this.firstName} ${this.lastName}
    \nYour age is ${this.age}
    \nYour job is ${this.job}
    \nYour location is ${this.location}`);
}

//apply
const _apply = (linkFunction, thisArg, argArray) =>{
    thisArg.function = linkFunction;
    const result = thisArg.function(...argArray);
    delete thisArg.function;
    return result;
}

_apply(userInfo, user, ['Welcome']);

//call
const _call = (linkFunction, thisArg, ...argList) =>{
    thisArg.function = linkFunction;
    const result = thisArg.function(...argList);
    delete thisArg.function;
    return result;
}

_call(userInfo, user, 'Welcome');

//bind
const _bind = (linkFunction, thisArg, ...argList) =>{
    return function(...extraArgList){
        thisArg.function = linkFunction;
        return thisArg.function(...argList, ...extraArgList);
    }
}

const result = _bind(userInfo, user, 'Welcome');
result("extra");