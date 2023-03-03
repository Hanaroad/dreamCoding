// 객체지향 프로그래밍의 가장 큰 장점: 상속을 통한 코드의 재사용성
// 프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji); // class의 super을 호출하는 것과 동일
  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Object.prototype); : 기본적으로 Dog의 프로토타입은 Object임

Dog.prototype.play = () => {
  console.log('같이 놀멍!');
};

const dog1 = new Dog('흰둥이', '🐶', '하나');
dog1.play();
dog1.printName();

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥 하랑이~');
};

const tiger1 = new Tiger('호랭이', '🐯');
tiger1.hunt();
tiger1.printName();

// * 개체의 상속도, 어떤 프로토타입을 따르는지 알고 싶을 때 사용: instanceof
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Dog); // false
console.log(tiger1 instanceof Animal); // true
console.log(tiger1 instanceof Tiger); // true
