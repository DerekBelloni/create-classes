export class Doggy {
  constructor(name, fur, paws,) {
    this.name = name;
    this.fur = fur;
    this.numPaws = paws;
  }

  whatsUpDoggy() {
    console.log(`${this.name} the doggy says, whats up`);
  }
}