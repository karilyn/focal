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