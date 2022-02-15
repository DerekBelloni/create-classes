export class Xylophone {
  constructor(name, age, fins) {
    this.name = name;
    this.age = age;
    this.hasFins = fins;
  }

  whatsUpXylophone() {
    console.log(`${this.name}, the xylophone, says whats up.`);
  }
}