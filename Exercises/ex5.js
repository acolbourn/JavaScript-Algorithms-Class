// Given a sorted array of integers and a target average, determine if a pair of values equals the target average.

/**
 * Detect if a pair of integers in an array equals a target average.
 *
 * @param {array} numbers Sorted array of integers.
 * @param {number} average Target average.
 * @return {boolean} True if a pair matches average, false otherwise.
 */
function averagePair(numbers, average) {
  if (numbers.length < 1) return false;
  // Start counter at beginning and end.  If average > target{j-1}, else if average < target {i+1}. Return true if same.
  let i = 0;
  let j = numbers.length - 1;

  while (i !== j) {
    const currentAvg = (numbers[i] + numbers[j]) / 2;

    if (currentAvg === average) {
      return true;
    } else if (currentAvg < average) {
      i++;
    } else if (currentAvg > average) {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
