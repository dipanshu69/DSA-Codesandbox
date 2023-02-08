//fibSeries

// const fibSeries = (n) => {
//   let fib = [0, 1];
//   if (n === 2) {
//     return fib;
//   } else {
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
//   }
// };

// console.log(fibSeries(7));
// //Big-O = O(n);

//Factorial of a number

// const factorial = (n) => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };

// console.log(factorial(5));

// //Big-O = O[n];

//Prime number
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(9));

//big-O = O(n);linear 
