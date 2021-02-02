/*
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*/
//only one transaction allows, diff from 122!
let sellStock = (prices) => {
  let curMax = 0;
  let max = -Infinity;
  for (let i = 1; i < prices.length; i++) {
    curMax = Math.max(0, curMax += prices[i] - prices[i-1]);
    max = Math.max(max, curMax);
  }
  return max;
  /* 2nd approach */
  // let minPrice = Infinity;
  // let max = 0;
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] < minPrice) {
  //     minPrice = prices[i];
  //   } else if (prices[i] - minPrice > max) {
  //     max = prices[i] - minPrice;
  //   }
  // }
  // return max;
}
let prices = [7,1,5,3,6,4];

console.log(sellStock(prices));