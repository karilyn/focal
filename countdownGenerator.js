const countdownGenerator = function (x) {
  let time = 4
  return function() {
    if (time > 0) {
    time -= 1;
    }
    return time;
  }
};

const countdown = countdownGenerator(3);

console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
