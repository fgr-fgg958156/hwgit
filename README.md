# script about "Writing a student through classes"

1. Map: Object statistics by complex keys

Implement a function groupByCategory(items) that takes an array of products, where each product has a complex object as a category, and groups the products by these categories.
```
Copy code
const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
{ name: 'Laptop', category: electronics },
{ name: 'Phone', category: electronics },
{ name: 'Book A', category: books },
];

const result = groupByCategory(items);

// Map {
// electronics => [ { name: 'Laptop', ... }, { name: 'Phone', ... } ],
// books => [ { name: 'Book A', ... } ]
// }
```
2. Set: Detecting unique objects without reprocessing

Create a function filterUniqueByReference(arr) that returns an array of only unique objects by reference.
```
Copy code
const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const result = filterUniqueByReference(input);
// => [obj1, obj2]
```
3. WeakMap: Binding metadata to objects without memory leaks

Create a createMetadataStorage() that allows you to "attach" additional information to any object without changing the object itself. These objects can disappear from memory — and the metadata will automatically disappear too.

In JavaScript, it is not safe to add a field to an external object unless you created it. For example:
```
Copy code
const user = { name: "Ivan" };
user.__tag = "important"; // Bad: changes structure, conflicts with other systems
```
But with WeakMap we can store additional information externally without touching the object itself.

Usage example
```
Copy code
const storage = createMetadataStorage();

const user1 = { name: "Anna" };

const user2 = { name: "Oleg" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true
```

4. WeakSet: Tracking already processed objects

Create an ObjectTracker class that allows you to check whether a certain object has already been "marked" or processed. The class has the methods:

mark(obj) — mark the object as processed

wasProcessed(obj) → true | false — whether the object has already been processed

Context:
In many scenarios (e.g., graph traversal, DOM tree, deep validation), you need to know whether this object has already been processed in order to avoid repeating the action.

Behavior
```
Copy code
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true
```