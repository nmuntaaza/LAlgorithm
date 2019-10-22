const bubbleSort = (nums, opt) => {
  if (nums.length < 2)
    return nums;

  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }

  if (opt['reverse'])
    nums = nums.reverse();
  
  return nums;
}

console.log(bubbleSort([3, 2, 7, 11, 2, 1, -5], { reverse: 'lol' }));