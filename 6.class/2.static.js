// static 정적 프로퍼티, 메서드
class Fruit {
  // #
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // # 클래스 레벨의 메서드
  static makeRandomFruit() {
    // # 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // # 이유: 데이터가 주어지지 않은 상태이므로 즉, 템플릿이므로.
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// #
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// //!SECTION

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// #static 함수 예시
Math.pow();
Number.isFinite(1);
