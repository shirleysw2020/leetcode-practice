const minSum = (nums, k) => {
  let sum = Infinity;
  function findMin(times, candidate) {
    if (k == times) {
      //add to sum and get minimum
      let curSum = 0;
      for (let n of nums) {
        curSum += n;
      }
      sum = Math.min(sum, curSum);
      return;
    }
    //for loop take turn choosing candidate
    for (let i = 0; i < nums.length; i++) {
      //divide candidate by 2 and ceil it
      let newNum = Math.ceil(nums[i]/2);
      // call function again with new num, increase times
      nums.splice(i, 1, newNum);
      findMin(times+1, nums);
      nums[i] = Math.floor(nums[i]*2);
    }
  }
  findMin(0,null);
  return sum;
}
let k = 4
console.log(minSum([10,20,7], k));