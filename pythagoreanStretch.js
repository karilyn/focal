// The result should be an array of numbers corresponding to the x-y pairs
// provided in the input array (ie: calculate z given x and y).
// result will be an array

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(function(result) {
  let numbers = Object.values(result);
// Math.pow returns the value of a base expression taken to a specified power.
  return Math.sqrt(Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2));
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// Pythagoraean theorem: z^2 = x^2 + y^2.