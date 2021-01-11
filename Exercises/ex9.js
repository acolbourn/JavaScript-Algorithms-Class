/**
 * Find the length of the longest substring with distinct characters.
 * @param {string} inputString String to search.
 * @returns {number} Length of longest substring.
 */
function findLongestSubstring(inputString) {
  if (inputString.length < 1) return 0;
  // loop through each letter and add to frequency counter
  // if duplicate found, move back of window forward (i++), else move front of window forward (j++)
  frequencies = {};
  // initialize with 1st char
  frequencies[inputString[0]] = 1;
  let i = 0;
  let j = 1;
  let longest = 1;
  while (j < inputString.length) {
    if (frequencies[inputString[j]] > 0) {
      frequencies[inputString[i]] -= 1;
      i++;
    } else {
      longest = Math.max(longest, j - i + 1);
      frequencies[inputString[j]] = (frequencies[inputString[j]] || 0) + 1;
      j++;
    }
  }
  return longest;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
