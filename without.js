
const without = function(source, itemToRemove) {
  let removedSource = [];
  source.map((elem) => {
    if (!itemToRemove.includes(elem))
      removedSource.push(elem);
  });

  console.log(removedSource);
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2))
    console.log(`array: ${array1} and array: ${array2} are equal to each other. `);
  else
    console.log(`array: ${array1} and array: ${array2} are NOT equal to each other. `);
};

const eqArrays = function(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;
 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["hello","lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["1", "2", "3"], []) // ["1", "2", "3"]
without([" ", "2", "3"],[]) // [ " ", "2", "3"]
