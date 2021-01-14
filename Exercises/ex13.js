/**
 * Recursively add up all numbers from 0 to num.
 * @param {number} num
 * @return {number}
 */
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
