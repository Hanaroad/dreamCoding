// const dog1 = {
//   name: 'ν°λ₯μ΄',
//   emoji: 'πΆ',
// };
// const dog2 = {
//   name: 'λλ μ΄',
//   emoji: 'π',
// };

// class Dog {
//     constructor(name, emoji) {
//         this.name = name;
//         this.emoji = emoji;
//     }
// }

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // μΈμ€ν΄μ€ λ λ²¨μ ν¨μ
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// νλ‘ν νμ λ λ²¨μ ν¨μ
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('ν°λ₯μ΄', 'πΆ');
const dog2 = new Dog('λλ μ΄', 'π');
console.log(dog1, dog2);

dog1.printName();
dog2.printName();

// μ€λ²λΌμ΄λ©
// μΈμ€ν΄μ€ λ λ²¨μμ(μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ νλ©΄(μ€λ²λΌμ΄λ© νλ©΄) νλ‘ν νμ λ λ²¨μ(λΆλͺ¨) ν¨μ νλ‘νΌν°λ κ°λ €μ§λ€(μλμ λ¨)
dog1.printName = function () {
  console.log('HI');
};
dog1.printName(); // HI

// μ μ  λ λ²¨
Dog.hello = () => {
  console.log('μλ');
};
// dog1.hello(); // TypeError: dog1.hello is not a function
Dog.hello();
Dog.MAX_AGE = 20;
