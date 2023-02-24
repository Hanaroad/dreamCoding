// Spread 연산자(전개 구문)
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐질 수 있따.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3, 4];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  // first, second 빼고 나옴
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const friuts1 = ['🍎', '🍇'];
const friuts2 = ['🍊', '🍑'];
// let arr = friuts1.concat(friuts2);
// console.log(arr);
arr = [...friuts1, ...friuts2];
console.log(arr);

// Object
const hana = { name: 'Hana', age: '29' };
const updated = {
  ...hana,
  job: 's/w engineer',
};
console.log(hana);
console.log(updated);
