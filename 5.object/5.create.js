// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : 🍎`);
//   },
// };
// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} : 🍊`);
//   },
// };

// - 생성자 함수는 붕어빵틀 처럼 객체를 찍어낼 수 있는 템플릿(양식)같은 것
// - 즉, 객체는 붕어빵과 같음

// # 위 함수를 간편하게 생성자 함수로 만들기
function Fruit(name, emoji) {
  // 생성자 함수는 대문자로 시작
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();
