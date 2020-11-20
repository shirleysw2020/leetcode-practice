// find greatest common divis0r of 2 numbers

let GCD = function(n1, n2) {
  let max = Math.max(n1,n2);
  let min = Math.min(n1,n2);
  let diff = max - min;
  if (max == diff) return max;
  return GCD(min, diff);
}

console.log(GCD(30,25));

// 252 105
// 105-min 147-diff

