// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // 0 x 1234
  name: '사과',
};
let orange = apple; // 0 x 1234
orange.name = '오렌지';
console.log(apple); // 오렌지
console.log(orange); // 오렌지

// - 원시타입은 값 자체가 메모리에 들어있고 객체 타입은 참조값이 들어있음.
