// when we name a funciton, this function is stored within the name associated with it.
// eslint-disable-next-line func-style
// this means we can access the function aftwerwards by using their name
function square(number) {
  return number * number;
}
console.log(square(5));

// ANONYMOUS FUNCTIONS
// they can be used as expressions in diff scenarios
// access anonymous functions by using their variable

const anotherSquare = function(number) {
  return number * number;
};
console.log(anotherSquare(7));

// full syntax of arrow function
const finalSquare = (number) => {
  return number * number;
};
console.log(finalSquare(3));

//simplified syntax of arrow function
const finalSquareSimplified = number => number * number;
console.log(finalSquareSimplified(4));