https://www.sitepoint.com/javascript-private-class-fields/
class Animal {
  constructor(name = 'anonymous', legs = 4, noise = 'nothing') {
    this.type = 'animal';
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }
  speak() {
    console.log(`${this.name} says "${this.noise}"`);
  }
  set eats(food) {
    this.food = food;
  }
  get dinner() {
    return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
  }
}
// let rex = new Animal('Rex', 4, 'woof');
// rex.eats = 'anything';
// console.log( rex.dinner );  // Rex eats anything for dinner.

// class Human extends Animal {
//   constructor(name) {
//     // call the Animal constructor
//     super(name, 2, 'nothing of interest');
//     this.type = 'human';
//   }
//   speak(to) {  // override Animal.speak
//     super.speak();
//     if (to) console.log(`to ${to}`);
//   }
// }
// let don = new Human('Don');
// don.speak('anyone');        // Don says "nothing of interest" to anyone

class Human extends Animal {
  constructor(name) {
    // call the Animal constructor
    super(name, 2, 'nothing of interest');
    this.type = 'human';
    // update count of Human objects
    Human.count++;
  }
  // override Animal.speak
  speak(to) {
    super.speak();
    if (to) console.log(`to ${to}`);
  }
  // return number of human objects
  static get COUNT() {
    return Human.count;
  }
}

// static property of the class itself - not its objects
Human.count = 0;

console.log(`Humans defined: ${Human.COUNT}`); // Humans defined: 0

let don = new Human('Don');
console.log(`Humans defined: ${Human.COUNT}`); // Humans defined: 1

let kim = new Human('Kim');
console.log(`Humans defined: ${Human.COUNT}`); // Humans defined: 2