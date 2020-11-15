/*
209. Minimum Size Subarray Sum
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0; // to move pointer
  let min = Infinity;
  let sum = 0;

  for (var i = 0; i<nums.length; i++) {
    sum += nums[i];
    while (sum >= s) { //if sum valid keep trying to remove left pointer
      min = Math.min(min, i + 1 - left);
      sum -= nums[left] // try removing val at left pointer to see if still valid
      left++;
    }
  }
  // return 0 if not found.
  return (min !== Infinity) ? min : 0;
}