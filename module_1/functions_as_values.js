// normal function definition
function getTriangleArea(base, height) {
  return (base*height)/2;
};
// console.log(getTriangleArea(4, 10));

//const array = [1, true, {}, "hello world", getTriangleArea];
// we can access the function through the array too
//console.log(array[4],(4,5));


const area = getTriangleArea;
console.log(area(6,4));

const myObject = {
  myMethod: getTriangleArea,
};
console.log(myObject.myFunction(7, 4));
