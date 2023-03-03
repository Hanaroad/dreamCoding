// - 동결 : Object.freeze

const hana = {
  name: '하나',
};
const dog = {
  name: '흰둥이',
  emoji: '🐶',
  owner: hana,
};

Object.freeze(dog);

// # 1. 동결된 객체는 수정할 수 없음(추가X, 삭제X, 쓰기X, 속성 재정의 X)
dog.name = '바둑이';
console.log(dog);
dog.age = 2;
console.log(dog);
delete dog.name;
console.log(dog); // { name: '흰둥이', emoji: '🐶', owner: { name: '하나' } }

// # 2. 단, 얕은 꽁꽁 얼림은 가능
hana.name = '하남';
console.log(dog); // { name: '흰둥이', emoji: '🐶', owner: { name: '하남' } }

/////////////////////////////////////////!SECTION

// - 밀봉 : Object.seal
const cat = { ...dog };
// Object.assign(cat, dog);
console.log(cat); // { name: '흰둥이', emoji: '🐶', owner: { name: '하남' } }

Object.seal(cat);

// # 1. 밀봉된 객체는 값을 수정할 수 있음.
// # 2. 키 자체를 추가 하는 것은 안됨 X, 삭제 X, 속성 재정의 X
cat.name = '냐옹이';
console.log(cat); // { name: '냐옹이', emoji: '🐶', owner: { name: '하남' } }
delete cat.emoji;
console.log(cat); // { name: '냐옹이', emoji: '🐶', owner: { name: '하남' } } : 삭제는 되지 않았음

/////////////////////////////////////////!SECTION

// - 동결되었는지 밀봉되었는지 확인하는 방법
console.log(Object.isFrozen(dog)); // true
console.log(Object.isFrozen(cat)); // false

/////////////////////////////////////////!SECTION

// - 확장 금지 preventExtensions : 추가 만 안됨!
const tiger = {
  name: '호랑이',
};

Object.preventExtensions(tiger);

console.log(Object.isExtensible(tiger)); // false

tiger.name = '장태산호랭이';
console.log(tiger); // { name: '장태산호랭이' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 100;
console.log(tiger); // {}
