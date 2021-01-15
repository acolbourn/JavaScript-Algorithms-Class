/**
 * Take in an array and callback, return true if array returns true when passed to callback.
 * @param {array} input Array of any type.
 * @param {function} callback Callback function, returns true if a single value in the array returns true when passed in, else false.
 * @returns {boolean} True if any value in array is true when passed to callback, else false.
 */
function someRecursive(input, callback) {
  if (input.length === 0) return false;
  if (callback(input[0])) return true;
  return someRecursive(input.slice(1), callback);
}

const isOdd = (val) => {
  return val % 2 !== 0;
};

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));
console.log(someRecursive([4, 6, 11], (val) => val > 10));
