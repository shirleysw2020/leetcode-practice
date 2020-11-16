var findOrder = function(numCourses, prerequisites) {
  let map = new Map();
  let queue = [];
  let res = [];
  let classWithPrereqs = Array(numCourses).fill(0);

  for (var courses [b,a] of prerequisites) {
    if (!map.has(a)) {
      map.set(a, [b]);
    } else {
      map.get(a).push(b);
    }
    classWithPrereqs[b]++;
  }

  for (var i = 0; i < classWithPrereqs.length; i++) {
    if (classWithPrereqs[i] == 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    let first = queue.shift();
    if (map.has(first)) {
      for (var b of map.get(first)) {// access array at value of map
        classWithPrereqs[b]--;
        if (classWithPrereqs[b] == 0) queue.push(b);
      }
    }
    res.push(first);
  }

  return res.length === numCourses ? res : 0;
};

findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);