/*
215. Kth Largest Element in an Array  Medium

https://leetcode.com/problems/kth-largest-element-in-an-array/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // return nums.sort((a,b) => b-a)[k-1];
let quickSelect = function(nums, low, high, k) {
  let pivot = low;
  for (let j = low; j < high; j++) {
    if (nums[j] < nums[high]) {
      swap(nums, pivot++, j);
    }
  }
  swap(nums,pivot,high);

  let distance = high - pivot + 1;
  if (distance == k) {
    return nums[pivot];
  } else if (distance > k) {
    return quickSelect(nums, pivot+1, high, k);
  } else {
    return quickSelect(nums, low, pivot-1, k-distance);
  }
}
return quickSelect(nums, 0, nums.length-1, k);
  function swap(nums, i, j) {
    if(i == j) return;
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};