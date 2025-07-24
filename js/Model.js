'use strict';

function Model () {
    this.DB_name = "todo"
    this.key_structure = ['nm', 'disc', 'comp'];

    this.isValid = (obj) =>{
        if(!obj || typeof obj !== 'object') { return false }
        const keys = Object.keys(obj);
        if(keys.length !== this.key_structure.length) { return false }

        return !(typeof obj.nm !== 'string' || typeof obj.disc !== 'string' || typeof obj.comp !== "boolean");

    }

    this.getData=()=>{
        const data = JSON.parse(localStorage.getItem(this.DB_name))
        if(data === null){
            return [];
        }
        return data
    }

    this.editItemData = (id, nm, disc, comp) => {
        if(id === null || typeof id !== 'number') { return false }
        const currentData = this.getData();
        const currentItemIndex = this.getItemIndexById(id);
        if(currentItemIndex === -1){
            return false;
        }
        currentData[currentItemIndex].nm = nm;
        currentData[currentItemIndex].disc = disc;
        currentData[currentItemIndex].comp = comp;
        console.log(currentData[currentItemIndex])
        localStorage.setItem(this.DB_name, JSON.stringify(currentData));
        return true;
    }

    this.getItemIndexById=(id)=>{
        if(id === null || typeof id !== 'number') { return -1 }
        const currentData = this.getData();
        return currentData.findIndex(item => item.id === id);
    }

    this.getItemById=(id)=>{
        if(id === null || typeof id !== 'number') { return -1 }
        const currentData = this.getData();
        return currentData.find(item => item.id === id);
    }

    this.setData = (data) =>{
        if(data === null || !this.isValid(data)) {
            return false;
        }
        const currentData = this.getData();

        let maxId = 0;
        for(let i = 0; i < currentData.length; i++) {
            if(currentData[i].id > maxId) {
                maxId = currentData[i].id;
            }
        }
        const id = maxId + 1;

        const newData = {...data, id}
        currentData.push(newData);
        localStorage.setItem(this.DB_name, JSON.stringify(currentData));
        return true;
    }

    this.clearAllData=()=>{
        console.log('clearAllData');
        return localStorage.removeItem(this.DB_name);
    }

    this.removeItemById=(id)=>{
        if(id === null || typeof id !== 'number') { return false }
        const currentData = this.getData();
        const currentItem = this.getItemIndexById(id);
        if(currentItem === -1){
            return false;
        }
        currentData.splice(currentItem, 1);
        localStorage.setItem(this.DB_name, JSON.stringify(currentData));
        return true;
    }
}