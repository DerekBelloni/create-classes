export class Trex {
  constructor(name, age, extinct) {
    this.name = name;
    this.age = age;
    this.isExtinct = extinct;
  }

  whatsUpTRex() {
    console.log(`${this.name}, the t rex, says whats up`);
  }
}