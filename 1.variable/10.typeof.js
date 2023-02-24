// 자바스크립트 엔진은 인터프리터(런타임시(=어플리케이션이 동작할 때) 코드를 한줄씩 번역해서 실행) => 동적타입
// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // - 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
