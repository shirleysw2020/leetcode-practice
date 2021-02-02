/*
107. Binary Tree Level Order Traversal II.  Easy

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:
Given binary tree [3,9,20,null,null,15,7],
3
/ \
9  20
/  \
15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

/**
 * Definition for a binary tree node.

 /**
  * @param {TreeNode} root
  * @return {number[][]}
  */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1);
let left1 = new TreeNode(2);
root.left = left1;
let right1 = new TreeNode(3);
root.right = right1;

var levelOrderBottom = function(root) {
  //use dfs.
  let res = [];
  function helper(root, level) {
    if (!root) return;

    if (!res[level]) res[level] = []; // make an empty array
    res[level].push(root.val);

    helper(root.left, level+1);
    helper(root.right, level+1);
  }
  helper(root, 0);
  return res.reverse();
};

console.log(levelOrderBottom(root))