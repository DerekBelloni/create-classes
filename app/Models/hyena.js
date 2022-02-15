export class Hyena {
  constructor(name, laughs, age) {
    this.name = name;
    this.doesLaugh = laughs;
    this.age = age;
  }

  whatsUpHyena() {
    console.log(`${this.name}, the hyena, says whats up`);
  }

}