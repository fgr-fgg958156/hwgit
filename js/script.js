"use strict";

const documentList = document.getElementById("list");
let contactsCards;
let contactsArray = [];
let isRemoving = false;
/*
const user = {
    firstName: "Walter",
    lastName: "White",
    phone: "+380 00 000 00 00"
}*/

const Add = () => {
    const firstName = document.getElementById("firstname").value;

    const lastName = document.getElementById("lastname").value;
    const phone = +document.getElementById("phone").value;
    if(firstName === "" || lastName === "" || isNaN(phone) || phone === +'') {
        return null;
    }
    const id = Math.random().toString(36).substr(2);
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("phone").value = '';
    const userObject = {
        firstName,
        lastName,
        phone,
        id
    };

    console.log(userObject);

    contactsArray.push(userObject);
    Update();
}

const Update = () => {
    let list = '';
    for (let i = 0; i < contactsArray.length; i++) {
        const contact = contactsArray[i];
        let data = `<div class="card" id="${contact.id}">${contact.firstName} ${contact.lastName}<br>${contact.phone}</div>`;
        list += data;
    }
    documentList.innerHTML = list;
    contactsCards = document.querySelectorAll(".card");
    contactsCards.forEach(contact => {
        contact.addEventListener("click", () =>{const id = contact.getAttribute('data-id'); HandlerOfRemoving(id);});
    })
}

const Remove = () => {
    isRemoving = !isRemoving;
    alert(isRemoving ? "click on the card which you want to remove" : "now you can't remove any cards");
}

const HandlerOfRemoving = (id)=>{
    if(isRemoving){
        contactsArray = contactsArray.filter(item => item.id === id);
        isRemoving = false;
        Update();
    }
}