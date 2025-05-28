// this is the username, uses the "const" beacuse this is a value that rarely changes, especially if it is already registered.
const userName = 'Кирил'; 
// this is the user  age, uses the "let" variable because it can be changed every year
let userAge = 16; 
// this is the user verification, uses the "const" beacuse it is set once and does not change often
const userVerification = true; 
//  this is the user RegistrationDate, uses the "const" variable because it can't be changed
const userRegistrationDate = '05.02.2025'; 
// this is the user CardNumber, uses the "const" variable because it cannot be changed accidentally in the program
const userCardNumber = 1234_5678_9101_1121n; 
// this is the user PromoCode, uses the "let" variable because it can be changed or added
let userPromoCode = null; 
// this is the user BackupName, uses the "let" variable because it can be changed or added
let userBackupName; 
 // this is the user BonusesNum, uses the "let" variable because it can be changed or added
let userBonusesNum = 13;

//3 console.log that use these variables in a connected sentence
console.log(`Користувач ${userName}, віком ${userAge}, зареєструвався ${userRegistrationDate} та накопичив ${userBonusesNum} бонусів.`);
console.log(`Верифікаці - ${userVerification}; Промокод - ${userPromoCode}.`);
console.log(`Резервне ім'я ${userBackupName}, номер карти ${userCardNumber}.`);

//Creating console.table necessary to display the data type of variables in the table

console.table({
    'userName': typeof userName,
    'userAge': typeof userAge,
    'userVerification': typeof userVerification,
    'userRegistrationDate': typeof userRegistrationDate,
    'userCardNumber': typeof userCardNumber,
    'userPromoCode': typeof userPromoCode,
    'userBackupName': typeof userBackupName,
    'userBonusesNum': typeof userBonusesNum
})