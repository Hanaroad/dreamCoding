// 클로저 사용 이유: 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 쓰임
// 캡슐화와 정보 은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!

// - closure로 만들기

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// ////////////////!SECTION
// - class로 만들기

class Counter {
  #count = 0; // private field
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
