export class Orangebear {
  constructor(name, age, orange) {
    this.name = name;
    this.age = age;
    this.isOrange = orange;
  }

  whatUpOrangeBear() {
    console.log(`${this.name}, the orange bear, says whats up`);
  }
}