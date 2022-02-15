export class Mongoose {
  constructor(name, age, snakes) {
    this.name = name;
    this.age = age;
    this.eatsSnakes = snakes;
  }

  whatUpMongoose() {
    console.log(`${this.name}, the mongoose, says whats up`);
  }
}