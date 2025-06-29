'use strict';

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

const findValuesByKey = (object, value, initialObj= []) => {

    for (const obj in object) {
        if(typeof object[obj] !== 'object') {
            if(obj === value && object[obj] !== null){
                initialObj.push(object[obj]);
            }
        }
        else{
            findValuesByKey(object[obj], value, initialObj);
        }
    }

    return initialObj;
}

console.table(findValuesByKey(data, 'id'));