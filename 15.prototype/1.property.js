const dog = { name: '바둑이', emoji: '🐶' };
console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '바둑이', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '바둑이' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//   name: {
//     value: '바둑이',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }
const des = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(des); // { value: '바둑이', writable: true, enumerable: true, configurable: true }

// # 변경 : defineProperty
Object.defineProperty(dog, 'name', {
  value: '흰둥이',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); // 흰둥이
// 이름은 writable 하지않고 enumerable 하지 않고 configurable 하지 않다고 했으므로
// 콘솔 로그를 찍어도 나타나지 않음.
console.log(Object.keys(dog)); // [ 'emoji' ]
console.log(Object.values(dog)); // [ '🐶' ]
console.log(Object.entries(dog)); // [ [ 'emoji', '🐶' ] ]
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '하나',
    writable: 'true',
    enumerable: 'true',
    configurable: 'true',
  },
  lastName: {
    value: '조',
    writable: 'true',
    enumerable: 'true',
    configurable: 'true',
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});

console.log(student);
console.log(student.fullName);
