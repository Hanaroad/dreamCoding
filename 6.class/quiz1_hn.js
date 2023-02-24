// # 카운터를 만들기
// # 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// # Counter 클래스 만들기

// class Cnt {
//   #defaultValue;
//   constructor(defaultValue) {
//     if (isNaN(defaultValue) || defaultValue < 0) {
//       this.#defaultValue = 0;
//     } else {
//       this.#defaultValue = defaultValue;
//     }
//   }

//   get currentValue() {
//     return this.#defaultValue;
//   }

//   increment() {
//     this.#defaultValue++;
//   }
// }

// const cnt = new Cnt(10);
// cnt.defaultValue = 5; // 작동 X
// cnt.increment();
// cnt.increment();
// console.log(cnt.currentValue);

///////////////////////////////////////////////////////////////////////////!SECTION
///////////////////////////////////////////////////////////////////////////!SECTION
///////////////////////////////////////////////////////////////////////////!SECTION
///////////////////////////////////////////////////////////////////////////!SECTION
///////////////////////////////////////////////////////////////////////////!SECTION
// //! 다시
// # 카운터를 만들기
// # 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// # Counter 클래스 만들기

class Cnt {
  #defaultValue;
  constructor(defaultValue) {
    if (isNaN(defaultValue) || defaultValue < 0) {
      this.#defaultValue = 0;
    } else {
      this.#defaultValue = defaultValue;
    }
  }
  get currentValue() {
    return this.#defaultValue;
  }
  increment = () => {
    this.#defaultValue++;
  };
}

const cnt = new Cnt(100);
cnt.increment();
cnt.increment();
cnt.increment();
console.log(cnt.currentValue);
