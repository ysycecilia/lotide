
const eqArrays = function(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;
 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2))
    console.log(`array: [${array1}] and array: [${array2}] are equal to each other. `);
  else
    console.log(`array: [${array1}] and array: [${array2}] are NOT equal to each other. `);
};


const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
 
  return array.length > 2 ? (array.length % 2 === 0 ? result = array.slice(middleIndex - 1, middleIndex + 1) : result = array.slice(middleIndex, middleIndex + 1)) : result;
};

assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);