let userName = prompt("Write your name here.");

if (userName != null) {
    
    let answerVariant = confirm("Do you wanna see greeting?")

    if (answerVariant) {
        alert(`Welcome ${userName}!`);
    }
}