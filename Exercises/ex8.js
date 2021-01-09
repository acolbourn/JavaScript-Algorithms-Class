/**
 * Find the minimum length of a consecutive sum of a subarray that is >= to integer sum passed in.
 * @param {array} values Array of positive integers.
 * @param {number} target Number that sum must be >= to.
 * @return {integer} Minimum subarray sum.
 */
function minSubArrayLen(values, target) {
  let best = Infinity;
  let i = 0;
  let j = 0;
  let tempSum = 0;
  for (j; j < values.length; j++) {
    if (tempSum >= target) {
      if (i > j) return 1;
      best = Math.min(best, j - i);
      tempSum -= values[i];
      i++;
      j--;
    } else {
      tempSum += values[j];
      // increment i if best found bc result will be smaller than best - 1 so window slides
      if (best != Infinity) {
        tempSum -= values[i];
        i++;
      }
    }
  }
  // Check last run after loop breaks
  if (tempSum >= target) {
    if (i > j) return 1;
    best = Math.min(best, j - i);
  }
  if (best === Infinity) return 0;
  return best;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
