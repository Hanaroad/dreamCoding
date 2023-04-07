// 동등 비교 관계 연산자(Equality operators)

// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // *
console.log(2 === '2'); // *
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};
console.log(obj1 == obj2); // false : 메모리 공간에 서로 다른 메모리 주소로 저장이 되어있으므로
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2; // true: obj3 과 obj2 는 동일한 메모리 주소를 가지고 있기 때문
console.log(obj3 == obj2);
console.log(obj3 === obj2);
