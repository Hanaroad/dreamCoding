// object는 단 하나의 prototype을 가리킬 수 있다.(부모는 단 하나!)
// 하지만! 여러개의 함수를 상속하고 싶다면 사용하는 함수: Mixin

const play = {
  play: function () {
    console.log(`${this.name} 놀다`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자다`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);

const dog = new Dog('바둑스');
console.log(dog);
dog.play();
dog.sleep();

///////////////////////////////////////////!SECTION

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);

const tiger = new Tiger('보문산호랭이');
console.log(tiger);
tiger.play();
tiger.sleep();
