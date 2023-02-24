// # 카운터를 만들기
// # 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// # Counter 클래스 만들기

// class Counter {
//   constructor(count) {
//     this.count = count < 0 ? (count = 0) : count;
//   }

//   get value() {
//     return this.count;
//   }

//   addCount() {
//     this.count += 1;
//   }
// }

// const counter = new Counter(-9);
// counter.addCount(); // 1
// counter.addCount(); // 2
// counter.addCount(); // 3
// console.log(counter.value);

// - 엘리 답
// - 이 클래스를 어떻게 사용할것인지 사용자 입장에서 먼저 사용해보고
// - 이것을 위해 unit test를 작성함

// * 2번
class Counter {
  #value;
  constructor(startValue) {
    // 시작하는 value(startValue)를 외부로부터 받아와서 값을 초기화 시켜줌
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0; // 외부에서 접근하지 못하도록 #을 붙여주고 이를 사용하기 위해 위에도 #value를 넣어줌
    } else {
      this.#value = startValue; // => value는 외부에서 정해진 value(starValue)로 할거야
    }
  }
  // * 4번
  // 외부에서 value를 읽을수만.볼수만 있기 때문에 접근제어자 get을 사용해 value라는 것을 접근하면
  // 내부에 있는 this의 private 비공개 필드의 값을 리턴해줌
  get closeValue() {
    return this.#value;
  }

  // * 3번
  increment = () => {
    this.#value++;
  };
}

// * 1번
const counter = new Counter(10); // 클래스를 먼저 사용해보기
// counter.value = 5;
counter.increment();
console.log(counter.closeValue); // 카운터에 있는 현재 value 출력

// ! 전체 리뷰
// ! 카운터라는 클래스에 내부에서만 사용하는 value라는 내부 private field를 만들었음.
// ! 인스턴스를 생성할 때 외부에서 초기값을 전달받는데 이 초기값이 숫자가 아니거나 0보다 작다면 그냥 0으로 초기화해줌
// ! 만약 그 외의 경우라면 그 숫자부터 카운터화 될 수 있도록 값을 설정해줌
// ! closeValue라는 getter를 이용하여 현재 값을 읽기만 할 수 있음
// ! increment만을 이용하여 값을 증가시킬 수 있음
// ! 즉, 외부로 공개된 increment라는 함수를 이용하여 유일하게 value의 값을 증가시킬 수만 있음
// ! 외부에서 변경할 수 없게 만듦.
