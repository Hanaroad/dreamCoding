// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  // array만 있고 직접 인자를 고르면 재사용성이 떨어지므로 from, to 인자를 더 넣어서 재사용성을 높임
  const replaceArr = Array.from(array);
  for (let i = 0; i < replaceArr.length; i++) {
    if (replaceArr[i] === from) {
      replaceArr[i] = to;
    }
  }
  return replaceArr;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

////////////////////////////////////////////////////////!SECTION
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

////////////////////////////////////////////////////////!SECTION
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
