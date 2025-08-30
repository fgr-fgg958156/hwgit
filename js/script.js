'use strict';

function fetchUserData(userId){
    const url =`https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    return fetch(url).then(response => response.json());
}

function getUsersData(userIds){
    const promises = userIds.map(id => fetchUserData(id));

    return Promise.allSettled(promises).then(users => {
        const success = [];
        const errors = [];
        users.forEach(({status, value, reason}) => {
            if (status === 'fulfilled')
                success.push(value)
            else if (status === 'rejected')
                errors.push(reason)
        })

        return {success, errors};
    });
}

const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});
