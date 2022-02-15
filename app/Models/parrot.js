export class Parrot {
  constructor(name, age, wings, annoying) {
    this.name = name;
    this.age = age;
    this.hasWings = wings;
    this.isAnnoying = annoying;
  }

  whatUpParrot() {
    console.log(`${this.name}, the parrot, says whats up`);
  }
}