// console.log("Hi from native example!")

// TDD
// console.assert(true, "does nothing");
// console.assert(false, "assertion is false");

// console.assert(2 === 2, "does nothing");
// console.assert(2 ===4, "assertion is false");

const { sayHelloWithName } = require('./sayHello')

console.assert(sayHelloWithName('Karilyn') === "Hello there Karilyn!", "sayHello assertion failed");

console.log('expected: ', 'Hello there Karilyn!',
'actual: ', sayHelloWithName('Karilyn'),
'passed? ', sayHelloWithName('Karilyn') === 'Hello there Karilyn!');

// this still isn't the right way to test because it's just printing,
// it's not returning values
console.table({
  expected: 'Hello there Karilyn!',
  actual: sayHelloWithName('Karilyn'),
  passed: sayHelloWithName('Karilyn') === 'Hello there Karilyn!'
});
