export class Elephant {
  constructor(name, ears, trunk) {
    this.name = name;
    this.earSize = ears;
    this.trunkColor = trunk;
  }

  whatsUpElephant() {
    console.log(`${this.name}, the elephant, says whats up`);
  }
}