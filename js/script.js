//task1
let lineOfNums = '';

for (let i = 10; i <= 20; i++) {
    lineOfNums += i + (i < 20 ? ', ' : '');
}
console.log(lineOfNums);

//task2
for (let i = 10; i < 20; i++) {
    console.log(i ** 2);
}

//task3
let multiplicationTableFor7 = [];

for (let i = 0; i <= 12; i++) {
    multiplicationTableFor7.push(`${i} * 7 = ${i * 7}`);
}

console.table(multiplicationTableFor7);

//task4
let integers = 0;

for (let i = 1; i < 15; i++) {
    integers += i;
}

console.log(`sum of integers from 1 to 15 = ${integers}`);

//task5
let product = 1n;

for (let i = 15n; i < 35n; i++) {
    product *= i;
}

console.log(`product from 15 to 35 = ${product}`);

//task6
let sumOfIntegers = 0;
let lengthOfIntegers = 0;

for (let i = 1; i <= 500; i++) {
    sumOfIntegers += i;
    lengthOfIntegers++;
}

let averageOfIntegers = sumOfIntegers/lengthOfIntegers;
console.log(`average of integers from 1 to 500 = ${averageOfIntegers}`);

//task7
let sumOfEvenNum= 0;

for (let i = 30; i <= 80; i++) {
    sumOfEvenNum += i % 2 === 0 ? i : 0;
}

console.log(`sum of even numbers from 30 to 80 = ${sumOfEvenNum}`);

//task8
let allNumsMultipleOf3 = [];

for (let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        allNumsMultipleOf3.push(i);
    }
}

console.table(allNumsMultipleOf3);

//task9
const userNum = +prompt('write NATURAL number');
let allFactorsOfUserNum = [];

for(let i = 1; i <= userNum; i++) {
    if(userNum % i === 0) {
        allFactorsOfUserNum.push(i);
    }
}

console.table(allFactorsOfUserNum);

//task10
let allEvenFactorsOfUserNum = [];

for (let i = 0; i < allFactorsOfUserNum.length; i++) {
    if(allFactorsOfUserNum[i] % 2 === 0) {
        allEvenFactorsOfUserNum.push(allFactorsOfUserNum[i]);
    }
}

console.log(`all even factors of USERNUMBER = ${allEvenFactorsOfUserNum.length}`);

//task11
let sumOfAllEvenFactorsOfUserNum = 0;

for (let i = 0; i < allEvenFactorsOfUserNum.length; i++) {
    sumOfAllEvenFactorsOfUserNum += allEvenFactorsOfUserNum[i];
}

console.log(`sum of all even factors of USERNUMBER = ${sumOfAllEvenFactorsOfUserNum}`);

//task12
let fullMultiplicationTable = [];

for (let i = 1; i <= 10; i++) {
    for (let c = 0; c <= 12; c++) {
        fullMultiplicationTable.push(`${i} * ${c} = ${i*c}`);
    }
}
console.table(fullMultiplicationTable);