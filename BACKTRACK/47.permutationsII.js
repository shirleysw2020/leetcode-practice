/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = function (cur, nums, res) {
  if (nums.length == 0) {
      res.push(cur.slice()); //empty out cur to put in res
      return;
  };
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i - 1]) continue; //avoid duplicate
      cur.push(nums[i]);
      nums.splice(i, 1); //delete the letter we just added
      helper(cur, nums, res);
      nums.splice(i, 0, cur.pop());// add back the letter we deleted
  };
};
var permuteUnique = function(nums) {
  let cur = [], res = [];
  nums.sort();
  helper(cur, nums, res);
  return res;
};

console.log(permuteUnique([1,1,2]))
