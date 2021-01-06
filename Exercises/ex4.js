// Create a function to detect if there are any duplicates in a variable number of passed in arguments

/**
 * Detect duplicates using frequency counter method
 * @returns {boolean} result True if duplicates, False otherwise
 */
function areThereDuplicates() {
  // Add each item to a frequency counter, if value already exists return true
  let frequencies = {};
  for (let i in arguments) {
    if (arguments[i] in frequencies) {
      return true;
    } else {
      frequencies[arguments[i]] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

/**
 * Detect duplicates using multiple pointers method
 * @returns {boolean} result True if duplicates, False otherwise
 */

function areThereDuplicatesPointers() {
  let sorted = Object.values(arguments);
  sorted.sort();
  console.log(sorted);
  let i = 0;
  for (let j = 1; j < sorted.length; j++) {
    if (sorted[i] === sorted[j]) return true;
    i++;
  }
  return false;
}

console.log(areThereDuplicatesPointers(2, 1, 3));
console.log(areThereDuplicatesPointers('a', 'b', 'c', 'a'));

/**
 * One line detect duplicates
 */
function oneLineDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(oneLineDuplicates(2, 1, 3));
console.log(oneLineDuplicates('a', 'b', 'c', 'a'));
