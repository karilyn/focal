// we're using the built in jas tools
const assert = require('assert');
const { sayHello, sayHelloWithName }  = require('./sayHello')

assert.equal(sayHello(), 'Hello there!');
assert.equal(sayHelloWithName('Karilyn'), 'Hello there Karilyn!')


