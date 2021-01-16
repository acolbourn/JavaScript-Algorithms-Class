/**
 * Recursively capitalize first letter of each string in an array.
 * @param {array} strings Array of strings.
 */
function capitalizeFirst(strings) {
  let newStrings = [];

  if (strings.length === 0) return newStrings;
  const word = strings[0];
  const capWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newStrings.concat(capWord, capitalizeFirst(strings.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
