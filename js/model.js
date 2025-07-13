'use strict';

function createModel(nameOfDB) {
    const DB_Key = nameOfDB;
    const main_keys = ['name', 'description', 'price'];

    const isValid=(obj)=>{
        if(typeof obj !== 'object' || obj === null || Array.isArray(obj)){return false;}
        const keys = Object.keys(obj);
        if(keys.length!==main_keys.length){
            return false;
        }

        for(let key of keys){
            if(!main_keys.includes(key)){
                return false;
            }
        }
        return true;
    }

    const getData =()=>{
        const data = JSON.parse(localStorage.getItem(DB_Key));
        if(data === null){
            return [];
        }
        return data;
    }

    const getKey = (id)=>{
        if(typeof id !== 'number'){
            return -1;
        }
        const currentData = getData();
        return currentData.find(item=>item.id === id);
    }

    const getIndexKey = (id)=>{
        if(typeof id !== 'number'){
            return -1;
        }
        const currentData = getData();
        return currentData.findIndex(item=>item.id === id);
    }

    const setKey = (id, name, description, price)=>{
        if(typeof id !== 'number'){
            return false;
        }
        const currentData = getData();
        const currentKey = getIndexKey(id);
        console.log("currentKey:" + currentKey);

        if(currentKey === -1){
            return false;
        }

        currentData[currentKey] = {
            ...currentData[currentKey],
            name,
            description,
            price
        }
        localStorage.setItem(DB_Key, JSON.stringify(currentData));
        return true;
    }

    const setData =(data)=>{
        if(data === null || !isValid(data)){
            return false;
        }
        const currentData = getData();

        let maxId = 0;
        for(let i = 0; i < currentData.length; i++){
            if(currentData[i].id > maxId){
                maxId = currentData[i].id;
            }
        }
        const id = maxId +1;

        const saveData = {...data, id};
        currentData.push(saveData);
        localStorage.setItem(DB_Key, JSON.stringify(currentData));
        return true;
    }

    const deleteData = (id)=>{
        if(id === null || typeof id!=='number'){return false;}

        const currentData = getData();
        const currentKey = getIndexKey(id);
        console.log(currentKey);
        currentData.splice(currentKey, 1);
        localStorage.setItem(DB_Key, JSON.stringify(currentData));
        return true;
    }

    return {
        getData,
        getKey,
        setKey,
        setData,
        deleteData
    }
}

const dataBase = createModel('products');


