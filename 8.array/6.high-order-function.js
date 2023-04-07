// 고차함수(Higher-order function)
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수를 고차함수

// 함수형 프로그래밍을 하기 위해서는 함수 자체를 순수함수로 만드는 것이 중요함
// 그러기 위해서는 함수 안에서 불변성을 유지해야함.
// 즉, side effect이 없게 만든다는 의미(부작용 ❌)

const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는 것을 할 때

// fruits.forEach(function (value, index, array) {
//   console.log('--------------');
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => {
  console.log(value);
});

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍳', price: '2' };
const item2 = { name: '🧀', price: '3' };
const item3 = { name: '🥚', price: '1' };
const products = [item1, item2, item3, item2];

// const found = products.find((value) => {
//   return value.name === '🧀';
// });
// 간결하게 ↓↓↓↓↓↓↓
let result = products.find((value) => value.name === '🧀');
console.log(result); // { name: '🧀', price: '3' }

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🧀');
console.log(result); // 1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🧀');
console.log(result); // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🧀');
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🧀');
console.log(result); // [ { name: '🧀', price: '3' }, { name: '🧀', price: '3' } ]
