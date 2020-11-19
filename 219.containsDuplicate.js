/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let cache = {};
  for (let i = 0; i < nums.lenght; i++) {
    if (i - cache[nums[i]] <= k) {
      return true;
    } else {
      cache[nums[i]] = i;
    }
  }
  return false;
}