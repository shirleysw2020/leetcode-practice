// prices = [p_1, p_2, ...], orders = [0, 1, 1, 0, ...], 0表示buy, 1表示sell, 让你找到一个contiguous subarray of length k in orders, 把他们全flip成1以后revenue能最大

let prices = [2,1,6,4,5,9];
let orders = [0,0,1,0,1]; //0-buy, 1-sell
let maxProfit = function(prices, orders, k) {
  let start = 0;
  let max = 0;
  let orderIdx = 0;
  let res = [];
  let curStock = 0;
  let profit = 0;
  while (start <= prices.length - k) {
    //if current index is the start of subarray we are changing to all 1s
    if (orderIdx == start) {
      for (let i = start; i <= k; i++) {//sell x k times
        if (curStock > 0) {
          profit += prices[orderIdx]; //4
          curStock--; //0
          orderIdx++; //2
        } else {
          break;
        }
      }
      start++;
      orderIdx = 0;
    } else {
    // original part of array we are not changing
      if (orders[orderIdx] == 0) { // buy
        profit -= prices[orderIdx]; //-2
        curStock++; //1
      } else {
        if (curStock > 0) profit += prices[orderIdx];
        curStock--;
      }
      orderIdx++;
    }
    if (profit > max) {
      res = prices.slice(start-1, start-1+k);// update res subarray
      max = profit; // update max - 4
      profit = 0; //reset profit
    }
  }
  return res;
}

console.log(maxProfit(prices, orders, 3));