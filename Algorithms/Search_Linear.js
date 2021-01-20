/**
 * Searches an array for a value and returns the index.
 * @param {array} arr Array to search.
 * @param {*} val Value to find.
 * @returns {number} Index of value, -1 if not found.
 */
function linearSearch(arr, val) {
  for (let index in arr) {
    if (arr[index] === val) return parseInt(index);
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
