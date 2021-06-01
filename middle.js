
const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
 
  return array.length > 2 ? (array.length % 2 === 0 ? result = array.slice(middleIndex - 1, middleIndex + 1) : result = array.slice(middleIndex, middleIndex + 1)) : result;
};
module.exports = middle;