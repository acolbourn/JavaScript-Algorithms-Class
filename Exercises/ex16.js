/**
 * Recursively detect if a string is a palindrome.
 * @param {string} str Input string to test.
 * @return {boolean} True if palindrome, false otherwise.
 */
function isPalindrome(str) {
  const length = str.length;
  if (length <= 0) return false;
  if (length === 1) return true;
  if (length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('awesome'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log(isPalindrome('bc'));
