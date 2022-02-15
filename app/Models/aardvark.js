export class Aardvark {
  constructor(name, tail, age, sleepy) {
    this.name = name;
    this.tail = tail;
    this.age = age;
    this.isSleepy = sleepy;
  }

  whatsUpAardvark() {
    console.log(`${this.name} the ${this.isSleepy ? 'sleepy' : ''} aardvark, says whats up`)
  }
}