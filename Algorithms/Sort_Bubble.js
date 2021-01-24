/**
 * @param {array} arr Input array.
 * @returns {array} Sorted array.
 */
function bubbleSort(arr) {
  // Shrink array by 1 each loop bc highest value bubbled to end and is sorted.
  for (let i = arr.length - 1; i >= 0; i--) {
    // Loop through each item of unsorted portion of array.
    for (let j = 0; j < i; j++) {
      // If arr[j] > arr[j + 1], swap items.
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 6, 8, 2, 3]));
console.log(bubbleSort([4, 3, 2, 1, 3]));
console.log(bubbleSort([24, 43, 2, -1, -3]));
console.log(bubbleSort([0, -4]));
console.log(bubbleSort([-4]));
console.log(bubbleSort([]));
