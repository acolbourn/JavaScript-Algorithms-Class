// Given two strings, determine if they are anagrams.

/**
 *  Returns true if strings are anagrams of each other, false otherwise
 * @param {string}  stringOne string to compare
 * @param {string}  stringTwo string to compare
 * @return {boolean} result True if anagrams, false if not
 */
function validAnagram(stringOne, stringTwo) {
  // Count frequencies of chars in each string, then compare if equal
  let freqOne = {};
  let freqTwo = {};
  for (let i in stringOne) {
    freqOne[stringOne[i]] = (freqOne[stringOne[i]] || 0) + 1;
  }
  for (let j in stringTwo) {
    freqTwo[stringTwo[j]] = (freqTwo[stringTwo[j]] || 0) + 1;
  }
  for (let key in freqOne) {
    if (!(freqOne[key] === freqTwo[key])) {
      return false;
    }
  }
  return true;
}

validAnagram('anagram', 'nagaram');
