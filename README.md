# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mrfinesse47/lotide`

**Require it:**

`const _ = require('mrfinesse47/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1,array2)`: asserts that two arrays are equal. console.logs an assertion statement.

- `assertEqual(actual, expected)`: asserts if two primitive data types are equal. console.logs an assertion statement.

- `assertObjectsEqual(actual, expected)`: asserts if two objects are equal. console.logs an assertion statement.

- `countLetters(letters)`: counts the amount of letters in a string, returns an object of letter counted example: { a: 5, p: 3, l: 1, e: 2, b: 1, n: 2, r: 1 }.

- `countOnly(arrayOfStrings, itemsToCount)`: counts how many times an item in the arrayOfStrings occurs if the items to count object has it set to true.

- `eqArrays(array1,array2)`: return a boolean true if all elements in array1 match array2, if not it will return false.

- `eqObjects(object1, object2)`: deeply compares to object to check if all elements are equal. returns a boolean true if equal, false in not equal.

- `findKey((obj, callback))`: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found it returns undefined.

- `findKeyByValue((obj, value))`: if the value string matches a key in obj it will return the key name as a string, if it doesn't find a key it will return undefined.

- `flatten(arr)`: flattens an array of maximum 2 dimensions. returns an array of one dimension. Example: [1, 2, [3, 4], 5, [6]] will return [1, 2, 3, 4, 5, 6]

- `head(arr)`: takes in an array and returns the first element.

- `letterPositions(string)`: Returns an object that has an array which contains the position in the string in which the letter occurs. Example: letterPositions("helllllooooo")["l"] === [2, 3, 4, 5, 6]]

- `map(array, callback)`: takes in an array and a callback function, the callback function will modify each array element. Much similar to the famous Array.map() function.

- `middle(array)`: returns the element(s) in the middle of an array in array format. It will return 1 element if the array has an odd number of elements, and 2 elements if it is even.

- `tail(array)`: takes in an array and returns all of the elements except for the first element in array format.

- `takeUntil(array,callback)`: Takes in an array and a callback, the callback will be used to take up until if returns true. Example:takeUntil([1,2,3,4,-5], x => x < 0) will return [1,2,3,4]

- `without(sourceArr, itemsToRemoveArr)` : takes in two arrays, will remove elements passed in the second array from the first array. Example: without([1, 2, 3], [1] will return [2,3]
