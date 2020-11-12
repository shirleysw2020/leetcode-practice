/**
122. Best Time to Buy and Sell Stock II

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
function maxp(pricesArrofNum) {
    let max = 0; //worsse case, we dont make profit
    for (let i = 0; i < pricesArrofNum.length; i++) {
        max +=  (Math.max(0, pricesArrofNum[i] - pricesArrofNum[i-1]));
    }

    return max;
}