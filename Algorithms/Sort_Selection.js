/**
 * @param {array} arr Array to sort.
 * @returns {array} Sorted array.
 */
function selectionSort(arr) {
  // Shrink array by 1 each loop, beginning number is sorted
  for (let i = 0; i < arr.length; i++) {
    let lowIndex = i;
    // loop through each remaining number
    for (let j = i + 1; j < arr.length; j++) {
      // If arr[j] < lowest value found so far, save it's index and value as new lowest
      if (arr[j] < arr[lowIndex]) {
        lowIndex = j;
      }
    }
    // Swap new lowest with current i to lock sorted value into place
    if (i !== lowIndex) {
      const temp = arr[i];
      arr[i] = arr[lowIndex];
      arr[lowIndex] = temp;
      console.log(arr);
    }
  }
  return arr;
}

console.log(selectionSort([4, 6, 8, 2, 3]));
