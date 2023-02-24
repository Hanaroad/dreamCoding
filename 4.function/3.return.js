// return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨!
function add(a, b) {
  //return a + b;
  return undefined;
}
const result = add(1, 2);
// console.log(result);

// # return을 함수 중간에 하게 되면 함수가 종료됨
// # 사용예시: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
// - -12를 출력하고 싶지 않고 12만 출력하고 싶은 경우
function printNum(num) {
  if (num < 0) {
    return; // return;(=return undefined;의 약자) // * 여기서 함수 종료!
  }
  console.log(num);
}
printNum(12);
printNum(-12);
