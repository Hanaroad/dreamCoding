// 엄격모드 (Strict Mode)
// 리액트와 같은 프레임워크 사용 시 기본적으로 엄격 모드 임

'use strict';

// 엄격모드를 사용하면
// 1. 변수를 선언하고 delete로 지우는 것 안됨!
var x = 1;
// delete x;

// 2. 존재하지 않는 변수를 사용하면 에러가 뜸
function add(x) {
  var a = 2;
  //   b = a + x; // ReferenceError: b is not defined

  //   3. 함수 내부에서 this를 출력하면 undefined이 뜸
  console.log(this); // undefined
}
add(1);

// 4. let이나 const와 같은 키워드를 사용하여 변수를 선언하지 않으면 에러가 발생함.
const array = [1, 2, 3];
for (num of array) {
  // for (let num) or for (const num)
  console.log(num);
}
