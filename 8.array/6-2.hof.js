// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
let result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
  if (item % 2 === 0) {
    // 짝수일때만 2배를 하고 싶으면
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// Flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result);
// [
//   1, 2, 1, 2, 1,
//   2, 1, 2, 1, 2
// ]

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort: 배열의 아이템들 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] => 문자열 형태로 변환이 됨

// * < 0 a가 앞으로 정렬 => 오름차순
// * > 0 b가 앞으로 정렬 => 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]

// reduce : 배열의 요소들을 접어서 접어서 값을 하나로!
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); // 0 = initial value
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);

console.log(result); // 15
