/**
 * Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

 * @param {number[]} nums
 * @return {number}
 */
//561234
let findMin = (nums) => {
  if (nums.length == 1) return nums[0];
  if (nums[0] < nums[nums.length-1]) {
    return nums[0];
  }
  let l = 0;
  let r = nums.length-1;
  while (l < r) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] > nums[r]) {
      l = mid+1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};

console.log(findMin([11,13,15,17]));