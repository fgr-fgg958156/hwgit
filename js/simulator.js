const userName = prompt("напишіть своє імя");
let userAge = Number(prompt("напишіть ваш вік"));
const userParticipation = confirm("Чи хочете взяти участь?")

const userId = 12345678901234567890n;
let bonusCode = null;
let secondName;

//in this variable I use"if...else" = "condition ? if true : if false"
message = alert(`Привіт, ${userName}!\nТвій вік: ${userAge}\nТвій статус: ${userParticipation ? "участь підтверджено" : "відмовився"}`);

console.log("Ім'я:", userName, typeof userName);
console.log("Вік:", userAge, typeof userAge);
console.log("ID користувача:", userId, typeof userId);
console.log("Бонусний код:", bonusCode, typeof bonusCode);
console.log("Прізвисько:", secondName, typeof secondName);