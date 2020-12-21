/*
Mr.O has recently shut down his factory and want to sell off his metal rods to a local business.
To maximize profit, he should sell the metal of same size and shape.

If he sells metal rods of length, he receives N x L x metal_price. The remaining smaller metal rods will be thrown away. To cut the metal rods, he needs to pay cost_per_cut for every cut.

What is the maximum amount of money Mr.O can make?

Input Format:
1st line: cost_per_cut
2nd line: metal_price
3rd line: contains L, the number of rods Mr. O has, followed by L integers in each line representing length of each rod.

Output Format:
Print the result corresponding to the testcase.

Constraints:
1 <= metal_price, cost_per_cut <= 1000
1 <= L <= 50
Each element of lengths will lie in range [1, 10000].

Sample Input#00:
1 - price per cut
10 - metal price
3 - number of rods
26 - rod1
103 - rod2
59 - rod3

Sample Output#00:
1770
*/

function getProfit(cpc, metal_price, rods) {
  let maxProfit = 0;
  let maxLen = Math.max(...rods);

  for (let i = 1; i <= maxLen; i++) { //try out all length for cuts
    let curLen = i;
    maxProfit = Math.max(maxProfit, currentProfit(cpc, metal_price, rods, curLen));
  }

  return maxProfit;
}

function currentProfit(cpc, price, rods, curLen) {
  let res = 0;
  let cost = 0;
  if (curLen == 0) return -Infinity;

  for (let rod of rods) {
    let numOfRods = Math.floor(rod/curLen);
    if (numOfRods > 0) {
      res += price * numOfRods * curLen;
      cost += (numOfRods - 1) * cpc + (rod % curLen != 0 ? 1 : 0) * cpc;
    }
  }
  res -= cost;
  return res;
}
console.log(getProfit(100,10,[26,59,103]));
// console.log(getProfit(1,10,[26,103,59]));

// int cutCost2 = 100, price2 = 10;
// int[] nums2 = {26, 59, 103};