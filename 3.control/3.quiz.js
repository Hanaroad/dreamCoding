// #퀴즈
let num = 2;
// #num의 숫자가 짝수이면 💚, 홀수라면 💜을 출력하도록
// 1. if
// 2. ternary operator

// * 내가 한거
// 1. if
if (num++) {
  console.log('💚');
} else {
  console.log('💜');
}

// 2. ternary operator
num == num++ ? console.log('💚') : console.log('💜');
// **

// - 엘리 답
if (num % 2 === 0) {
  console.log('💚');
} else {
  console.log('💜');
}

num % 2 === 0 ? console.log('💚') : console.log('💜');
let emoji = num % 2 === 0 ? '💚' : '💜'; // 위 코드 간소화 하기
console.log(emoji);
// -
