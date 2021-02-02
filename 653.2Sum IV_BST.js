/*
653. Two Sum IV - Input is a BST.   Easy

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
*/


// bfs approach
var findTarget = function(root, k) {
  let queue = [root], map = new Map();
  while (queue.length) {
    let curr = queue.shift();
    if (map.has(curr.val)) return true;
    map.set(k - curr.val, curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};

// dfs approach
var findTarget = function(root, k) {
  let map = new Map();
  return dfs(root,k);
  function dfs(root, k) {
      if (!root) return false;
      if (map.has(root.val)) return true;
      map.set(k - root.val, root.val);
      return dfs(root.left, k) || dfs(root.right, k);
  }
}

/*
Time complexity : O(n). The entire tree is traversed only once in the worst case. Here, n refers to the number of nodes in the given tree.

Space complexity : O(n). The size of the setset can grow upto n in the worst case.
*/