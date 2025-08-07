/**
 *Q1: Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements
  such that the first element becomes the last, the second element becomes second last and so on.
  Q1.1 using temporary array
 * @param {Array} arr
 */
export function reverseArry(arr) {
  const n = arr.length;
  let temp = new Array(n);

  for (let i = 0; i < n; i++) {
    temp[i] = arr[n - i - 1];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

/**
 * Q1.2 Using two pointer
 */

export function reverseArryTwoPointer(arr) {
  let left = 0,
    right = arr.length - 1;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (left < right) {
  //       [arr[left], arr[right]] = [arr[right], arr[left]];
  //       left++;
  //       right--;
  //     }
  //   }
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

/**
 * Q1.3 By Swapping Elements - O(n) Time and O(1) Space
 */

export function reverseArryByHalfArr(arr) {
  const n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}

/**
 * Q1.4 Using Recursion - O(n) Time and O(n) Space
 */

export function reverseArryByRec(arr) {
  const recursive = (arr, l, r) => {
    if (l >= r) {
      return;
    }
    [arr[l], arr[r]] = [arr[r], arr[l]];
    recursive(arr, l + 1, r - 1);
  };
  const n = arr.length - 1;
  recursive(arr, 0, n);
  return arr;
}
