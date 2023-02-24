// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈
console.log(set.size); // 3

// 아이템이 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(4)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(5);
console.log(set); // Set(4) { 1, 2, 3, 5 }
// # 있는데 추가할 경우 set은 중복이 안 됨.
set.add(5);
console.log(set); // Set(4) { 1, 2, 3, 5 }

// 삭제
set.delete(5);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// ! 당연히 객체도 가능함 ! //
// 오브젝트 세트
const obj1 = { name: 'apple', price: 500 };
const obj2 = { name: 'orange', price: 400 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) {  { name: 'apple', price: 500 },  { name: 'orange', price: 400 }}

// * Quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: 'apple', price: 10 }, { name: 'orange', price: 400 } }

// * Quiz 2
const obj3 = { name: 'orange', price: 400 };
objs.add(obj3);
console.log(objs); // Set(3) { { name: 'apple', price: 10 }, { name: 'orange', price: 400 } , { name: 'orange', price: 400 } }
obj3.price = 1000;
console.log(objs); // Set(3) { { name: 'apple', price: 10 }, { name: 'orange', price: 400 } , { name: 'orange', price: 1000 } }
