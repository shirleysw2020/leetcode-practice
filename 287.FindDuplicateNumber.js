/*
287. Find the Duplicate Number  (Medium)

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(n) time and O(1) space. other way to solve it include set and simple iteration but they use O(n) space
var findDuplicate = function(nums) {
  // turtle and hare race by Floyd's law
  let turtle = nums[0];
  let hare = nums[0];
  //at end of first loop, they end at same spot.
  // hare goes twice as fast as turtle
  do {
      turtle = nums[turtle];
      hare = nums[nums[hare]];
  } while(turtle !== hare);
  //then hare slows down to have turtle catch up to find the intersection point
  // turtle starts from beginning again - entrance point
  turtle = nums[0];
  while (turtle !== hare) {
      turtle = nums[turtle];
      hare = nums[hare];
  }
  return hare;
};