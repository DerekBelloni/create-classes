export class Zebra {
  constructor(name, age, stripes) {
    this.name = name;
    this.age = age;
    this.hasStripes = stripes;
  }

  whatsUpZebra() {
    console.log(`${this.name}, the zebra, says whats up.`);
  }
}