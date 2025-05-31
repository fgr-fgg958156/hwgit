const userName = prompt("What is your name?");
const userAge = Number(prompt("What is your age?"));
const userNotification = confirm("Do you wanna see notification?");

const session ={
    name: userName,
    age: userAge,
    notification: userNotification,
    userId: 1234567890123456789n,
    lastLogin: null,
    nickname: undefined,
    favoriteTech: ["Smartphone", "Computer", "Laptop"],
    setting: {
        theme: "dark",
        autoLogin: false
    }
}

alert(`Привіт ${session.name}! ваш ID: ${session.userId}`);

console.log(session);

console.log(`name: ${typeof session.name}`);
console.log(`age: ${typeof session.age}`);
console.log(`notification: ${typeof session.notification}`);
console.log(`userId: ${typeof session.userId}`);
console.log(`lastLogin: ${typeof session.lastLogin}`);
console.log(`nickname: ${typeof session.nickname}`);
console.log(`favoriteTech: ${typeof session.favoriteTech}`);
console.log(`setting: ${typeof session.setting}`);

console.log(`theme: ${typeof session.setting.theme}`);
console.log(`autoLogin: ${typeof session.setting.autoLogin}`);