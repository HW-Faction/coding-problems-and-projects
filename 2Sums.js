var twoSum = function(nums, target) {
  for (var i = 0; i <= nums.length; i++) {
    for (var j = 1; j <= nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        if (i == j) {
          continue;
        }
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
