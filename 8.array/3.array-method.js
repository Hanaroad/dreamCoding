// 배열의 함수들
// # 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍑'];

// * 클래스 이름을 사용하면 static method 임.

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // 오브젝트가 배열이라면 true, 배열이 아니라면 false
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 1

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

// 추가 - 제일 뒤
let length = fruits.push('🍊'); // # 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍇'); // # 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // # 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // # 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 시작하는 인덱스의 1개를 삭제할 것임(1번째에 있는 1개를 삭제함)
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '💚', '💜'); // 배열의 인덱스 1번에서 시작해서, 0(하나도 삭제하지 않고), 추가하고자하는 아이템 전달(여러개도 상관 없음)
console.log(fruits); // [ '🍌', '💚', '💜', '🍑' ]

// 잘라진 새로운 배열을 만듦 // # 배열 자체 수정X
let newArr = fruits.slice(0, 2); // 시작하는 인덱스는 포함이고 끝나는 인덱스는 포함 X(즉, 0, 1 만 포함)
console.log(newArr); // [ '🍌', '💚' ]
console.log(fruits); // [ '🍌', '💚', '💜', '🍑' ]
newArr = fruits.slice(-1);
console.log(newArr); // [ '🍑' ]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); // 기본은 1단계까지만 풀어줌. 그래서 단계까지 풀어주려면 숫자를 넣어줘야함
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // # 배열 자체를 수정(업데이트)
console.log(arr);

arr.fill('s', 1, 3); // 1부터 3까지면 3은 포함되지 않음
console.log(arr);

arr.fill('a', 1); // 1부터 끝까지
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | ');
console.log(text);
