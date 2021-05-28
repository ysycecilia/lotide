
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2))
    console.log(`array: [${array1}] and array: [${array2}] are equal to each other. `);
  else
    console.log(`array: [${array1}] and array: [${array2}] are NOT equal to each other. `);
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

const takeUntil = function(array, callback) {
  let result = [];
  for (let a in array) {
    if (callback(array[a])) break;
    else result.push(array[a]);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ['I\'ve','been','to','Hollywood']);