/**
 * Recursively capitalize an array of words.
 * @param {array} words Array of words.
 * @returns {array} Array of capitalized words.
 */
function capitalizeWords(words) {
  if (words.length === 0) return [];
  let newWords = [];
  newWords.push(words[0].toUpperCase());
  return newWords.concat(capitalizeWords(words.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
