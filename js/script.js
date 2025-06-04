let userLocation = "невідомо";
let userAge = "невідомо";
let userWannaBe = "невідомо";

const userBirth = +prompt("Який ваш рік народження?");

if(userBirth){
    userAge = 2025 - userBirth;
}
else{
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
}

const userCity = prompt("Яка назва вашого міста (писати з великої літери)?");

if(userCity === null){
    alert("Шкода, що Ви не захотіли ввести нащву свого міста");
}
else {
    switch (userCity){
        case "Київ":
            userLocation = "столиця України";
            break;
        case "Лондон":
            userLocation = "столиця Об'єднаного Королівства";
            break;
        case "Вашингтон":
            userLocation = "столиця Сполучених Штатів Америки";
            break;
        default:
            userLocation = `місто ${userCity}`;
    }
}

const userFavSport = prompt("Яка назва вашого улюбленого спорту (писати з великої літери)?");

if(userFavSport === null){
    alert("Шкода, що Ви не захотіли ввести назву свого улюбленого спорту")
}
else{
    switch (userFavSport){
        case "Футбол":
            userWannaBe = "як Кріштіано Роналду";
            break;
        case "Баскетбол":
            userWannaBe = "як Леброн Джеймс";
            break;
        case "Бокс":
            userWannaBe = "як Олександр Усик";
            break;
        default:
            userWannaBe = `унікальним`;
    }
}

alert(`Ваш вік: ${userAge} \nВаша локація: ${userLocation} \nКруто! Ви хочете стати ${userWannaBe}`);