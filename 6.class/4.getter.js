class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // # 접근자 프로퍼티(Accessor Property)
  // 접근자 프로퍼티를 사용하면 함수지만 즉, 고정된 값이 아니라 이것을 호출하는 시점에
  // 데이터를 만들어서 리턴을 하는데 이는 속성에 가깝기 때문에
  // get 이라는 키워드를 붙이면 함수를 호출하는 것처럼 호출하지 않고
  // 속성에 접근하듯이 만들수 있음.
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  // get은 접근, set은 할당
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('하나', '조');

// fullName은 함수이므로 함수를 호출하듯이 부름
// console.log(student.fullName());
// firstName, lastName은 속성에 접근하듯이 부름
// console.log(student.firstName);

student.firstName = '미영';
student.lastName = '황';
// console.log(student.firstName);
console.log(student.fullName);
student.fullName = '조용호';
