function prisonBreak(n, m, horz, vert) {
  /*
  The trick is to find the length of maximum gaps horizontally and vertically
  and multiply it to get the area.
  */
  let horzMax = 1;
  let vertMax = 1;

  let horzSet = new Set([...horz]);
  let vertSet = new Set([...vert]);

  hMax = findMax(m+1, horzSet);
  vMax = findMax(n+1, vertSet);

  function findMax(range, set) {
    let pre = 0;
    let max = 1;
    for (let i = 0 ; i <= range; i++) {
      if (!set.has(i)) {
        if (i - pre > max) {
          max = i - pre;
        }
        pre = i;
      } else {
        continue;
      }
    }
    return max;
  }

  return vMax * hMax;
}

console.log(prisonBreak(6,6,[4,5,6],[5,6]));