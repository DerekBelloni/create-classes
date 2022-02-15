export class Snake {
  constructor(name, age, evil) {
    this.name = name;
    this.age = age;
    this.isEvil = evil;
  }

  whatsUpSnake() {
    console.log(`${this.name}, the snake, says whats up`);
  }
}