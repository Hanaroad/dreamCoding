// 클래스를 베이스로한 객체지향 프로그래밍

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  //   constructor(name, emoji, owner) {
  //     super(name, emoji);
  //     this.owner = owner;
  //   }
  play() {
    console.log('같이 놀멍!');
  }
}

const dog = new Dog('흰둥이', '🐶', '하나');
dog.play();
dog.printName();

class Tiger extends Animal {
  //   constructor(name, emoji) {
  //     super(name, emoji);
  //   }
  hunt() {
    console.log('사냥 하랑이');
  }
}

const tiger = new Tiger('호랭이', '🐯');
tiger.hunt();
tiger.printName();
