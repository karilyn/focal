// reverse a string without using any inbuilt javascript functions
// use command line arguments as input but not the first two lines
const str = process.argv.slice(2).join("\n");

//let str = "1 fish 2 fish"
reversey = function(str) {
  let r = "";
  //start at the last letter (str.length - 1),
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}
console.log(reversey(str));