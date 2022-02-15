export class Iguana {
  constructor(name, age, lizard) {
    this.name = name;
    this.age = age;
    this.isLizard = lizard;
  }

  whatUpIguana() {
    console.log(`${this.name}, the iguana, says whats up`);
  }

}