'use strict';

const container = document.getElementsByClassName('container')[0];

function Update() {
    const data = dataBase.getData();
    let allProducts = '';
    console.log(data);

    for(let i = 0; i < data.length; i++){
        const card = `
        <div class="card display-flex align-items-center justify-content-space-around border-radius-10 margin-10" id="${data[i].id}">
            <div class="display-flex flex-direction-column">
                <span class="font-size-18 margin-10 product-name"><b>Name:</b> ${data[i].name}</span>
                <span class="font-size-18 margin-10 product-description"><b>Description:</b> ${data[i].description}</span>
                <span class="font-size-18 margin-10 product-price"><b>Price:</b> ${data[i].price} ₴</span>
            </div>
            <div class="display-flex align-items-center justify-content-center">
                <button type="button" class="edit-product display-flex align-items-center justify-content-center circle-button font-size-18 green-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </button>
                <button type="button" class="remove-product display-flex align-items-center justify-content-center circle-button font-size-18 margin-left-10 red-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </div>
        </div>`;
        allProducts+=card;
    }

    container.innerHTML = allProducts;

    const editButton = document.querySelectorAll('.edit-product');
    if(editButton.length > 0){
        editButton.forEach((item) => {
            item.addEventListener('click', () =>{
                const id = Number(item.closest('[id]').id);
                localStorage.setItem('currentlyEditedKey', JSON.stringify(id));
                window.location.href = 'product-edit.html';
            })
        })
    }
    const removeButton = document.querySelectorAll('.remove-product');
    if(removeButton.length > 0){
        removeButton.forEach((item) => {
            item.addEventListener('click', () =>{
                const id = Number(item.closest('[id]').id);
                dataBase.deleteData(id);
                Update();
            })
        })
    }
}
Update();