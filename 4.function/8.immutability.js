function display(num) {
  console.log(num); // 4
}
const value = 4;
display(value);

// * 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 옳지 않음!!!! ❌
// * 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함!
// 원시값: 값에 의한 복사임
// 객체값: 참조에 의한 복사(메모리주소)
function display1(num) {
  num = 5; // ❌
  console.log(num); // 5
}
const value1 = 4;
display1(value1);
console.log(value1); // 4

// ** 안되는 경우에 대한 심각한 예제
function displayObject(obj) {
  obj.name = 'two'; // 외부로부터 주어진 인자(오브젝트)를 내부에서 변경❌
  console.log(obj);
}
const hana = { name: 'hana' };
displayObject(hana);
console.log(hana);

// *** 그렇다면 어떻게 써야하는가? => 오브젝트 리터럴 사용
function changeName(obj) {
  // 1. 이름부터 변경하는 느낌을 주도록 함
  return { ...obj, name: 'two' }; // 2. 반환시 새로운 오브젝트 만들기
}
