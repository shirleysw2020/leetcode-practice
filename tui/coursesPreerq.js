
const input = [
  ['art1', 'art2'],
  ['art2', 'art3'],
  ['art3', 'art4'],
  ['art4', 'art5'],
  ['art5', 'art6'],
  ['art6', 'art7'],
  ['art7', 'art8']
];

let courseSchedule = function(courses) {
  let m = new Map(); // tracks course and prereq relationship
  let indegree = new Map(); //tracks num of precourse needed
  let mid = Math.floor((courses.length)/2);
  if (courses.length % 2 == 0) mid -= 1;

  for (let pair of courses) { //O(n) or O(V + E)v is vertices, e is edges
    m.set(pair[0], pair[1]);
    if (!indegree.has(pair[0])) indegree.set(pair[0], 0);
    if (!indegree.has(pair[1])) indegree.set(pair[1], 0);
    indegree.set(pair[1], indegree.get(pair[1]) + 1);
  }
  let queue = [];
  for (let pair of indegree) { //O(n)
    if (pair[1] == '0') {
      queue.push(pair[0]);
      break;
    }
  }
  while (mid) { //O(n/2)
    let cur = queue.shift();
    queue.push(m.get(cur));
    mid--;
  }
  return queue.pop();
}

console.log(courseSchedule(input));
