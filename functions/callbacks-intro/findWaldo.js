// expected output "Found Waldo at index 2"

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (names[i] === "Waldo") {
      found(i); // execute callback function
    }
  }
};

const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!");
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);