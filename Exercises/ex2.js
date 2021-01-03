// Count number of unique values in a sorted array, including negative numbers

/**
 * Count unique values in a sorted array of numbers
 *
 * @param {array} values A sorted array of numbers including negatives
 * @return {number} result The count of unique values
 */
function countUniqueValues(values) {
  // create two counters, step j and compare.  If i!=j its unique so set next i to j, increment i and j.  Else they are same so step to next j
  if (values.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < values.length; j++) {
    if (values[i] != values[j]) {
      i++;
      values[i] = values[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
