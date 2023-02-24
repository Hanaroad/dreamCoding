// # let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// ! text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // * 상수를 만들때는 대문자로 쓰고 문자와 문자 사이는 _ 로 구분해줘야함.

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = 'cherry';
console.log(apple.name);
apple.display = '🍒';
console.log(apple.display);
// * 즉, apple이라는 메모리 셀에 있는 데이터를 변경할 수 없음.
// * 그렇지만, object가 가르키는 곳에 있는 object변경은 가능함. 재할당만 되지 않는다!
// - const는 재할당은 불가능하지만 변경은 가능하다(Reassignable NO / Mutable YES)
