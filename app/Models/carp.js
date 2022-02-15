export class Carp {
  constructor(name, fin, wet) {
    this.name = name;
    this.fin = fin;
    this.isWet = wet;
  }

  whatsUpCarp() {
    console.log(`${this.name} the ${this.isWet ? 'wet' : ''} carp, says whats up`)
  }
}