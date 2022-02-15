export class Rat {
  constructor(name, age, gross) {
    this.name = name;
    this.age = age;
    this.isGross = gross;
  }

  whatsUpRat() {
    console.log(`${this.name}, the rat, says whats up`);
  }
}