// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨(그리고, 변경될 수 없음)
// * 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`우리가 누구냐고 물어본다면 ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 세계의 평화를 지키기 위해 ${this.name}`);
  };
}

const cat = new Cat('대답해드리는게 인지상정');
const dog = new Dog('이 세계의 파괴를 막기 위해');
cat.printName();
dog.printName();

// dog.printName = cat.printName;
cat.printName = dog.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행');
  printName();
}

printOnMonitor(cat.printName); // undefined : 호출하는 사람이 없기때문에
