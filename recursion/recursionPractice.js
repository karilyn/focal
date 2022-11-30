// count to 12 with a loop
// let number = 0;
// while (number <= 12) {
  // console.log(number);
  // number += 2;
// };

// recursion is a funtion that calls itself until it doesn't

function countEvenToTwelve(number) {
  if (number <= 12) { // recursive case
    console.log(number);
    // function will call itself until it reaches the base case of 12
    countEvenToTwelve(number+2)
  }
}
countEvenToTwelve(0);

/*
function countUpFrom(number) {
  // this has no stopping point so it will crash
  console.log(number);
  countUpFrom(number+1);
}
countUpFrom(1);
*/
