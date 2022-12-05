function sayHelloTo(person) {
  console.log(`Hello ${person}!`);
};

// we need to actually export the function
module.exports = sayHelloTo;