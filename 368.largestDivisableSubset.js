var largestDivisibleSubset = function(nums) {
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