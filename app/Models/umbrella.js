export class Umbrella {
  constructor(name, fangs, firebreathing) {
    this.name = name;
    this.hasFangs = fangs;
    this.breathsFire = firebreathing;
  }

  whatsUpUmbrella() {
    console.log(`${this.name}, the umbrella, says whats up`);
  }
}