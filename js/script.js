'use strict';

const fetchUserData = async (userId) =>{
    const url =`https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    const response = await fetch(url);
    return await response.json();
}

const getUsersData = async (userIds) =>{
    const promises = userIds.map(id => fetchUserData(id));

    const results = await Promise.allSettled(promises);
    const success = [];
    const errors = [];

    for(const {reason, value, status} of results){
        if(status === "fulfilled")
            success.push(value)
        else if(status === "rejected")
            errors.push(reason)
    }

    return {success, errors};
}

const userIds = [1, 2, 3, 4, 5];

(async () => {
    const result = await getUsersData(userIds);
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
})()
