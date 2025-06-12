"use strict";

function greetUser(userName){
    return `Привіт, ${userName}!`;
}

const userName = prompt("Яке ваше ім'я?");

console.log(greetUser(userName));