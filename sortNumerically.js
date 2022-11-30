//Sort numerically and ascending:
let myArray = [1, 2, 5, 9, 10]
myArray.sort(function(a,b) {
  // smaller element always appears to the left
  return a - b;
});
console.log(myArray);