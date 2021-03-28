/**
 * Use insertion sort to sort an array of numbers in place.
 * @param input Array to Sort.
 * @returns Sorted Array.
 */
function insertionSort(input: number[]): number[] {
  let current: number;
  for (let i = 1; i < input.length; i++) {
    current = input[i];
    for (let j = i - 1; j > 0; j--) {
      if (current <= input[j] && current >= input[j - 1]) {
        input[i] = input[j];
        input[j] = current;
        break;
      }
    }
  }

  return input;
}

console.log(insertionSort([1, 5, 2, 19, 6]));
