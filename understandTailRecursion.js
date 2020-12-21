
//Tail Recursion
// Calculate as we go by using an accumulator argument. This is more efficient than traditional recursion which has to call itself until it cannot then start calculating backwards.

function go(n, acc) {
  if (n == 1) return acc;
  else (
    go(n - 1)(acc * N);
  )
}

function factorial(n) = go(n, acc);
factorial(4, 1);

/*
fac 4 = go (4,1)
      = go (4-1)(1*4)
      = go (3)(4)
      = go (2)(12)
      = go (1)(24)
      = 24
*/


// Make a single recursion call, and the last thing you do is make that recursive call. And that’s the last thing you ever do

// Fibonnachi example:
/*
0 1 1 2 3 5 8 13 21 ...... Infinity

Original:
fib 0 = 0
fib 1 = 1
fib n = fib(n-1) + fib(n-2)

WHY inefficient:
- uses double recursion - 2 recursion call
- recomputing same fibonnachi numbers all the time
*/


//currentFibNum, nextFibNum
fib 4 = go 4 (0,1) //0+1
      = go 3 (1,1) //1+1
      = go 2 (1,2) //1+2
      = go 1 (2,3)
      = 3 // reach base case: second component of the argument which is 3

go n (a,b) = go (n-1)(b,a+b);