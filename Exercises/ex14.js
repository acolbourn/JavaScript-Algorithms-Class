/**
 * Recursively return nth number of fibonacci sequence.
 * @param {number} num Number of iterations of sequence.
 */
function fib(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
