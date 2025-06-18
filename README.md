# script about "V3 Features"

 Given an array of numbers const arr = [1, 2, 3, -1, -2, -3];

## We need to write a function that will return a new array containing only positive numbers. To do this:

1. Create a function with an arbitrary name.
2. The function accepts an array as a parameter.
3. In the body of the function, we create an empty array (example: const exampleArr = []).
4. If the array passed as a parameter to the function is empty, then we return the corresponding message.
5. We loop through the array passed as a parameter (we use a for loop).
6. In the body of the loop, we check whether the current element is a positive or negative number (if).
7. If the number is positive, then we add it to the previously created array using the push function (example exampleArr.push(currentPositiveNumber)).
8. After executing the loop, we check the array that was filled with only positive values.
9. If it is not empty, then we return this array.
10. If it is empty, return null