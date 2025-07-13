'use strict';

const createProductButton = document.getElementById('create-product');
const clearFormButton = document.getElementById('clear-form');
const toTableButton = document.getElementById('to-table');
const toFormButton = document.getElementById('to-form');
const applyButton = document.getElementById('apply-product');

const productNameInput = document.getElementById('product_name');
const productDescriptionInput = document.getElementById('product_description');
const productPriceInput = document.getElementById('product_price');

let currentKey;

if(createProductButton){
    createProductButton.addEventListener('click', function(){
        if(!isValidInput()) return
        const productObject = {
            name: productNameInput.value,
            description: productDescriptionInput.value,
            price: productPriceInput.value
        }
        dataBase.setData(productObject);
        ClearForm();
    });
}
if(clearFormButton){
    clearFormButton.addEventListener('click', function(){
        ClearForm()
    });
}
if(toTableButton){
    toTableButton.addEventListener('click', function(){
        window.location.href = 'product-table.html';
        localStorage.removeItem('currentlyEditedKey');
    });
}
if(toFormButton){
    toFormButton.addEventListener('click', function(){
        window.location.href = 'create-product.html';
        localStorage.removeItem('currentlyEditedKey');
    });
}
if(applyButton){
    applyButton.addEventListener('click', function(){
        if(!isValidInput()) return
        dataBase.setKey(currentKey.id, productNameInput.value, productDescriptionInput.value, productPriceInput.value);
        console.log(productNameInput.value);
        localStorage.removeItem('currentlyEditedKey');
        window.location.href = 'product-table.html';
    });
}

const ClearForm = () =>{
    productNameInput.value = '';
    productDescriptionInput.value = '';
    productPriceInput.value = '';
}

const FillValueInput = () =>{
    if(JSON.parse(localStorage.getItem('currentlyEditedKey')) !== null && productNameInput){
        currentKey = dataBase.getKey(JSON.parse(localStorage.getItem('currentlyEditedKey')));
        productNameInput.value = currentKey.name;
        productDescriptionInput.value = currentKey.description;
        productPriceInput.value = currentKey.price;
    }
}

const isValidInput = () =>{
    const name = productNameInput.value.trim();
    const description = productDescriptionInput.value.trim();
    const price = +productPriceInput.value.trim();
    return (name !== '' && description !== '' && !isNaN(price) && price > 0);
}

FillValueInput()