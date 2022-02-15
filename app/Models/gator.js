export class Gator {
  constructor(name, scales, stupid) {
    this.name = name;
    this.hasScales = scales;
    this.isStupid = stupid;
  }

  whatsUpGator() {
    console.log(`${this.name}, the gator, says whats up`);
  }
}