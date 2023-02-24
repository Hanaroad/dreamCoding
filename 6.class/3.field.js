// # 접근제어자
// # private(#), public(기본), protected
class Fruit {
  // Fruit이라는 클래스에 name이라는 필드(=프로퍼티)가 있음
  // Fruit이라는 클래스에 emoji이라는 필드(=프로퍼티)가 있음
  #name;
  #emoji;
  // 그리고 만약 내가 클래스를 만들자마자 초기화하고 싶다면 생성자 밖에다가
  #type = '과일';
  constructor(name, emoji) {
    // 생성자를 통해 외부로부터 받은 데이터(name, emoji)를 이용하여 객체를 만들 수 있음
    this.#name = name; // private으로 하려면 위의 #name을 생략할 수 없음.
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// # 접근제어자를 사용하여 캡슐화 시킬 수 있음
// # 내부상에서 필요한 데이터를 외부에서 바꿀수 없도록 캡슐처럼 꽁꽁 숨겨놓는 것
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);
