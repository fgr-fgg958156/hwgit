'use strict';

let listGroup = document.getElementsByClassName('list-group')[0];

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});


        target.reset();
        dataBase.setData(data);
        disabledHandler();
        Update();
        console.log(dataBase.getData())
    });

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler)
}

createUserInterface();

const Update = () => {
    const data = dataBase.getData();
    let contacts = [];
    for(let i = 0; i < data.length; i++) {
        const element = data[i];
        const newContact = document.createElement('li');
        newContact.id = element.id;
        newContact.setAttribute('class', "list-group-item d-flex align-items-center justify-content-between");
        newContact.innerHTML = `<div class="text-black"><b>${element.firstName} ${element.lastName}: ${element.phone}</b></div>
                        <button class="btn btn-danger btn-sm">Delete</button>`
        contacts.push(newContact);
    }
    //clear list
    listGroup.innerHTML = '';
    //fill list
    contacts.forEach(contact => {
        listGroup.appendChild(contact);
    });

    let deleteButtons = document.querySelectorAll('.btn-sm');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = +button.parentNode.getAttribute('id');
            dataBase.deleteData({id});
            Update();
        });
    });
    SaveInLocalStorage();
}

const SaveInLocalStorage = () => {
    localStorage.clear();
    const data = dataBase.getData();
    let contactObject = {};
    for(let i = 0; i < data.length; i++) {
        const element = data[i];
        contactObject['firstName'] = element.firstName;
        contactObject['lastName'] = element.lastName;
        contactObject['phone'] = element.phone;
        localStorage.setItem(`contact${element.id}`, JSON.stringify(contactObject));
    }
}

const LoadFromLocalStorage = () => {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const element = JSON.parse(localStorage.getItem(key));
        dataBase.setData({firstName: element.firstName, lastName: element.lastName, phone: element.phone});
    }
    Update();
}

LoadFromLocalStorage();