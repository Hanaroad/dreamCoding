// 삼항 조건 연산자 Ternary Operator
// 조건식? 참인 경우 : 거짓인 경우
// 조건식이 true이면 첫번째 표현식 실행되고 false이면 두번째 표현식이 실행됨

let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('🍊');
}

fruit === 'apple' ? console.log('🍎') : console.log('🍊');

let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);
