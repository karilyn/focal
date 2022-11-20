function average(list) {
  var sum = 0;

  for (let num of list) {
    sum += num;
    console.log(sum);
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]))