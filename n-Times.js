/**
 * nTimes takes an integer and a function, and
 * returns a function that will invoke the original function the first n times the new function is invoked. The nth + 1 invocation
 * (and all subsequent invocation) of the new function will return the result of
 * the last func invocation. The new function should invoke func with any arguments
 * passed to the new function.
 *
 * HINT: n-times is the generalized version of once - for example,
 * passing 1 into n-times is the equivalent of the once function.
 *
 * var add = function(a, b) {
 *   return a + b;
 * }
 *
 * var add3Times = nTimes(3, add);
 * add3Times(1, 5) // returns 6
 * add3Times(4, 9) // returns 13
 * add3Times(6, 5) // returns 11
 * add3Times(2, 3) // returns 11
 * add3Times(9, 8) // returns 11
 *
 */

var nTimes = function(n, func) {
  // Your code here.
  // create an res obj  to cache results : key is params, value is result
  var resObj = {};
  // create a varaible to keep track of times called
  var callTimes = 0;
  // check if n is greater than n
  if (calltimes > n) {
    // return cached result from res obj
    return resObj[]...
  } else {
      // else
    // return a function that invoke func with any arguments
    return func.apply(this, arguments);
    // add one to calltimes cus we called once.

    callTimes++;
  }
};