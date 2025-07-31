'use strict';

//1

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];

function groupByCategory(items){
    const map = new Map();
    items.forEach((item) => {
        const category = item.category;
        if(!map.has(category)) {
            map.set(category, []);
        }
        map.get(category).push(item);
    })

    return map;
}

const result1 = groupByCategory(items);
console.log(result1);

//2

const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

function filterUniqueByReference(input){
    const unique = [];
    input.forEach((item) => {
        if(!unique.includes(item)) {
            unique.push(item);
        }
    })
    return unique;
}

const result2 = filterUniqueByReference(input);
console.log(result2);

//3

function createMetadataStorage(){
    const weakMap = new WeakMap();
    const setMetadata = (user, object) =>{
        weakMap.set(user, object);
    }
    const getMetadata = (user) =>{
        return weakMap.get(user);
    }
    const hasMetadata = (user) =>{
        return weakMap.has(user);
    }
    return {
        setMetadata,
        getMetadata,
        hasMetadata
    }
}

const storage = createMetadataStorage();

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true

//4

class ObjectTracker{
    constructor(){
        this.weakSet = new WeakSet();
    }

    mark(obj){
        this.weakSet.add(obj);
    }

    wasProcessed(obj){
        return this.weakSet.has(obj);
    }
}

const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true
