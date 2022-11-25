/*
const myFn = function() {
  console.log("I am a function");
};
myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
*/

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(); // execute callback function
    }
  }
};

const actionWhenFound = function() {
  console.log("Found him!");
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);