// person is the superclass
// represents everything that was common between student and mentor
class Person {
  constructor(name, quirkyFact, emailAddress) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = emailAddress;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
  }


}

// Student is the subclass
class Student extends Person {
  // specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  // bio() { // this is called method overriding. It's overriding the superclass's method.
    // return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
  //}
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let student1 = new Student("Karilyn Kempton", "I have a sailboat", "karilyn.kempton@gmail.com");
student1.enroll("November 2022");
//console.log(student1);
console.log(student1.bio());


// let mentor1 = new Mentor("Jimmy New", "I am a LHL alumni like everyone else", "teach@teach.com");
// mentor1.goOnShift();

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
