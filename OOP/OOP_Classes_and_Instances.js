class Pizza { // we first create a Pizza class in order to create pizza objects
  constructor(size, crust, delivery) {
    this.size = size;
    this.crust= crust;
    // this.toppings creates a property named toppings
    this.toppings = ["cheese"]; // every pizza instance will stat off with cheese
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  delivery() {
    this.isDelivery = true;
  }
  pickup() {
    this.isDelivery = false;
  }

  // GETTERS AND SETTERS CODE
  setSize(size) {
    this.size = size
  }
  getSize(size) {
    return this.size;
  }

}


// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m

// let pizza1 = new Pizza("large", "thin"); // an instance of the Pizza class
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// pizza1.delivery();
// console.log(pizza1);


// let pizza2 = new Pizza("small", "extra thin"); // an instance of the PIzza class
// pizza2.addTopping("more cheese");
// pizza2.addTopping("pepperoni");
// pizza2.addTopping("pineapple");
// pizza2.pickup();
// console.log(pizza2);
// the below won't work because it's a method only available to actual instances of Pizza
// Pizza.addTopping("pepperoni");

// constructor is a special kind of method that gets executed
// when an object instance is created from a class.