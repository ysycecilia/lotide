
const eqArrays = function(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;
 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`🙆🙆‍♂️🙆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🙅🙅‍♂️🙅 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(eqArrays("1", ["1"]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 7]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true); // should pass