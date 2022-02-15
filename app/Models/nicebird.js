export class Nicebird {
  constructor(name, age, nice) {
    this.name = name;
    this.age = age;
    this.isNice = nice;
  }

  whatUpNiceBird() {
    console.log(`${this.name}, the nice bird, says whats up`);
  }
}