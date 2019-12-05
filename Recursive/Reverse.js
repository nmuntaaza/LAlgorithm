// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/

// Reverse array of char
const arrChar = ['h','e','l','l','o'];

// Recursively
// Time complexity: O(n) to swap n/2 element.
// Space complexity: O(n) to keep the recursion stack.
function reverse(arr) {
  helper(arr, 0, arr.length - 1);
}

function helper(arr, left, right) {
  if (left >= right) return arr;
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

reverse(arrChar);
console.log(arrChar);

// Two pointer
// Time complexity: O(n) to swap n/2 element.
// Space complexity: O(1), it's a constant space solution.
function reverse2 (arr) {
  let [left, right] = [-1, arr.length];
  while (++left < --right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
}

reverse(arrChar);
console.log(arrChar);