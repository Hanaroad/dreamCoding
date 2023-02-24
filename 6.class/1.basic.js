// - 자바스크립트는 프로토타입을 기반으로 한 객체지향 프로그램을 지원해 줌
// - 클래스란? 객체를 생성할 수 있는 템플릿(청사진, 틀)
// - 클래스나 생성자 함수를 통해서 객체지향 프로그래밍을 할 수 있음
// - 요즘 대세는 클래스. (생성자 함수는 거의 사용 안함) 왜냐면, 클래스가 프로토타입보다 간편함
// - 클래스를 통해 만들어진 객체: Instance(인스턴스)
// //!SECTION

// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ⭕

// # 클래스 class
class Fruit {
  // # 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    // function display () 하면 에러가 남.
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit이라는 클래스의 인스턴스임.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit이라는 클래스의 인스턴스임.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'hana' };
