var largestDivisibleSubset = function(nums) {
    // sort the numbers bc we know a number has common divisor as its own divisor
    // if 8's dividable by 4, then 8 is also dividable by 4's divisor.

	  let count = Array(nums.length);
    let dividedIdx = Array(nums.length);
    nums.sort((a,b) => a-b);
    let max = 0, maxIdx = -1;

    for (let i = 0; i < nums.length; i++) {
        count[i] = 1;
        dividedIdx[i] = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] == 0) {
                if (1 + count[j] > count[i]) {
                    count[i] = 1 + count[j];
                    dividedIdx[i] = j;
                }
            }
        }
        if (count[i] > max) {
            max = count[i];
            maxIdx = i;
        }
    }
    let res = [];
    while (maxIdx != -1) {
        res.push(nums[maxIdx]);
        maxIdx = dividedIdx[maxIdx];
    }
    return res;
};