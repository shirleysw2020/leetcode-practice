/**
122. Best Time to Buy and Sell Stock II
//complete as many transactions as you like!different from 121.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for (var i = 1; i < prices.length; i++) {
        max += Math.max(0, prices[i] - prices[i-1]);
    }
    return max;
};
