export class Kangaroo {
  constructor(name, age, kicks, jumps) {
    this.name = name;
    this.age = age;
    this.doesKick = kicks;
    this.doesJump = jumps;
  }

  whatsUpKangaroo() {
    console.log(`${this.name}, the kangaroo, says whats up`);
  }
}