let keyTimes = [[0,2], [1,5], [0,9], [2, 15]];

function keyPress (keyTimes) {
  let maxTime = 0;
  let maxKey;

  for (let i = 0; i < keyTimes.length; i++) {
    let curKey;
    if (i == 0) {
      curKey = keyTimes[i+1][1] - keyTimes[i][0];
    } else {
      curKey = keyTimes[i][1] - keyTimes[i-1][1];
      if (curKey > maxTime) maxKey = keyTimes[i][0];
    }
  }
  return String.fromCharCode(maxKey+97);
}

console.log(keyPress(keyTimes));