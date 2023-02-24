// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

add = (a, b) => a + b;
console.log(add(5, 6));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions) : 함수를 괄호로 묶어서 바로 표현해주는 표현식
(function run() {
  console.log('👌');
})();
