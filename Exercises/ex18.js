/**
 * Take in array of arrays and return a new array with all values flattened.
 * @param {array} arrays Array of arrays.
 * @return {array} Flattened array.
 */
// function flatten(arrays) {
//   let result = [];

//   function flattenHelper(array) {
//     if (array.length <= 1) {
//       const innerVal = array.pop();
//       if (typeof innerVal !== 'object') {
//         result.push(innerVal);
//         return;
//       } else {
//         return flattenHelper(innerVal);
//       }
//     }
//     if (array === null) return;
//     flattenHelper(array.slice(0, -1));
//     flattenHelper(array.slice(-1));
//   }
//   flattenHelper(arrays);
//   return result;
// }

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
