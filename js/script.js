//task1
let listOfValues = '';

for (let i = 20 ; i < 30; i+=0.5) {
    listOfValues += i + ' ';
}

console.log(listOfValues);

//task2
let dollarsCount = '';
const dollarEquals = 27;

for (let i = 10; i <= 100; i += 10) {
    dollarsCount += `${i} dollars = ${i * dollarEquals}` + (i < 100 ? ', ' : '');
}

console.log(dollarsCount);

//task3
const userNNumber = +prompt('write INTEGER NUMBER(first number)');
let numArray = [];

for(let i = 1; i <= 100; i++) {
    if(i ** 2 < userNNumber){
        numArray.push(i);
    }
}

console.table(numArray);

//task4
const userPrimeNumber = +prompt('write INTEGER NUMBER(second number)');
let userPrimeChecker;

for (let i = 2; i < userPrimeNumber; i++) {
    if(userPrimeNumber % i === 0) {
        userPrimeChecker = true;
        break;
    }
}

if(!userPrimeChecker && userPrimeNumber > 1){
    console.log(`congratulations your number ${userPrimeNumber} is a PRIME number.`);
}
else{
    console.log(`your number ${userPrimeNumber} is a regular number.`);
}

//task5
const userNumberN = +prompt('write random number(third number)');
let userPowerNumber = 1;
let power = 0;

while(userPowerNumber < userNumberN){
    userPowerNumber *= 3;
    power++;
}

if(userNumberN === userPowerNumber){
    console.log(`Your number is 3 to the power of ${power}`);
}
else{
    console.log(`Your number isn't a power of 3`);
}


