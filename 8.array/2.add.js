// 배열 아이템을 참조하는 방법
const fruits = ['🍌', '🍎', '🍇', '🍑'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 ❌
// const fruits = ['🍌', '🍎', '🍇', '🍑'];

// * index로 바로 접근하는 방식은 좋지 않음.

// * fruits[6] = '🥭';
// * console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', <2 empty items>, '🥭'  ]

// * delete fruits[1];
// * console.log(fruits); // [ '🍌', <1 empty item>, '🍇', '🍑', '🥭'  ]

// - 추가
fruits[fruits.length] = '🥭';
console.log(fruits);
