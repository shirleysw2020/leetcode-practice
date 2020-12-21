//     a
//   /  \
//  b    c
//   \  /
//     k
let input = [
  ['a','b'],
  ['a','c'],
  ['b','k'],
  ['c','k'],
  ['j','m'],
  ['e','l'],
  ['f','g'],
  ['e','f'],
  ['g','i'],
  ['g','h']
];

//initialize key as 0 in indegree - if they remain 0, they are root.
let findStartandEnd = function(input) {
  let m = new Map();
  let indegree = new Map();
  let res = new Map();

  for (let el of input) {
    if (!m.has(el[0])) {
      m.set(el[0], [el[1]]);
    } else {
      m.get(el[0]).push(el[1]);
    }
    if (!indegree.has(el[0])) indegree.set(el[0], 0);
    if (!indegree.has(el[1])) indegree.set(el[1], 0);
    indegree.set(el[1], indegree.get(el[1])+1); //only val of input will increase, since root wont exist in val, they remain as 0, this is how we identify which one is root.
  }

  let queue = [];
  for (let [key, val] of indegree) {
    if (val == 0) { // root
      let root = key;
      res.set(root, []);//initialize root in res
      queue.push(root);

      while (queue.length) {
        let curr = queue.shift();
        while (m.get(curr).length > 0) {
          let first = m.get(curr).shift();
          if (!m.has(first)) { // found leaf node
            if (first != res.get(root)) res.get(root).push(first);
          } else {
            queue.push(first);
          }
        }
      }
    }
  }

  let str = '';
  for (let [root, end] of res) {
    str += root + ': ' + end + '\n';
  }
  return str;
}

console.log(findStartandEnd(input));

// MAP:
// a - b, c
// b - k
// c - k

// INDEGREE:
// a - 0
// b - 1
// c - 1
// k - 2
// m - 1
// j - 0

  // ['a','b'],
  // ['a','c'],
  // ['b','k'],
  // ['c','k'],
  // ['j','m'],