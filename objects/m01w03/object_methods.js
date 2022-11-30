const person = {
  firstName: 'Bob', // property containing data
  lastName: 'Smith',
  fullName: function () {
    // this refers to the object the method was called on.
    return this.firstName + ' ' + this.lastName;
  }
}

// console.log(person.firstName);
// console.log('Hello, ' + person.firstName + ' ' + person.lastName);
console.log('Hello, ' + person.fullName());

const someObject = {
  foo: 1,
  bar: function () {
    console.log('hello bar!')
  }
}
someObject.bar();