const fibSeries = (n) => {
  let fib = [0, 1];
  if (n === 2) {
    return fib;
  } else {
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
};

console.log(fibSeries(7));
//Big-O = O(n);
