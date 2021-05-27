const eqArrays = function(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;
 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keysOfObj1 = Object.keys(object1);
  const keysOfObj2 = Object.keys(object2);

  if (keysOfObj1.length !== keysOfObj2.length)
    return false;

  for (let k1 of keysOfObj1) {
    if (Array.isArray(object1[k1]) && Array.isArray(object2[k1])) {
      if (!eqArrays(object1[k1], object2[k1]))
        return false;
    } else {
      if (object1[k1] !== object2[k1])
        return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected))
    console.log(`🙆🙆‍♂️🙆 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🙅🙅‍♂️🙅 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });