const bubbleSort = nums => {
  if (nums.length < 2) {
    return nums;
  }

  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  
  return nums;
}

console.log(bubbleSort([3, 2, 7, 11, 2, 1, -5]));