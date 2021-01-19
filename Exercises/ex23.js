/**
 * Recursively search an object fro strings and return an array with all found strings.
 * @param {object} obj Object to search.
 * @returns {array} Array of strings in object.
 */
function collectStrings(obj) {
  let result = [];

  function recursiveHelper(newObj) {
    for (let key in newObj) {
      if (typeof newObj[key] === 'string') {
        result.push(newObj[key]);
      } else if (typeof newObj[key] === 'object') {
        recursiveHelper(newObj[key]);
      }
    }
    return;
  }

  recursiveHelper(obj);
  return result;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
