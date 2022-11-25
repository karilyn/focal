// what is a higher order function?
//const mexicanFood = ['tacos,', 'enchiladas', 'pozole', 'chilaquiles'];

//forEach expects a function inside. as an argument in order to access each element in the loop
// mexicanFood.forEach(food => console.log(food));

/*
forEach is an example of a HIGHER ORDER FUNCTION (HOF)
Higher Order Functions are functions that receive a functino as an argument
*/

/*
const movies = ['Avatar', 'Black Panther', 'Heat', 'Avatar 2'];
const callback = (movie, index) => console.log(index + 1, movie);
movies.forEach(callback);
*/


// PROBLEM SOLVING TIME
// 1. implement my own forEach

// const animalsArray = ['frog', 'bear', 'penguin', 'raccoon', 'lion', 'frog'];



// const mauiForEach = (array) => {
  // for (let i = 0; i < animalsArray.length; i++) {
    // console.log(animalsArray[i]);
  // }
// }

mauiForEach(animalsArray, showElementAndIndex);


// now with callbacks
const animalsArray = ['frog', 'bear', 'penguin', 'raccoon', 'lion', 'frog'];

// this is a higher order function because it takes another function as an argument
const mauiForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};
// this is a callback because it's being passed as an argument of another function
const animalLogger = (animal) => {
  const message = `The animal is ${animal}`;
  console.log(message);
};
mauiForEach(animalsArray, animalLogger);

// 2. Implemnet a forEachInReverse that does reverse iteration on an array and takes a callback much like a forEachwould
//  2.1 add a second parameter to the callback to support index passing

const animals = ['frog', 'bear', 'penguin', 'raccoon', 'lion', 'frog'];

const forEachInReverse = (array, cb) => {
  const finalIndex = animals.length - 1;
  for (let i = finalIndex; i >= 0; i--) {
    cb(array[i], i);
  }
};



const showElementAndIndex = (element, index) => {
  console.log(`[${index}] - ${element}`);
}
forEachInReverse(animals, showElementAndIndex);

