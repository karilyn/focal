//Write a program that takes a single parameter from the command line, a number,
//and rolls that many six-sided dice.

//Problems:
// 1. access a number from the the command line
const howManyDice = process.argv[2];


//console.log(Number(howManyDice));

// 2. gives a set number of Math.random outputs based on the howManyDice

function diceRoll(howManyDice) {
  let rollResult = [];
  for (let i = 0; i < howManyDice; i++) {
    rollResult.push((Math.floor(Math.random() * 6) +1));
  }
  return rollResult
 }


// 3. Outputs
console.log(`Rolled ${howManyDice} dice: ${diceRoll(howManyDice)}`);
