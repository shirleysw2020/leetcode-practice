/*
96. Unique Binary Search Trees
*/

/**
 * @param {number} n
 * @return {number}
 */

/*
Utilize memoization to find out how many different combinations of BST there are for given n nodes, so we can reuse that information as we increase n nodes.
constraint:  n's value will always be from 1 - n
For example: when n is 4 ( asking us how many unique ways to construct BST when given 4 nodes.)
      1             2               3               4
   /    \         /   \           /   \           /   \
* dp[0] dp[1]   dp[1] dp[2]     dp[2] dp[1]    dp[3] dp[0]   *
* root-1 n-R   root-1  n-R     root-1  n-R    root-1 root-1  *
*/
var numTrees = function(n) {
  let dp = Array(n+1).fill(0);
  dp[0] = 1; //1 possible construction when given 0 node
  dp[1] = 1; //1 possible construction when given 1 node
  for (let node=2; node<=n; node++) { //for this many given nodes
    for (let root=1; root<=node; root++) { //try dif roots starting from 1
      dp[root] += (root-1) * (node-root); //root-1 is roots lesser than cur root. node-root is roots greater than cur root
    }
  }
  return dp[n];
};