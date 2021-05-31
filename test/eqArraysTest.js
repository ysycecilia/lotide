const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays("1", ["1"]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 7]), true); // should fail
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true); // should pass