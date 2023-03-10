const dog = { name: 'λ°λμ΄', emoji: 'πΆ' };
console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ 'λ°λμ΄', 'πΆ' ]
console.log(Object.entries(dog)); // [ [ 'name', 'λ°λμ΄' ], [ 'emoji', 'πΆ' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// μ€λΈμ νΈμ κ°κ°μ νλ‘νΌν°λ νλ‘νΌν° λμ€ν¬λ¦½ν°λΌκ³  νλ κ°μ²΄λ‘ μ μ₯λ¨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//   name: {
//     value: 'λ°λμ΄',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   emoji: { value: 'πΆ', writable: true, enumerable: true, configurable: true }
// }
const des = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(des); // { value: 'λ°λμ΄', writable: true, enumerable: true, configurable: true }

// # λ³κ²½ : defineProperty
Object.defineProperty(dog, 'name', {
  value: 'ν°λ₯μ΄',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); // ν°λ₯μ΄
// μ΄λ¦μ writable νμ§μκ³  enumerable νμ§ μκ³  configurable νμ§ μλ€κ³  νμΌλ―λ‘
// μ½μ λ‘κ·Έλ₯Ό μ°μ΄λ λνλμ§ μμ.
console.log(Object.keys(dog)); // [ 'emoji' ]
console.log(Object.values(dog)); // [ 'πΆ' ]
console.log(Object.entries(dog)); // [ [ 'emoji', 'πΆ' ] ]
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: 'νλ',
    writable: 'true',
    enumerable: 'true',
    configurable: 'true',
  },
  lastName: {
    value: 'μ‘°',
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
