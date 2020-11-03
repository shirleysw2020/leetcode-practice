/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  nums.sort((a, b) => a - b);
    const r = [];
    // loop from beginning to second to last num
    for (let i = 0; i < nums.length - 2; i++) {
      // if smallest num is greater than 0 exit for loop entirely.
      if (nums[i] > 0) break;
       // this situation: no possible nagative numbers to sum to 0
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum < 0) {
          left += 1;
        } else if (sum > 0) {
          right -= 1;
        } else {
          r.push([nums[i], nums[left], nums[right]]);
          // look at next one if it's duplicate??
          while (left < right && nums[left] === nums[left + 1]) left += 1;
          while (left < right && nums[right] === nums[right - 1]) right -= 1;
          left += 1;
          right -= 1;
        }
      }
    }

    return r;
  };