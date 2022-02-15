export class Fancycat {
  constructor(name, meow, fancy) {
    this.name = name;
    this.doesMeow = meow;
    this.isFancy = fancy;
  }

  whatsUpCat() {
    console.log(`${this.name}, the fancy cat, says whats up`);
  }
}