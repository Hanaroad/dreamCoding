function Cat(name) {
  this.name = name;
  // this.printName = function() {
  // 2. 표현식이 아니라 화살표(arrow) 함수로 사용하기
  // arrow 함수는 렉시컬 환경에서의 this를 기억함
  // 화살표 함수 밖에서 가장 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`${this.name} : 고양이`);
  };
  //   1. bind 함수를 이용하여 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`${this.name} : 개`);
  };
}

const cat = new Cat('냐옹이');
const dog = new Dog('멍멍이');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행');
  printName();
}

printOnMonitor(cat.printName);
