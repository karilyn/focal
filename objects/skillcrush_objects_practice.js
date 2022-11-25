/*
cat.name = "Fred";
cat.nickname = "Floofalicious";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"];
cat.pet = function () {
  return "purrrrrrrrr";
};
console.log(cat);
console.log(cat.nickname);
console.log(cat["name"]);
*/
const cat = {
  name: "Fred",
  nickname: "Floofalicious",
  age: 5,
  isSleeping: true,
  favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
  pet: function () {
    return "purrrrrrrr";
  },
  play: function () {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`;
  }
}
// console.log(cat);
cat.isSleeping = false;
cat["color"] = "orange";
console.log(cat);

/*
cat.play = function () {
  this.isSleeping = false;
  return `${this.nickname} is awake and playing!`
}
*/
console.log(cat.play());
