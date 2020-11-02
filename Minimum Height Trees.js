/*
310. Minimum Height Trees
A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

example:
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

link: https://leetcode.com/problems/minimum-height-trees/
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n <= 1) return [0];

  // construct a map with keys as node val(using idx), and values as empty Set
  let adjList = new Map();
  for (let i = 0; i < n; i++) {
      adjList.set(i, new Set());
  }

  // for every edge provided, add each node on a edge into map
  // now we have a map made up of adjacent nodes
  for (let edge of edges) {
      // add adjacent node into the Set of each node
      adjList.get(edge[0]).add(edge[1]);
      adjList.get(edge[1]).add(edge[0]);
  }

  // leaves will hold nodes that has only one node as its adjacent. These are leaf nodes
  let leaves = [];
  for (let [key, value] of adjList) {
      if (value.size == 1) leaves.push(key);
  }

  // trim leave nodes (outtermost layer), and look inward
  // n > 2 because the least height should have at least 2 nodes (1 edge), if less this, edge case took care of it on first line when n <= 1
  while (n > 2) {
      // n will become how many nodes left have potential to be nodes that make MHTs
      n -= leaves.length;
      // The goal is to remove leaves from graph and find new leaves
      let newLeaves = [];
      // remove the adjacent nodes in all instances of adjList
      for (var leaf of leaves) {
          // neighbor is set's first value
          let neighbor = adjList.get(leaf).values().next().value;
          adjList.get(neighbor).delete(leaf);

          if (adjList.get(neighbor).size == 1) {
              newLeaves.push(neighbor);
          }
          adjList.delete(leaf);
      }
      leaves = newLeaves;
  }
  return leaves;
};