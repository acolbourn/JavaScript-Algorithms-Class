// Find maximum sum of a consecutive subarray with length n (passed in) in an array of integers.

/**
 * Find max subarray sum in an array of integers.
 * @param {array} values Array of integers
 * @param {number} subSize Size of the subarray
 * @return {number} Sum of the subarray
 */
function maxSubarraySum(values, subSize) {
  if (subSize > values.length) return null;
  // Get first subarray sum
  let maxSum = 0;
  for (let i = 0; i < subSize; i++) {
    maxSum += values[i];
  }

  // Loop through one at a time, adding next element and subtracting last. Take max sum
  let tempSum = maxSum;
  for (let j = subSize; j < values.length; j++) {
    tempSum = tempSum - values[j - subSize] + values[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4], 2));
