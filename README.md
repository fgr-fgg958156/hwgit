# hw-50 about "Fake api"

You have a function ```fetchUserData(userId)``` that returns a promise with user data (emulating an API request).

You need to write a function ```getUsersData(userIds)``` that:

1. Takes an array of userIds.
2. Returns a **promise** that resolves to an array of user objects.
3. If at least one request fails, the result should return an **array of successful responses and an array of errors.**
**Example call:**

```
const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
console.log("✅ Success:", result.success);
console.log("❌ Errors:", result.errors);
});
```
**Hints**:
* Use Promise.allSettled.
* Divide the results into fulfilled and rejected.
