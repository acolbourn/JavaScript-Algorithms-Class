// Given two positive integers, found out if the numbers have same frequency of digits in O(n) time.

/**
 * Determine if two integers have the same frequency of digits
 * @param {number} one First integer
 * @param {number} two Second integer
 * @returns {boolean} result true if same, false otherwise
 */
function sameFrequency(one, two) {
  // if frequencies object empty return true, else false
  if (one.length !== two.length) return false;
  // convert both to strings
  const oneString = one.toString();
  const twoString = two.toString();
  let frequencies = {};
  // loop through first, create object with frequencies of each digit
  for (let i in oneString) {
    frequencies[oneString[i]] = (frequencies[oneString[i]] || 0) + 1;
  }
  console.log('Freq Full: ', frequencies);
  // loop through second, subtract from frequencies object
  for (let i in twoString) {
    // if number not found in frequencies or already at 0, return false. Else subtract 1 from frequency.
    if (!(twoString[i] in frequencies) || frequencies[twoString[i]] === 0) {
      return false;
    } else {
      frequencies[twoString[i]] -= 1;
    }
  }
  // Create array of final frequency counts
  const vals = Object.values(frequencies);
  // if a frequency count isn't 0, return false bc that means there is a mismatch
  for (let val in vals) {
    if (vals[val] !== 0) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
