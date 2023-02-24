// Iterable 하다는 건 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은 순회 가능한 객체이다 라는 것을 알 수 있음
// 순회가 가능하면 무엇을 할 수 있는지: for...of, spread 연산자

const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

// TypeError: obj is not iterable
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // for...of는 안되지만 for...in은 key가 출력되는 것을 알 수 있음
  console.log(item);
}

const iterator = array.values();
// console.log(iterator.next()); // { value: 1, done: false }
// value라는 키에는 실제값이, 두번째 키는 반복이 끝났는지 안끝났는지
// for (const item of iterator) {
//   console.log(item);
// }
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
