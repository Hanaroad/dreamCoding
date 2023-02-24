// map은 값(value)은 중복이 가능하지만 키(key)는 유일해야함.
// map은 object와 유사. 즉, map을 object처럼 사용할 수 있고 object를 map처럼 사용할 수 있음.
// # map은 키를 이용해서 찾고 확인하고 추가하고 삭제할 수 있음.

const map = new Map([
  ['key1', 'apple'],
  ['key2', 'banana'],
]);
console.log(map); // Map(2) { 'key1' => 'apple', 'key2' => 'banana' }

// 사이즈 확인 : size
console.log(map.size); // 2

// 존재하는지 확인 : has
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// 순회 : forEach
map.forEach((key, value) => console.log(key, value)); // key1 apple key2 banana
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { 'apple', 'banana' }
console.log(map.entries()); // [Map Entries] { [ 'key1', 'apple' ], [ 'key2', 'banana' ] }

// 찾기 : get
console.log(map.get('key1')); // apple
console.log(map.get('key2')); // banana
console.log(map.get('key3')); // undefined

// 추가 : set
map.set('key4', 'orange');
console.log(map); // Map(3) { 'key1' => 'apple', 'key2' => 'banana', 'key4' => 'orange' }

// 삭제 : delete
map.delete('key4');
console.log(map); // Map(2) { 'key1' => 'apple', 'key2' => 'banana' }

// 전부삭제 : clear
map.clear();
console.log(map); // Map(0) {}

// ! 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 500 };
const milk = { name: 'milk', price: 500, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 500, description: '맛있는우유' } }
// 즉, key는 object이고 값은 milk
const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 500 } => { name: 'milk', price: 500, description: '맛있는우유' } }

// ! 1. 사용할 수 있는 함수가 다름
// ! 2. object에서는 키를 동적으로 접근할 수 있었음. 그렇지만, map은 그렇게 접근이 불가함.
console.log(obj[key]); // { name: 'milk', price: 500, description: '맛있는우유' }
console.log(map2[key]); // undefined
// ! 그러므로 map에서 일정한 키를 찾으려면
console.log(map2.get(key)); // { name: 'milk', price: 500, description: '맛있는우유' }
