// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments);
  //   console.log(arguments[2]);
  return a + b;
}
add(); // 인자가 add(1,2,3); 이라고 하면 콘솔로그 해서 a,b는 각각 1,2가 찍히고 3은 안나옴.
// arguments는 {'0': 1, '1': 2, '2': 3} 가 나옴

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
