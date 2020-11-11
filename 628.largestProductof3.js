let largestProductofThree = function(nums) {
  nums.sort((a,b) => a-b);

  let last = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  // if no chance to utilize negative numbers to generate positive big numbers then just return lat three num's product
  if (nums[0] < 0 && nums[1] > 0) {
    return last;
  } else {
    let negativeFormedProduct = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(last, negativeFormedProduct);
  }
}