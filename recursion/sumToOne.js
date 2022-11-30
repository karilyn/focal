// return the sum of every whole number from n down to 1

function sumToOne(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumToOne(4));

// function sumToOne(n) {  if (n > 0)}