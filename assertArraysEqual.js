const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2))
    console.log(`array: [${array1}] and array: [${array2}] are equal to each other. `);
  else
    console.log(`array: [${array1}] and array: [${array2}] are NOT equal to each other. `);
};


module.exports = assertArraysEqual;
