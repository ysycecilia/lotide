
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback((item)));
  }
  return results;
};

assertArraysEqual(map(words, (words) => {
  return words[0];
}),["g","c","t","m","t"]);

assertArraysEqual(map(words, (words) => {
  return words.length;
}),[6,7,2,5,3]);

assertArraysEqual(map(words, (words) => {
  return words.indexOf("o");
}),[2,1,1,3,1]);