const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`🙆🙆‍♂️🙆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🙅🙅‍♂️🙅 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  const result = {};
  let myString = string.toLowerCase();
  
  for (let s of myString) {
    if (s !== " ") {
      if (!result[s])
        result[s] = 1;
      else
        result[s] += 1;
    }
  }
  return result;
};

let a = {h:1,e:1,l:2,o:1};
assertEqual((JSON.stringify(countLetters("hello"))), JSON.stringify(a));