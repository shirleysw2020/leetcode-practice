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
          for (let j = 2; i*j < n; j++) {
              isPrimeArr[i*j] = false;
          }
      }
  }
  return primeCount;
};