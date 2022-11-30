// function swapper will receive two keys and two objects
// and should swap the values of the given keys
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");
  // set key1 to 'a' for the first set of objects
  // let key1 = 'a';
  //  let key2 = 'c';
  // store the temporary value of object1[key1]
  let temp = object1[key1];
  // change the value of object2[key2] to the value of object1[key1]
  object1[key1] = object2[key2];
  // change the value of object1
  object2[key2] = temp;
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });


// EXPECTED LOGS
/*
Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 }
*/




/*
console.log("Swap!");
  for (let key in Object.keys(object1)) {
    if ((object1[key]) === key1) {
      object1[key] = ??
    }
  }
  for (let key2 in Object.keys(object2)) {
    if ((object2[key2]) === key2) {
      object2[key2] = object1[key]
    }
  }

  console.log("object1: ", object1);
  console.log("object2: ", object2);
  */