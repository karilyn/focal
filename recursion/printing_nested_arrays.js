/*const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      // call printItems with the array 'item'
      printItems(item);
    } else {
    console.log(item)
    }
  }
}
const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
*/


const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item)
    }
  }
}