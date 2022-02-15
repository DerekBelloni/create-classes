export class Quail {
  constructor(name, credit, flies) {
    this.name = name;
    this.credit = credit;
    this.doesFly = flies;
  }

  whatsUpQuail() {
    console.log(`${this.name}, the quail, says whats up`);
  }
}