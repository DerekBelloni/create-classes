export class Llama {
  constructor(name, age, spits) {
    this.name = name;
    this.age = age;
    this.doesSpit = spits;
  }

  whatsUpLlama() {
    console.log(`${this.name}, the llama, says whats up`);
  }
}