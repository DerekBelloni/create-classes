export class Beaver {
  constructor(name, teeth, tail, lame) {
    this.name = name;
    this.teeth = teeth;
    this.tail = tail;
    this.isLame = lame;
  }
  whatsUpBeaver() {
    console.log(`${this.name} the ${this.isLame ? 'lame' : ''} beaver, says whats up`);
  }
}