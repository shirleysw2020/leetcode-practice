/*
207. Course Schedule Medium. (very similar to 210. Course Schedule II )
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [b, a] of prerequisites) {
    if (graph.has(a)) {
      graph.get(a).push(b);
    } else {
      graph.set(a, [b]);
    }
    indegree[b]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const a = queue.shift();
    if (graph.has(a)) {
      for (const b of graph.get(a)) {
        indegree[b]--;
        if (indegree[b] === 0) queue.push(b);
      }
    }
    order.push(a);
  }

  return numCourses === order.length;
};