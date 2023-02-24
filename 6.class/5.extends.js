// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹다');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹다');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('논다');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹다');
  }
  sleep() {
    console.log('자다');
  }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑');
console.log(tiger);

// * 대신에 자식 클래스에서 constructor를 정의하는 순간, Animal에 필요한 것을 다 받아와야함. ex) color
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // * super 는 내가 상속하고 있는 부모 클래스를 의미함
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀다');
  }

  // # 만약 Animal에 있는 eat을 dog에서 조금 다르게 먹고 싶다면?
  // # 부모에 있는 eat을 사용하지 않고 내가 다시 덮어 씌울 것임.
  // # 부모의 행동을 내 행동으로 덮어 씌움
  // # ==> 오버라이딩(overriding)
  eat() {
    // - 부모의 기능을 그대로 유지하면서 추가적인 기능을 하고 싶다면?
    // - super라는 키워드를 사용하여 부모의 eat이라는 함수를 호출하고 나서
    // - 내가 추가적으로 넣고 싶은것을 할 수 있음.
    // - 콘솔로그 찍으면
    // - 우선 부모의 '먹다'가 나오고 바로 밑에 '허겁지겁 먹다'라는 자식이 나옴
    super.eat();
    console.log('허겁지겁 먹다');
  }
}
const dog = new Dog('하양', '하나');
console.log(dog);
dog.play(); // 콘솔로그로 찍으면 undefined가 뜸
// console.clear();
dog.eat();
tiger.eat();
