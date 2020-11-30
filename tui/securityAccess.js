/*
if the pet has record 3 times within one hour(24 hour format, all times are valid) return its name and the times it entered. Only return the first 1-hour period if there are multiple ones.
*/
let history = [
  ['dog', 1355],
  // ['cat', 1910],
  ['bird', 830],
  ['dog', 1315],
  ['bird', 835],
  ['dog', 1405],
  ['dog', 1630],
  ['bird', 855],
  ['bird', 930],
  ['bird', 915]
  // ['cat', 1335],
  // ['cat', 730], 1315 1355 1405 1630
];

let frequentAccess = function(history) {
  let map = new Map();
  history.sort((a,b) => a[1] - b[1]);
  let res = new Map();

  for (let item of history) {
    let pet = item[0];
    let time = item[1];
    if (!map.has(pet)) {
      map.set(pet, [time]);
    } else {
      let cur = map.get(pet);
      map.get(pet).push(time);
      if (time - cur[0] <= 100) {//within 1 hr
        if (cur.length == 3 && !res.has(pet)) {
            res.set(pet,[...map.get(pet)]);
        }
      } else {
        map.get(pet).shift();
      }
    }
  }
  let str = '';
  for (let [item, time] of res) {
    str += item + ': ' + time + '\n';
  }
  return str;
}

console.log(frequentAccess(history));