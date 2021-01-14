/**
 * Recursively reverse a string.
 * @param {string} str String to reverse.
 */
// function reverse(str) {
//   let newString = '';

//   function reverseHelper(strInput) {
//     if (strInput.length <= 0) return;
//     newString = newString.concat(strInput[strInput.length - 1]);
//     return reverseHelper(strInput.slice(0, strInput.length - 1));
//   }

//   reverseHelper(str);
//   return newString;
// }

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('abcde'));
console.log(reverse('awesome'));
