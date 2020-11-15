/*
202. Happy Number
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n, fast = n;
  while(true) {
    slow = square(n);
    fast = square(square(n));
    if (slow == fast) {return false}
    if (fast == 1) {return true}
  }
  function square(n) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) ** 2;
      let n = Math.floor(n/10);
    }
    return sum;
  }
};