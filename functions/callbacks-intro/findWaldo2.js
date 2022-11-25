// refactor with a forEach loop

const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index); // execute callback function
    }
  });
};

const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!");
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);