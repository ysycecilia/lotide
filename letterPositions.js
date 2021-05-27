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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  // logic to update results here
  for (let s of sentence) {
    index = sentence.indexOf(s,index);
    if (!results[s]) {
      results[s] = [index];
      index++;
    } else {
      console.log(index);
      results[s].push(index);
      index++;
    }
  }
  console.log(Array.isArray(results));
  delete results[" "];
  return results;
};

let a = {h:[0],e:[1],l:[2,3],o:[4]};
assertArraysEqual((JSON.stringify(letterPositions("h ello"))), JSON.stringify(a));


assertArraysEqual(letterPositions("hello").e, [1]);