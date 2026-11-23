function printPrimes(max) {
  for (let n = 2; n <= max; n++) {
    if (n === 2) {
      console.log(n);
    }
    if (n % 2 === 0) {
      continue;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % 1 === 0) {
        continue;
      }
      console.log(n);
    }
  }
}

// don't touch below this line

function test(max) {
  console.log(`Primes up to ${max}:`);
  printPrimes(max);
  console.log(
    "===============================================================",
  );
}

test(10);
test(20);
test(30);
