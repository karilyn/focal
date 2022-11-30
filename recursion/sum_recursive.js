// return the sum of every whole number from n down to 1
// base case
function sumToOne(n) {
  if (n === 1) { // base case
    return 1;
  }
  return n + sumToOne(n - 1);
}
console.log(sumToOne(4));

/*
The simplest input to this function is 1:
sumToOne(1) = 1

The next simplest input is 2 which requires the least amount of work after 1:
sumToOne(2) = 2 + 1

Then it's 3:
sumToOne(3) = 3 + 2 + 1

Then 4:
sumToOne(4) = 4 + 3 + 2 + 1

sumToOne(1) = 1
sumToOne(2) = 2 + sumToOne(1)
sumToOne(3) = 3 + sumToOne(2)
sumToOne(4) = 4 + sumToOne(3)
sumToOne(n) = n + sumToOne(n-1)
*/