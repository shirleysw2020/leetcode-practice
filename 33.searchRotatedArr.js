/*
easy to do in O(n). solve this in O(logn)
use binary search

first determine which part is still in sorted order after rotation
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index
 */
var search = function(nums, target) {
let l = 0, r = nums.length-1;

while (l <= r) {
  let mid = Math.floor((l+r)/2);
  if (nums[mid] == target) return mid;
  //if left part is sorted
  if (nums[l] <= nums[mid]) {
    if (nums[l] <= target && target < nums[mid]) {
      r = mid-1;
    } else {
      l = mid+1;
    }
  } else {
    if (nums[mid] < target && target <= nums[r]) {
      l = mid+1;
    } else {
      r = mid-1;
    }
  }
  return -1;
}