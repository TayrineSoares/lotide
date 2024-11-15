# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @tayrinesoares/lotide`

**Require it:**

`const _ = require('@tayrinesoares/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertArraysEqual: Asserts that two arrays are equal. 
- assertEqual: Asserts that two values are equal.
- assertObjectsEqual: Asserts that 2 objects are equal.
- countLetters: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- countOnly: Takes in a collection of strings and return counts for a specific subset of those items.
- eqArrays: Takes in two arrays and returns true or false, based on a perfect match.
- eqObjects: Takes in two objects and returns true or false, based on a perfect match.
- findKey: Takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value.
- findKeyByValue: Takes in an object and a value. It scans the object and return the first key which contains the given value.
- head: Returns the first item in the array.
- letterPositions: Returns all the indices (zero-based positions) in the string where each character is found.
- map: Takes in an array and a callback function. ReturnS a new array based on the results of the callback function.
- middle: Takes in an array and return the middle-most element(s) of the given array.
- tail: Returns the "tail" of an array: everything except for the first item (head) of the provided array.
- takeUntil: Takes in an array and a callback. It keeps collecting items from a provided array until the callback returns a truthy value.
- without: Takes in a source array and a itemsToRemove array. Returns a new array with only those elements from source that are not present in the itemsToRemove array.