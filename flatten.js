const flatten = function(array) {

  let arr =  [];
  array.map((e) => {
    if (Array.isArray(e)) {
      for (let a of e)  arr.push(a);
    } else {
      arr.push(e);
    }
  });
  return arr;
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
let a = [1, 2, "ghjjj", [3, 4], 5, [6]];
console.log(flatten(a)); // => [1, 2, 3, 4, 5, 6]