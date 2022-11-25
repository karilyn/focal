/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/
// take in a single string as a command line argument
const str = process.argv[2];

function obfuscate(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      newStr += "4";
      continue;
    }
    if (str[i] === "e") {
      newStr += "3";
      continue;
    }
    if (str[i] === "o") {
      newStr += "0";
      continue;
    }
    if (str[i] === "l") {
      newStr += "1";
      continue;
    }
    newStr += str[i];
  }
  return newStr;
}

console.log(obfuscate(str));