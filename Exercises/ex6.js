// Take in 2 strings, determine if the first is a subsequence of the second.  Check if the characters in the first appear somewhere in the second without their order changing.

/**
 * Take in 2 strings, determine if first is subsequence of second.
 *
 * @param {string} first First string
 * @param {string} second Second string
 * @return {boolean} True if subsequence found in second string, false otherwise.
 */
function isSubsequence(first, second) {
  if (!first) return true;
  // Create an index counter for each string, step index on string 2 if current string 1 char !== string 2 char.  if equal, step string 1 counter.
  let i = 0;
  let j = 0;
  while (j < second.length) {
    if (first[i] === second[j]) i++;
    if (i === first.length) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('', 'abracadabra'));
