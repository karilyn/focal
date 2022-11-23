// write a function searches an array for raisins

const raisinAlarm = function(cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  } else {
    return "All good!";
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let newArr = [];
  for (let x = 0; x < cookies.length; x++) {
    newArr.push(raisinAlarm(cookies[x]));
  }
  return newArr;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);


// @mzparulina
// @karilyn