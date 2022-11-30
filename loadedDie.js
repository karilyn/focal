/* const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)
*/

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = 0

  return function() {
    let loadedRoll = list[i];
    i++;
    return loadedRoll;
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
