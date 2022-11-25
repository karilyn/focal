// you can call any of the functions below with their name
// function myFunction() {};
// const anotherFunction = function() {};
// const finalFunction = () => {}

const sayHello = (person, message) => {
  // using return lets us use the function elsewhere
  return `${person} says ${message}`;
};

sayHello('Karilyn', 'hello world!');
console.log(sayHello('Bob,', 'can we build it?'));

// below just passes a reference to the function
// [Function: sayHello]
console.log(sayHello);