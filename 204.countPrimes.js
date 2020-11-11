/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let primeCount = 0;

  const isPrimeArr = new Array(n);
  isPrimeArr.fill(true); // true means is prime

  // start from the smallest possible prime number - 2
  for (let i = 2; i < n; i++) {
      if (isPrimeArr[i] == true) {
          primeCount++;
          // calculate the future non-prime numbers based on the current prime number
          for (let j = 2; i*j < n; j++) { //O(log(logn))
              isPrimeArr[i*j] = false;
          }
      }
  }
  return primeCount;
};
/*
Each time we hit a prime, we have to launch a search through the rest of the array to "cross out" the multiples of that prime because we know they aren't prime (The Sieve of Erothostanes). But how many "cross outs" do we have to do for each prime?

Well,

For 2, we have to cross out n/2 numbers.
For 3, we have to cross out n/3 numbers.
For 5, we have to cross out n/5 numbers.
...etc for each prime less than n.

This means that the time complexity of "crossing out" is O(n/2 + n/3 + n/5 + ... + n/(last prime before n)).

What can this sum be simplified to in terms of n?

Well, for starters, we can factor out the n:

O(n/2 + n/3 + n/5 + ... + n/(last prime before n))
= O(n) * O(1/2 + 1/3 + 1/5 + ... + 1/(last prime before n))

What can O(1/2 + 1/3 + 1/5 + ... + 1/(last prime before n)) be simplified to in terms of n?

I won't go into detail here but the answer is essentially bounded by log(log(n)). The proof for this is summed up well here for those interested: http://www.cs.umd.edu/~gasarch/BLOGPAPERS/sump.pdf

So now we have that the time complexity of "crossing out" is:

O(n) * O(1/2 + 1/3 + 1/5 + ... + 1/(last prime before n))
= O(n) * O(log(log(n)))
= O(nlog(log(n)))
*/