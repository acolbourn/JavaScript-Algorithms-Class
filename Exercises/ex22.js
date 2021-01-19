/**
 * Recursively search an object and convert all numbers to strings.
 * @param {object} obj Object to search.
 * @returns {object} Object with numbers converted to strings.
 */
function stringifyNumbers(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object') {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
